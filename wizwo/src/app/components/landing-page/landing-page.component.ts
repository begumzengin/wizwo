import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { Divider, DividerModule } from 'primeng/divider';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, SidebarComponent, DividerModule, RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {}
