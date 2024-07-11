import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-word-of-the-day',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-of-the-day.component.html',
  styleUrl: './word-of-the-day.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordOfTheDayComponent {}
