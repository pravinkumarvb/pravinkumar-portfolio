import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { SOCIAL_LINKS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
  readonly langService = inject(LanguageService);
  readonly socials = SOCIAL_LINKS;
}