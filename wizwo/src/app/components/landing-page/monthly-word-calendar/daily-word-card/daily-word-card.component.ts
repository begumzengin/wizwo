import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-daily-word-card',
  standalone: true,
    imports: [CommonModule, CardModule],
  templateUrl: './daily-word-card.component.html',
  styleUrl: './daily-word-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DailyWordCardComponent {

  @Input() word: any;
  @Input() index: any;

}
