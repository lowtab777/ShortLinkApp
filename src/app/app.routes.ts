import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';

export const routes: Routes = [
  {
    path: 'url-dashboard',
    loadComponent: () =>
      import('./components/url-dashboard/url-dashboard.component').then(
        (d) => d.UrlDashboardComponent
      ),
  },
  { path: '**', component: LoginPageComponent},
];
