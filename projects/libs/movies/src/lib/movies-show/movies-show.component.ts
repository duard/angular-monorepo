import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { MoviesFacade } from '@states/movies';

@Component({
  selector: 'lib-movies-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies-show.component.html',
  styleUrls: ['./movies-show.component.scss'],
})
export class MoviesShowComponent {
  titleService = inject(Title);
  readonly selectedMovie$ = this.facade.selectedMovie$;
  constructor(private facade: MoviesFacade) {}
}
