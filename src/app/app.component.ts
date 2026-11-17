import { Component } from '@angular/core';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { WhyMeComponent } from './sections/why-me/why-me.component';
import { ServicesComponent } from './sections/services/services.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ContactComponent } from './sections/contact/contact.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,
    HeroComponent,
    WhyMeComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pravinkumar-portfolio';
}
