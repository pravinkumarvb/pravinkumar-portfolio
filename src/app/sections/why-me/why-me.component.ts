import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-why-me',
  standalone: true,
  template: `
    <section id="why-me" class="py-5" style="background-color: var(--brand-surface);">
      <div class="container py-lg-3">
        <div class="text-center mx-auto mb-5" style="max-width: 720px;">
          <h2 class="fw-bold mb-2">{{ langService.content().whyMe.heading }}</h2>
          <p class="text-muted mb-0">{{ langService.content().whyMe.subheading }}</p>
        </div>

        <div class="row g-4 align-items-stretch">
          <!-- Left Card: Typical Local Developer -->
          <div class="col-md-6">
            <div class="card h-100 border-danger border-opacity-25 shadow-sm rounded-4">
              <div class="card-body p-4">
                <div class="d-flex align-items-center gap-2 text-danger fw-bold mb-3">
                  <i class="fa-solid fa-triangle-exclamation fs-5"></i>
                  <h3 class="h5 fw-bold mb-0">{{ langService.content().whyMe.localDevTitle }}</h3>
                </div>
                <ul class="list-unstyled d-grid gap-3 mb-0">
                  @for (point of langService.content().whyMe.localDevPoints; track point) {
                    <li class="d-flex align-items-start gap-2 text-secondary">
                      <i class="fa-solid fa-xmark text-danger mt-1"></i>
                      <span>{{ point }}</span>
                    </li>
                  }
                </ul>
              </div>
            </div>
          </div>

          <!-- Right Card: My Engineering Guarantee -->
          <div class="col-md-6">
            <div class="card h-100 border-primary border-2 shadow rounded-4 bg-white">
              <div class="card-body p-4">
                <div class="d-flex align-items-center gap-2 text-primary fw-bold mb-3">
                  <i class="fa-solid fa-award fs-5"></i>
                  <h3 class="h5 fw-bold mb-0">{{ langService.content().whyMe.myStandardTitle }}</h3>
                </div>
                <ul class="list-unstyled d-grid gap-3 mb-0">
                  @for (point of langService.content().whyMe.myStandardPoints; track point) {
                    <li class="d-flex align-items-start gap-2 text-dark fw-medium">
                      <i class="fa-solid fa-circle-check text-success mt-1"></i>
                      <span>{{ point }}</span>
                    </li>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class WhyMeComponent {
  readonly langService = inject(LanguageService);
}