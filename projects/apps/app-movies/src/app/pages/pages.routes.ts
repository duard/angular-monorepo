import { Routes } from '@angular/router';
import { AboutComponent, HomeComponent } from '.';

export const PAGE_ROUTES: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: {
      show: true,
      showChildren: false,
      navLabel: 'About',
      title: 'Project Movies App About Page',
      description: 'Movies about description',
      icon: 'house',
    },
  },

  {
    path: 'home',
    component: HomeComponent,
    data: {
      show: true,
      showChildren: false,
      navLabel: 'Home',
      title: 'Project Movies App Home Page',
      description: 'Movies Home description',
      icon: 'house',
    },
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
