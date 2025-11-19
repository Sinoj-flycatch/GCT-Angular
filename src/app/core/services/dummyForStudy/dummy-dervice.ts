import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyDervice {
  add(number1:number,number2:number){
    return number1 + number2
  }
}
