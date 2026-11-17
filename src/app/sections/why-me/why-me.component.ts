import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-why-me',
  standalone: true,
  templateUrl: './why-me.component.html'
})
export class WhyMeComponent {
  readonly langService = inject(LanguageService);
}