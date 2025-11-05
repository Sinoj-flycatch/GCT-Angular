import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InputValidatorService {
  getValidationMessage({ controlName, messagesConfig }: { controlName: string; messagesConfig?: Record<string,Record<string,string>> }, control: AbstractControl | null, formSubmitted: boolean = false): string {
    if (!control) return '';

    // Show only after user touched or form submitted
    if (!(control.invalid && (control.touched || formSubmitted))) return '';

    const label = this.formatFieldName(controlName);
    const errors = control.errors || {};
    const messages = messagesConfig?.[controlName] || {}

    // Required
    if (errors['required']) {
      return messages?.["required"] || `${label} is required`;
    }

    // Min length
    if (errors['minlength']) {
      const required = errors['minlength'].requiredLength;
      return messages?.["minlength"] || `${label} must be at least ${required} characters`;
    }

    // Max length
    if (errors['maxlength']) {
      const max = errors['maxlength'].requiredLength;
      return messages?.["maxlength"] || `${label} must be at most ${max} characters`;
    }

    // Email
    if (errors['email']) {
      return messages?.["email"] || `Please enter a valid ${label.toLowerCase()}`;
    }

    // Pattern (regex)
    if (errors['pattern']) {
      return messages?.["pattern"] || `Invalid ${label.toLowerCase()} format`;
    }

    // Min (number)
    if (errors['min']) {
      return messages?.["min"] || `${label} must be greater than or equal to ${errors['min'].min}`;
    }

    // Max (number)
    if (errors['max']) {
      return messages?.["max"] || `${label} must be less than or equal to ${errors['max'].max}`;
    }

    // Custom validator returning { key: { message: '...' } }
    const customErrorKey = Object.keys(errors)[0];
    const customError = errors[customErrorKey];

    if (customError && typeof customError === 'object' && customError.message) {
      return customError.message;
    }

    // Fallback
    return `${label} is invalid`;
  }

  private formatFieldName(controlName: string): string {
    return controlName.charAt(0).toUpperCase() + controlName.slice(1);
  }
}
