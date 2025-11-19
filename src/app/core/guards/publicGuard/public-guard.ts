import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServices } from '../../services/authServices/auth-services';

export const publicGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServices)
  const router = inject(Router)
  if (!authService.getToken()) {
    return true
  }
  return router.parseUrl("/dashboard")
};
