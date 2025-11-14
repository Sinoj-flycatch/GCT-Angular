import { CanActivateFn, Router } from '@angular/router';
import { allowedUsers } from '../../../shared/constants/authConstants';
import { AuthServices } from '../../services/authServices/auth-services';
import { inject } from '@angular/core';
interface RoleData{
  allowedState:string[]
}
export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthServices)
  const router = inject(Router)
  const userRole = authService.getRole() as string || null;
  const data = route.data as RoleData
  if(userRole&&data.allowedState.includes(userRole)){
    return true
  }
  return router.parseUrl("/dashboard")
};
