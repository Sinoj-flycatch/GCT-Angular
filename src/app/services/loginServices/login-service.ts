import { inject, Injectable, WritableSignal } from '@angular/core';
import { ApiService } from '../apiServices/api-service';
import { AuthServices } from '../authServices/auth-services';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
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
   snackBar  = inject(MatSnackBar)
  router = inject(Router)
  loginApi(username:string,password:string,loading:WritableSignal<boolean>){
    const data:{
      username:string;
      password:string;
    } = {username,password}
    console.log(loading);
    loading.set(true)
    console.log(loading);
    
    this.apiServices.post<LoginResponse,any>("/login/",data).subscribe({
      next:(res)=>{
        this.authServices.setToken(res?.results?.access)
        localStorage.setItem("role",res?.results?.role)
        localStorage.setItem("name",res?.results?.full_name)
        this.router.navigate(["/dashboard"])
        this.showSuccess()
        loading.set(false)
        console.log(loading);
      },
      error:(err)=>{
        loading.set(false)
        console.log(err,loading)
      }
    })
  }

  showSuccess() {
    this.snackBar.open("login Success","close",{
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',  
    })
    }
}
