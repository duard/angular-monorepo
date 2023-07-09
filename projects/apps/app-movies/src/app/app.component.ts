import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { APP_ROUTES } from './routes/app.routes';
import { BindScssVariableDirective } from '@shared/directives';
import { FormsModule } from '@angular/forms';
import { InputSearchComponent } from '@shared/ui';
import { MoviesFacade } from '@states/movies';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '@apps/app-movies';
}
