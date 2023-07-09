import { Component, Input } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { CommonModule } from '@angular/common';
import { MoviesFacade } from '@states/movies';
import { Observable } from 'rxjs';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-movies-list',
  standalone: true,
  imports: [CommonModule, LetDirective, NgbPagination],
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent {
  @Input() pageNum: number = 1;
  @Input() searchValue: string = '';

  isLoading$ = this.moviesFacade.isLoading$;
  error$ = this.moviesFacade.error$;

  selectedMovie$ = this.moviesFacade.selectedMovie$;

  movieItems$ = this.moviesFacade.movieItems$;

  pageSize$ = this.moviesFacade.pageSize$;
  page$ = this.moviesFacade.page$;
  rows$ = this.moviesFacade.rows$;
  constructor(
    private router: Router,
    private readonly moviesFacade: MoviesFacade
  ) {
    console.log('List Movies');
  }

  onPageChange(pageNum: number | undefined) {
    if (pageNum) {
      this.router.navigate(['/movies'], {
        queryParams: { pageNum: this.pageNum, searchValue: this.searchValue },
      });

      if (this.searchValue && this.searchValue !== '') {
        // this.moviesFacade.searchMovie(pageNum, this.searchValue);
      }
    }
  }
}
