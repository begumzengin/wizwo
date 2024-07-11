import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DividerModule } from 'primeng/divider';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LandingPageComponent,
    SidebarComponent,
    DividerModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wizwo';
}
