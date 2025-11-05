import { Component, inject } from '@angular/core';
import { TextInput } from '../../components/commonComponents/text-input/text-input';
import { ButtonModule } from 'primeng/button';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputValidatorService } from '../../services/input-validator-service';
@Component({
  selector: 'app-login-page',
  imports: [TextInput, ButtonModule, ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  validatorService = inject(InputValidatorService);
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
      console.log(this.loginForm.value);
      console.log(this.loginForm.get('password')?.hasError('required'));
      console.log(this.loginForm.touched);
      this.formSubmitted = true;
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
