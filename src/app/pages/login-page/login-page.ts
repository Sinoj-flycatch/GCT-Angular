import { Component, inject, signal } from '@angular/core';
import { TextInput } from '../../shared/components/commonComponents/text-input/text-input';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputValidatorService } from '../../core/services/input-validator-service';
import { ApiService } from '../../core/services/apiServices/api-service';
import { LoginService } from '../../core/services/loginServices/login-service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-login-page',
  imports: [TextInput, ReactiveFormsModule,NzButtonModule,NzIconModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  validatorService = inject(InputValidatorService);
  loginService = inject(LoginService)
  apiServices = inject(ApiService)
  isLoginLoading = signal(false)
  name:string = "sinoj"
  loginForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(100),Validators.minLength(4)],
    }),
    password: new FormControl('', { validators: [Validators.required, Validators.minLength(4),Validators.maxLength(100)] }),
  });
  formSubmitted = false;
  onSubmit(): void {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      this.loginService.loginApi(this.loginForm.value.username as string,this.loginForm.value.password as string,this.isLoginLoading)
      this.formSubmitted = false;
    }
  }
  validateInput(controlName: string):string {
    return this.validatorService.getValidationMessage({
      controlName,
      messagesConfig: {
        username: {
          required: 'Username is required',
          minlength: 'username must be at least 4 characters long',
          email:"please enter valid email"
        },
        password: {
          required: 'Password is required',
          minlength: 'Password must be at least 4 characters long',
        },
      },
    },this.loginForm.get(controlName),this.formSubmitted);
  }
  
}
