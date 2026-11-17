import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: 'projects.component.html'
})
export class ProjectsComponent {
  readonly langService = inject(LanguageService);
}