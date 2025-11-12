import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-headings',
  imports: [],
  templateUrl: './dashboard-headings.html',
  styleUrl: './dashboard-headings.css'
})
export class DashboardHeadings {
bg = input.required<string>()
iconBg = input.required<string>()
textColor = input.required<string>()
icon = input.required<string>()
heading = input.required<string>()  
}
