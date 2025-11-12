import { Component, inject } from '@angular/core';
import { DashboardTemplate } from '../../components/dashboard-template/dashboard-template';
import { ApiService } from '../../services/apiServices/api-service';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule } from '@angular/forms';
import { DashboardHeadings } from '../../components/dashboard/dashboard-headings/dashboard-headings';
import { BookingSummaryCard } from '../../components/dashboard/booking-summary-card/booking-summary-card';
@Component({
  selector: 'app-dashboard',
  imports: [FormsModule,NzDatePickerModule,DashboardHeadings,BookingSummaryCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  apiServices  = inject(ApiService)
  today:Date = new Date()
  date:Date[] = [this.today,this.today]
   onChange(result: Date[]): void {
    console.log('onChange: ', result);
  }
  ngOnInit(){
    this.apiServices.get("/vehicle-make/").subscribe({
    next: (res:any) => console.log("API Response:", res),
    error: (err:any) => console.log("API Error:", err)
  });
  }
}
