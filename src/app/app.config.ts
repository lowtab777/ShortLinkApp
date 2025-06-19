import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { materialProviders } from '../materials';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from './services/token-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    materialProviders,
    provideHttpClient(withInterceptors([TokenInterceptor])),
  ],
};
