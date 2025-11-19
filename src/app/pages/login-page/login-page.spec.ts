import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPage } from './login-page';
import { provideHttpClient } from '@angular/common/http';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPage],
      providers: [
        provideHttpClient()   // ⬅ BEST FIX FOR TESTS
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should enter valid values for loginform', () => {
    component.loginForm.setValue({
      username:"ugjh",
      password:"jsjhdfhh"
    })
    component.onSubmit()
    expect(component.loginForm.valid).toBeTrue()
  });
  it('should valition messages for username is correct',()=>{
    component.loginForm.setValue({
      username:"",
      password:"jsjhdfhh"
    })
    component.onSubmit()
    const errr = component.validateInput("username")
    expect(errr).toEqual('Username is required')
  })
  it('should present atleat 3 chars',()=>{
    component.loginForm.setValue({
      username:"jjj",
      password:"jsjhdfhh"
    })
    component.onSubmit()
    const errr = component.validateInput("username")
    expect(errr).toEqual('username must be at least 4 characters long')
  })
  it('should valition messages for password is correct',()=>{
    component.loginForm.setValue({
      username:"",
      password:""
    })
    component.onSubmit()
    const errr = component.validateInput("password")
    expect(errr).toEqual('Password is required')
  })
  it('password should present atleat 3 chars',()=>{
    component.loginForm.setValue({
      username:"jjjdd",
      password:"js"
    })
    component.onSubmit()
    const errr = component.validateInput("password")
    expect(errr).toEqual('Password must be at least 4 characters long')
  })
});
