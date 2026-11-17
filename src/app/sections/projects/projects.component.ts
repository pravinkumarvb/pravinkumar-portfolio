import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="py-5" style="background-color: var(--brand-surface);">
      <div class="container py-lg-4">
        <div class="text-center mx-auto mb-5" style="max-width: 740px;">
          <span class="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold mb-2">
            <i class="fa-solid fa-diagram-project me-1"></i> Case Studies
          </span>
          <h2 class="fw-bold display-6 mb-2">{{ langService.content().projects.heading }}</h2>
          <p class="text-muted mb-0">{{ langService.content().projects.subheading }}</p>
        </div>

        <div class="row g-4">
          @for (project of langService.content().projects.items; track project.title) {
            <div class="col-lg-4 col-md-6">
              <div class="card h-100 rounded-4 bg-white overflow-hidden d-flex flex-column">
                <!-- Top Accent Bar -->
                <div style="height: 5px; background: linear-gradient(90deg, #2563eb, #06b6d4);"></div>

                <div class="card-body p-4 d-flex flex-column flex-grow-1">
                  <div class="mb-3">
                    <span class="badge bg-light text-primary border border-primary border-opacity-25 fw-semibold mb-2">
                      {{ project.category }}
                    </span>
                    <h3 class="h5 fw-bold text-dark mb-0">{{ project.title }}</h3>
                  </div>

                  <!-- Problem -->
                  <div class="mb-3">
                    <div class="small fw-bold text-uppercase text-danger mb-1" style="letter-spacing: 0.04em;">
                      <i class="fa-solid fa-circle-exclamation me-1"></i>
                      {{ langService.currentLang() === 'en' ? 'Business Challenge' : 'समस्या' }}
                    </div>
                    <p class="small text-secondary mb-0">{{ project.problem }}</p>
                  </div>

                  <!-- Architecture / Solution -->
                  <div class="mb-3">
                    <div class="small fw-bold text-uppercase text-primary mb-1" style="letter-spacing: 0.04em;">
                      <i class="fa-solid fa-gears me-1"></i>
                      {{ langService.currentLang() === 'en' ? 'Engineered Solution' : 'समाधान' }}
                    </div>
                    <p class="small text-secondary mb-0">{{ project.solution }}</p>
                  </div>

                  <!-- Outcome Box -->
                  <div class="p-3 rounded-3 bg-success bg-opacity-10 border border-success border-opacity-25 mb-4 mt-auto">
                    <div class="small fw-bold text-success mb-1">
                      <i class="fa-solid fa-chart-line me-1"></i>
                      {{ langService.currentLang() === 'en' ? 'Real Result' : 'परिणाम' }}
                    </div>
                    <p class="small text-dark fw-medium mb-0">{{ project.impact }}</p>
                  </div>

                  <!-- Tech Stack Pills -->
                  <div class="d-flex flex-wrap gap-1 pt-2 border-top">
                    @for (tech of project.stack; track tech) {
                      <span class="badge bg-dark bg-opacity-75 text-white fw-normal px-2 py-1">{{ tech }}</span>
                    }
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ProjectsComponent {
  readonly langService = inject(LanguageService);
}