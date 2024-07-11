import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@Component({
  standalone: true,
  imports: [RouterModule, LandingPageComponent, SidebarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wizwo';
}
