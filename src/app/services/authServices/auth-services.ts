import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  getToken():string | null{
    return localStorage.getItem("accessToken")
  }

  setToken(token:string){
    localStorage.setItem("accessToken",token)
  }
}
