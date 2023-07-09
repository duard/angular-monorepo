import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import {
  provideRouter,
  withInMemoryScrolling,
  withRouterConfig,
  withComponentInputBinding,
  withPreloading,
  PreloadAllModules,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { APP_ROUTES } from './routes/app.routes';
import { provideState, provideStore } from '@ngrx/store';
import {
  provideHttpClient,
  withXsrfConfiguration,
  withJsonpSupport,
} from '@angular/common/http';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  StoreRouterConnectingModule,
  provideRouterStore,
} from '@ngrx/router-store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    provideStore(),
    provideHttpClient(
      withXsrfConfiguration({}),
      withJsonpSupport()
      // withInterceptors([AuthHeaderInterceptorFn, serverErrorInterceptorFn]),
    ),
    provideRouter(
      APP_ROUTES,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
      withRouterConfig({ onSameUrlNavigation: 'reload' }),
      withComponentInputBinding(),
      withPreloading(PreloadAllModules),
      withEnabledBlockingInitialNavigation()
    ),
    importProvidersFrom(
      BrowserAnimationsModule,
      FontAwesomeModule
      // EffectsModule.forRoot([MovieEffects])
    ),
    // importProvidersFrom(HotToastModule.forRoot()),
    // importProvidersFrom(AngularSvgIconModule.forRoot()),
    // provideState('someFeatureName', moviesReducer),
    // StoreModule.forRoot({ router: routerReducer, auth: AuthReducer }),
    // provideState('movie-search', moviesReducer),
    // provideEffects(MovieEffects),
    // provideState(counterState),
    // provideState('movie-search', moviesReducer),
    // provideEffects(MovieEffects),
    provideStore({}),
    // provideState('movies-search', moviesReducer),
    // provideEffects(MovieEffects),

    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 25,
    }),

    // provideRouterStore(),
    importProvidersFrom(StoreRouterConnectingModule.forRoot()),
  ],
};
