import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/url-dashboard/url-dashboard.component').then(
        (d) => d.UrlDashboardComponent
      ),
  },
  {
    path: 'create-url',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/url-creation-form/url-creation-form.component').then(
        (d) => d.UrlCreationFormComponent
      ),
  },
  {
    path: 'urls/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./components/url-info/url-info.component').then(
        (d) => d.UrlInfoComponent
      ),
  },
  { path: '**', component: LoginPageComponent},
];
