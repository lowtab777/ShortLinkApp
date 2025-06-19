import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';

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
    loadComponent: () =>
      import('./components/url-creation-form/url-creation-form.component').then(
        (d) => d.UrlCreationFormComponent
      ),
  },
  {
    path: 'urls/:id',
    loadComponent: () =>
      import('./components/url-info/url-info.component').then(
        (d) => d.UrlInfoComponent
      ),
  },
  { path: '**', component: LoginPageComponent},
];
