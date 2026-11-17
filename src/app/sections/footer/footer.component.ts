import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { SOCIAL_LINKS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="py-5 text-white" style="background-color: var(--brand-primary);">
      <div class="container">
        <div class="row gy-4 align-items-center justify-content-between pb-4 border-bottom border-secondary border-opacity-25">
          <div class="col-md-7">
            <h3 class="h5 fw-bold mb-1">{{ langService.content().nav.brand }}</h3>
            <p class="small text-light opacity-75 mb-0">{{ langService.content().footer.tagline }}</p>
          </div>

          <div class="col-md-5 d-flex flex-wrap gap-2 justify-content-md-end">
            <a
              [href]="socials.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-info btn-sm px-3 fw-semibold">
              <i class="fa-brands fa-linkedin me-2"></i>{{ langService.content().footer.linkedinText }}
            </a>

            <a
              [href]="socials.github"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-light btn-sm px-3 fw-semibold">
              <i class="fa-brands fa-github me-2"></i>GitHub
            </a>
          </div>
        </div>

        <div class="pt-4 d-flex flex-column flex-sm-row justify-content-between align-items-center small text-light opacity-75 gap-2">
          <div>{{ langService.content().footer.rights }}</div>
          <div>Built with Angular 18 & Bootstrap 5</div>
        </div>
      </div>
    </footer>

    <!-- Floating Quick-WhatsApp Button for Mobile & Desktop Visitors -->
    <a
      [href]="'https://wa.me/' + socials.whatsappNumber"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      class="btn btn-success rounded-circle shadow-lg d-flex align-items-center justify-content-center position-fixed"
      style="width: 56px; height: 56px; bottom: 22px; right: 22px; z-index: 1040;">
      <i class="fa-brands fa-whatsapp fs-3"></i>
    </a>
  `
})
export class FooterComponent {
  readonly langService = inject(LanguageService);
  readonly socials = SOCIAL_LINKS;
}