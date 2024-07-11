import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from 'src/app/shared/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { WordOfTheDayComponent } from './word-of-the-day/word-of-the-day.component';
import { ExerciseCardComponent } from './exercise-card/exercise-card.component';
import { MonthlyWordCalendarComponent } from './monthly-word-calendar/monthly-word-calendar.component';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    RouterModule,
    WordOfTheDayComponent,
    ExerciseCardComponent,
    MonthlyWordCalendarComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {
  today!: Date;

  ngOnInit() {
    this.today = new Date();
  }
}
