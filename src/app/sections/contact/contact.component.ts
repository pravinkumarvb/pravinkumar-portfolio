import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LanguageService } from '../../core/services/language.service';
import { SOCIAL_LINKS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section id="contact" class="py-5 bg-white">
      <div class="container py-lg-4">
        <div class="row g-4 g-lg-5 align-items-start">
          <!-- Left Column: Direct Trust & Quick Connect -->
          <div class="col-lg-5">
            <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold mb-2">
              <i class="fa-solid fa-bolt me-1"></i>
              {{ langService.currentLang() === 'en' ? 'Fast Response Within 24 Hours' : '24 घंटे के भीतर सीधा संपर्क' }}
            </span>
            <h2 class="fw-bold display-6 mb-3">{{ langService.content().contact.heading }}</h2>
            <p class="text-secondary mb-4">{{ langService.content().contact.subheading }}</p>

            <!-- Direct Contact Cards -->
            <div class="d-grid gap-3 mb-4">
              <a
                [href]="getDirectWhatsAppLink()"
                target="_blank"
                rel="noopener noreferrer"
                class="card p-3 text-decoration-none border-success border-opacity-50 bg-success bg-opacity-10 rounded-4">
                <div class="d-flex align-items-center gap-3">
                  <div class="rounded-circle bg-success text-white d-flex align-items-center justify-content-center" style="width: 46px; height: 46px;">
                    <i class="fa-brands fa-whatsapp fs-4"></i>
                  </div>
                  <div>
                    <div class="fw-bold text-dark">
                      {{ langService.currentLang() === 'en' ? 'Instant WhatsApp Chat' : 'सीधा WhatsApp पर बात करें' }}
                    </div>
                    <small class="text-secondary">
                      {{ langService.currentLang() === 'en' ? 'Discuss your requirement directly' : 'अपने प्रोजेक्ट पर तुरंत चर्चा करें' }}
                    </small>
                  </div>
                </div>
              </a>

              <a
                [href]="socials.linkedin"
                target="_blank"
                rel="noopener noreferrer"
                class="card p-3 text-decoration-none rounded-4">
                <div class="d-flex align-items-center gap-3">
                  <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style="width: 46px; height: 46px;">
                    <i class="fa-brands fa-linkedin-in fs-5"></i>
                  </div>
                  <div>
                    <div class="fw-bold text-dark">LinkedIn Profile</div>
                    <small class="text-secondary">
                      {{ langService.currentLang() === 'en' ? 'Verify 18+ years work history' : '18+ वर्षों का अनुभव जांचें' }}
                    </small>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <!-- Right Column: Interactive Enquiry Form -->
          <div class="col-lg-7">
            <div class="card rounded-4 border shadow-lg p-4 p-md-5 bg-white">
              @if (submittedSuccess()) {
                <div class="alert alert-success d-flex align-items-center gap-3 rounded-3 mb-4" role="alert">
                  <i class="fa-solid fa-circle-check fs-4"></i>
                  <div>{{ langService.content().contact.successMsg }}</div>
                </div>
              }

              @if (errorMessage()) {
                <div class="alert alert-danger rounded-3 mb-4" role="alert">
                  {{ errorMessage() }}
                </div>
              }

              <form [formGroup]="enquiryForm" (ngSubmit)="submitViaEmail()">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label fw-semibold small">{{ langService.content().contact.nameLabel }} *</label>
                    <input
                      type="text"
                      formControlName="name"
                      class="form-control"
                      [placeholder]="langService.currentLang() === 'en' ? 'e.g. Rajesh Sharma / Apex Mart' : 'उदा. राजेश शर्मा / कंपनी नाम'" />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label fw-semibold small">{{ langService.content().contact.phoneLabel }} *</label>
                    <input
                      type="tel"
                      formControlName="phone"
                      class="form-control"
                      placeholder="+91 98XXXXXXXX" />
                  </div>

                  <div class="col-md-6">
                    <label class="form-label fw-semibold small">{{ langService.content().contact.typeLabel }}</label>
                    <select formControlName="projectType" class="form-select">
                      @for (opt of langService.content().contact.typeOptions; track opt) {
                        <option [value]="opt">{{ opt }}</option>
                      }
                    </select>
                  </div>

                  <div class="col-md-6">
                    <label class="form-label fw-semibold small">{{ langService.content().contact.budgetLabel }}</label>
                    <select formControlName="budget" class="form-select">
                      @for (b of langService.content().contact.budgetOptions; track b) {
                        <option [value]="b">{{ b }}</option>
                      }
                    </select>
                  </div>

                  <div class="col-12">
                    <label class="form-label fw-semibold small">{{ langService.content().contact.messageLabel }} *</label>
                    <textarea
                      formControlName="message"
                      rows="4"
                      class="form-control"
                      [placeholder]="langService.currentLang() === 'en' ? 'Tell me about your business workflow, timeline, or issues with your current software...' : 'अपने बिजनेस और सॉफ्टवेयर की जरूरत के बारे में लिखें...'"></textarea>
                  </div>

                  <!-- Dual Action Buttons: Email + WhatsApp -->
                  <div class="col-12 pt-2 d-flex flex-column flex-sm-row gap-3">
                    <button
                      type="submit"
                      [disabled]="enquiryForm.invalid || isSubmitting()"
                      class="btn btn-primary btn-lg fw-semibold flex-fill shadow-sm">
                      @if (isSubmitting()) {
                        <span class="spinner-border spinner-border-sm me-2"></span>
                      } @else {
                        <i class="fa-solid fa-envelope me-2"></i>
                      }
                      {{ langService.content().contact.submitEmailBtn }}
                    </button>

                    <button
                      type="button"
                      (click)="sendViaWhatsApp()"
                      [disabled]="enquiryForm.invalid"
                      class="btn btn-success btn-lg fw-semibold flex-fill shadow-sm">
                      <i class="fa-brands fa-whatsapp me-2 fs-5"></i>
                      {{ langService.content().contact.submitWhatsAppBtn }}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  readonly langService = inject(LanguageService);
  readonly socials = SOCIAL_LINKS;
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  readonly isSubmitting = signal(false);
  readonly submittedSuccess = signal(false);
  readonly errorMessage = signal('');

  readonly enquiryForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    projectType: ['Desktop Software (Billing / POS / ERP)'],
    budget: ['₹35,000 – ₹75,000'],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  submitViaEmail(): void {
    if (this.enquiryForm.invalid) return;

    this.isSubmitting.set(true);
    this.errorMessage.set('');
    this.submittedSuccess.set(false);

    const endpoint = `https://formsubmit.co/ajax/${this.socials.email}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    const payload = {
      _subject: `New Software Enquiry from ${this.enquiryForm.value.name}`,
      _template: 'table',
      _captcha: 'false',
      Name: this.enquiryForm.value.name,
      Phone: this.enquiryForm.value.phone,
      Requirement: this.enquiryForm.value.projectType,
      Budget: this.enquiryForm.value.budget,
      Message: this.enquiryForm.value.message
    };

    this.http.post<{ success: string | boolean }>(endpoint, payload, { headers }).subscribe({
      next: () => {
        this.isSubmitting.set(false);
        this.submittedSuccess.set(true);
        this.enquiryForm.reset({
          projectType: this.langService.content().contact.typeOptions[0],
          budget: this.langService.content().contact.budgetOptions[1]
        });
      },
      error: () => {
        this.isSubmitting.set(false);
        this.errorMessage.set(
          this.langService.currentLang() === 'en'
            ? 'Email service unavailable right now. Please click "Send Directly on WhatsApp" below.'
            : 'ईमेल भेजने में समस्या आई। कृपया नीचे दिए गए WhatsApp बटन से सीधे संदेश भेजें।'
        );
      }
    });
  }

  sendViaWhatsApp(): void {
    if (this.enquiryForm.invalid) return;

    const { name, phone, projectType, budget, message } = this.enquiryForm.getRawValue();
    const formattedText =
      `Hello Pravinkumar,\n` +
      `*New Project Enquiry*\n` +
      `• *Name:* ${name}\n` +
      `• *Phone:* ${phone}\n` +
      `• *Requirement:* ${projectType}\n` +
      `• *Budget:* ${budget}\n` +
      `• *Details:* ${message}`;

    const url = `https://wa.me/${this.socials.whatsappNumber}?text=${encodeURIComponent(formattedText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  getDirectWhatsAppLink(): string {
    const text = 'Hello Pravinkumar, I visited your portfolio and would like to discuss a software project.';
    return `https://wa.me/${this.socials.whatsappNumber}?text=${encodeURIComponent(text)}`;
  }
}