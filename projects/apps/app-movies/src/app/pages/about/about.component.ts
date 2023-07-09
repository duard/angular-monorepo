import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlesComponent } from '@shared/ui';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TitlesComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {}
