import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServices } from '../../services/authServices/auth-services';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServices)
  const router = inject(Router)
  if (authService.isLoaggedIn()) {
    return true
  }
  return router.parseUrl("/login")
};
