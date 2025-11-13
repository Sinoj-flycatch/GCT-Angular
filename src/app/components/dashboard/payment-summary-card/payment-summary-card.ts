import { Component, input } from '@angular/core';

@Component({
  selector: 'app-payment-summary-card',
  imports: [],
  templateUrl: './payment-summary-card.html',
  styleUrl: './payment-summary-card.css'
})
export class PaymentSummaryCard {
  heading = input.required<string>();
  iconBg = input.required<string>();
  count = input.required<number>();
  countBg = input.required<string>();
  indecatorBg = input.required<string>();
  bg = input.required<string>();
}
