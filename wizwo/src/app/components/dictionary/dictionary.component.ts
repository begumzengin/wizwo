import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DictionaryComponent {}
