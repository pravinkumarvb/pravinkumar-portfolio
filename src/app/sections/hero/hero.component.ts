import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { SOCIAL_LINKS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: 'hero.component.html'
})
export class HeroComponent {
  readonly langService = inject(LanguageService);
  readonly socials = SOCIAL_LINKS;
}