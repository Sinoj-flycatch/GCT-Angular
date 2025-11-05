import { Component, forwardRef, input, model } from '@angular/core';
import {ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms'
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-text-input',
  imports: [InputTextModule],
  templateUrl: './text-input.html',
  styleUrl: './text-input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextInput,
      multi: true
    }
  ]
})
export class TextInput implements ControlValueAccessor {
  placeholder = input<string>("")
  label = input<string>("label")
  id = input<string>("")
  width = input<string>("")
  height = input<string>("")
  error = input<string>("")
  name = input<string>("")
  type = input<string>("text")
   // Internal value
  internalValue: any = '';

  // Disabled state
  disabled = false;
    onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};
   writeValue(value: any): void {
    this.internalValue = value;
  }

  // Register change event
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Register touch event
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Set disabled state
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // When the input value changes
  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.internalValue = value;
    this.onChange(value);
  }

  // When the input is blurred
  onBlur(): void {
    this.onTouched();
  }
}
