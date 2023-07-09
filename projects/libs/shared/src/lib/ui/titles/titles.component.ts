import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'titles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss'],
})
export class TitlesComponent {
  @Input() title!: string;
  @Input() subtitle? = false;
}
