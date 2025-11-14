import { Component, input } from '@angular/core';

@Component({
  selector: 'app-booking-summary-card',
  imports: [],
  templateUrl: './booking-summary-card.html',
  styleUrl: './booking-summary-card.css'
})
export class BookingSummaryCard {
bg = input.required<string>()
heading = input.required<string>()
icon = input.required<string>()
iconBg = input.required<string>()
count = input<number>(0)
countBG = input.required<string>()

}
