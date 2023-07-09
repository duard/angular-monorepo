import { Routes } from '@angular/router';
import { MoviesContainerComponent } from './movies-container';
import { MoviesListComponent } from './movies-list';
import { MoviesShowComponent } from './movies-show';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { moviesReducer, MovieEffects } from '@states/movies';

export const MOVIES_ROUTES: Routes = [
  {
    path: '',
    component: MoviesContainerComponent,
    data: {
      show: true,
      showChildren: false,
      navLabel: 'movie-container',
      title: 'Project Movies App Movie-container Page',
      description: 'Movies container description',
      icon: 'house',
    },
    providers: [
      provideState('movies-search', moviesReducer),
      provideEffects(MovieEffects),
    ],
    children: [
      {
        path: '',
        component: MoviesListComponent,
        data: {
          show: true,
          showChildren: false,
          navLabel: 'movie-list',
          title: 'Project Movies App Movie-list Page',
          description: 'Movies list description',
          icon: 'house',
        },
      },
      {
        path: ':id',
        component: MoviesShowComponent,
        data: {
          show: true,
          showChildren: false,
          navLabel: 'movie-show',
          title: 'Project Movies App Movie-show Page',
          description: 'Movies show description',
          icon: 'house',
        },
      },
      { path: '', redirectTo: 'index', pathMatch: 'full' },
    ],
  },
];
