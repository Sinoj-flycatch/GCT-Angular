import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
  getToken():string | null{
    return localStorage.getItem("accessToken")
  }
  getRole():string | null{
    return localStorage.getItem("role")
  }

  setToken(token:string){
    localStorage.setItem("accessToken",token)
  }
  isLoaggedIn():boolean{
    if(this.getToken()){
      return true
    } 
    return false
  }
}
