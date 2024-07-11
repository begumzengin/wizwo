import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notebook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notebook.component.html',
  styleUrl: './notebook.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotebookComponent {}
