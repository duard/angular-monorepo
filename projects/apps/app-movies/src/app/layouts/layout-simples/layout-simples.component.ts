import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesContainerComponent } from '@movies/index';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BindScssVariableDirective } from '@shared/directives';
import { InputSearchComponent } from '@shared/ui';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { MoviesFacade } from '@states/movies';
import { APP_ROUTES } from '../../routes/app.routes';

@Component({
  selector: 'app-layout-simples',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
    BindScssVariableDirective,
    InputSearchComponent,
  ],
  templateUrl: './layout-simples.component.html',
  styleUrls: ['./layout-simples.component.scss'],
})
export class LayoutSimplesComponent {
  count = 0;

  faCoffee = faCoffee;
  currentRoutes = APP_ROUTES;
  hoverColorVar: string = '';

  activatedComponentReference: any;

  constructor(private router: Router, private readonly facade: MoviesFacade) {
    console.log('APP MOVIES');
  }

  onSearchMovie(value: any) {
    const childRouteComp = this
      .activatedComponentReference as MoviesContainerComponent;
    console.log('Pesquisou :', value);
    childRouteComp.loadMovies(1, value);
  }

  onBtnClick(event: any) {
    const childRouteComp = this
      .activatedComponentReference as MoviesContainerComponent;
    childRouteComp.parentCall();
  }

  onActivate(activatedComponentReference: any) {
    this.activatedComponentReference = activatedComponentReference;
  }
}
