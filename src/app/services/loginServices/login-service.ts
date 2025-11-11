import { inject, Injectable } from '@angular/core';
import { ApiService } from '../apiServices/api-service';
import { AuthServices } from '../authServices/auth-services';
import { Router } from '@angular/router';
export interface LoginResponse {
    status:     string;
    message:    string;
    results:    LoginResults;
    statusCode: number;
}
export interface LoginResults {
    refresh:   string;
    access:    string;
    user_id:   number;
    role:      string;
    full_name: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiServices = inject(ApiService)
  authServices = inject(AuthServices)
  router = inject(Router)
  loginApi(username:string,password:string){
    const data:{
      username:string;
      password:string;
    } = {username,password}
    this.apiServices.post<LoginResponse,any>("/login/",data).subscribe({
      next:(res)=>{
        
        this.authServices.setToken(res?.results?.access)
        localStorage.setItem("role",res?.results?.role)
        localStorage.setItem("name",res?.results?.full_name)
        this.router.navigate(["/dashboard"])
        this.showSuccess()
      },
      error:(err)=>console.log(err)
    })
  }

  showSuccess() {
        alert("success")
    }
}
