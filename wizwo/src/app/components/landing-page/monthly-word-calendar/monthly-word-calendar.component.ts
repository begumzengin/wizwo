import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monthly-word-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monthly-word-calendar.component.html',
  styleUrl: './monthly-word-calendar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthlyWordCalendarComponent {}
