import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MoviesFacade } from '@states/movies';
import { BasicPaginationComponent } from '@shared/ui';

@Component({
  selector: 'lib-movies-container',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BasicPaginationComponent],
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss'],
})
export class MoviesContainerComponent {
  @Input() pageNum: number = 1;
  @Input() searchValue: string = '';

  public maxSize: number = 7;

  directionLinks = true;
  autoHide = false;
  responsive = true;

  collection: number[] = [];

  selectedMovie$ = this.moviesFacade.selectedMovie$;

  movieItems$ = this.moviesFacade.movieItems$;
  isLoading$ = this.moviesFacade.isLoading$;
  error$ = this.moviesFacade.error$;

  pageSize$ = this.moviesFacade.pageSize$;
  page$ = this.moviesFacade.page$;
  rows$ = this.moviesFacade.rows$;

  constructor(
    private readonly moviesFacade: MoviesFacade,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.pageNum && this.searchValue) {
      console.log(`INIT Container Movies`, this.pageNum, this.searchValue);
      this.loadMovies(this.pageNum, this.searchValue);
    }
  }

  loadMovies(page: number, search: string) {
    this.moviesFacade.searchMovie(page, search);
    this.changeURL();
  }

  onPageChange(value: any) {
    console.log('pageChange', typeof value, value);
    this.pageNum = value;
    // this.searchValue = value;
    // this.changeURL();
    this.loadMovies(this.pageNum, this.searchValue);
  }

  onSearchMovie(value: any) {
    console.log('Pesquisando', value);
  }

  changeURL() {
    if (this.pageNum && this.searchValue) {
      this.router.navigateByUrl(
        `/movies?pageNum=${this.pageNum}&searchValue=${this.searchValue}`
      );
    } else {
      // console.log(
      //   'changeURL Container Movies loadMovies',
      //   `/movies?pageNum=${this.pageNum}&searchValue=${this.searchValue}`
      // );
    }
  }

  parentCall() {
    console.log('Mey parent call me');
  }
}
