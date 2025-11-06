import { Component, inject } from '@angular/core';
import { TextInput } from '../../components/commonComponents/text-input/text-input';
import { ButtonModule } from 'primeng/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputValidatorService } from '../../services/input-validator-service';
import { ApiService } from '../../services/apiServices/api-service';
import { LoginService } from '../../services/loginServices/login-service';

@Component({
  selector: 'app-login-page',
  imports: [TextInput, ButtonModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  validatorService = inject(InputValidatorService);
  loginService = inject(LoginService)
  apiServices = inject(ApiService)
  loginForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required, Validators.maxLength(10)],
    }),
    password: new FormControl('', { validators: [Validators.required, Validators.minLength(3)] }),
  });
  formSubmitted = false;
  onSubmit(): void {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      this.loginService.loginApi(this.loginForm.value.username as string,this.loginForm.value.password as string)
      this.formSubmitted = false;
    }
  }
  validateInput(controlName: string):string {
    return this.validatorService.getValidationMessage({
      controlName,
      messagesConfig: {
        username: {
          required: 'Username is required',
          email:"please enter valid email"
        },
        password: {
          required: 'Password is required',
          minlength: 'Password must be at least 6 characters long',
        },
      },
    },this.loginForm.get(controlName),this.formSubmitted);
  }
  
}
