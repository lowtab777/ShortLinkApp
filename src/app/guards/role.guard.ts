import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const roleGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const expectedRole = route.data['role'] as string;
  const userRole = auth.getUserRole();

  if (!userRole) {
    router.navigate(['/login']);
    return false;
  }

  if (
    expectedRole === 'User' &&
    (userRole === 'User' || userRole === 'Admin')
  ) {
    return true;
  }

  if (expectedRole === 'Admin' && userRole === 'Admin') {
    return true;
  }

  router.navigate(['/unauthorized']);
  return false;
};
