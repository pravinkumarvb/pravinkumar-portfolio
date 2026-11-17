import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { SOCIAL_LINKS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top shadow-sm" style="background-color: var(--brand-primary);">
      <div class="container py-1">
        <a class="navbar-brand fw-bold d-flex align-items-center gap-2" href="#">
          <span class="badge bg-primary px-2 py-1"><i class="fa-solid fa-code"></i></span>
          <span>{{ langService.content().nav.brand }}</span>
        </a>

        <div class="d-flex align-items-center gap-2 order-lg-3">
          <!-- Language Toggle Button (Always visible on mobile & desktop) -->
          <button
            type="button"
            (click)="langService.toggleLanguage()"
            class="btn btn-warning btn-sm fw-semibold px-3 rounded-pill shadow-sm">
            <i class="fa-solid fa-language me-1"></i>
            {{ langService.content().nav.toggleBtn }}
          </button>

          <button
            class="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse order-lg-2" id="mainNavbar">
          <ul class="navbar-nav ms-auto me-3 mb-2 mb-lg-0 align-items-lg-center gap-lg-2">
            <li class="nav-item">
              <a class="nav-link text-light" href="#why-me">{{ langService.content().nav.whyMe }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#services">{{ langService.content().nav.services }}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#projects">{{ langService.content().nav.projects }}</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link text-info fw-medium"
                [href]="socials.linkedin"
                target="_blank"
                rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin me-1"></i>{{ langService.content().nav.linkedinLabel }}
              </a>
            </li>
            <li class="nav-item ms-lg-2">
              <a class="btn btn-primary btn-sm px-3 fw-semibold" href="#contact">
                {{ langService.content().nav.contact }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  readonly langService = inject(LanguageService);
  readonly socials = SOCIAL_LINKS;
}