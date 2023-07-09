import { Route } from '@angular/router';
import { NotFoundComponent } from '../pages';
import { PAGE_ROUTES } from '../pages/pages.routes';

import { LayoutSimplesComponent } from '../layouts/layout-simples/layout-simples.component';

export const APP_ROUTES: Route[] = [
  ...PAGE_ROUTES,
  // ...MOVIES_ROUTES,
  {
    path: 'movies',
    component: LayoutSimplesComponent,

    loadChildren: () =>
      import('@movies/movies.routes').then((m) => m.MOVIES_ROUTES),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];
