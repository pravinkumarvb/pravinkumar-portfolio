import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { SOCIAL_LINKS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  readonly langService = inject(LanguageService);
  readonly socials = SOCIAL_LINKS;
}