import { HttpInterceptorFn } from '@angular/common/http';
import { ApiService } from '../../services/apiServices/api-service';
import { inject } from '@angular/core';
import { AuthServices } from '../../services/authServices/auth-services';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const {getToken}  = inject(AuthServices)
  const accessToken = getToken()
  if(accessToken){
    const newReq = req.clone({
    setHeaders:{
      Authorization:`Bearer ${accessToken}`
    }
  })
  return next(newReq);
  }
  return next(req)
};
  