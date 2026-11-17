import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LanguageService } from '../../core/services/language.service';
import { SOCIAL_LINKS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: 'contact.component.html'
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
    name: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    projectType: ['Desktop Software (Billing / POS / ERP)'],
    budget: ['₹35,000 – ₹75,000'],
    message: ['', [Validators.required, Validators.minLength(5)]]
  });

  isFieldInvalid(controlName: 'name' | 'phone' | 'message'): boolean {
    const control = this.enquiryForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  submitViaEmail(): void {
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      return;
    }

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
    if (this.enquiryForm.invalid) {
      this.enquiryForm.markAllAsTouched();
      return;
    }

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