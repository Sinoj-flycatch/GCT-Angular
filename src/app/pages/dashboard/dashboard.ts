import { Component, inject } from '@angular/core';
import { DashboardTemplate } from '../../components/dashboard-template/dashboard-template';
import { ApiService } from '../../services/apiServices/api-service';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { FormsModule } from '@angular/forms';
import { DashboardHeadings } from '../../components/dashboard/dashboard-headings/dashboard-headings';
import { BookingSummaryCard } from '../../components/dashboard/booking-summary-card/booking-summary-card';
import { PaymentSummaryCard } from '../../components/dashboard/payment-summary-card/payment-summary-card';
@Component({
  selector: 'app-dashboard',
  imports: [FormsModule,NzDatePickerModule,DashboardHeadings,BookingSummaryCard,PaymentSummaryCard],
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
  dashBoardPaymentCardItems = [
    {
      heading: "Received",
      subHeading: "From Payment Summary",
      bg: "linear-gradient(138.32deg, #6359E9 3.31%, #FCFCFC 86.34%)",
      Amount: 140,
      countBg:
        "linear-gradient(180deg, rgba(99, 89, 233, 0.2) 0%, #6359E9 100%)",
      icon: "/icons/rupee.svg",
      iconBg: "#6359E9",
      indicatorBg:
        "linear-gradient(360deg, #6359E9 0%, rgba(99, 89, 233, 0.2) 100%)",
      secondaryIcon: "/icons/wallet.svg",
    },
    {
      heading: "Pending",
      subHeading: "From Payment Summary",
      bg: "linear-gradient(138.32deg, #327E8C 3.31%, #FCFCFC 86.34%)",
      Amount: 1456,
      countBg:
        "linear-gradient(180deg, rgba(50, 126, 140, 0.2) 0%, #327E8C 100%)",
      icon: "/icons/rupee.svg",
      iconBg: "#327E8C",
      indicatorBg:
        "linear-gradient(360deg, #327E8C 0%, rgba(50, 126, 140, 0.2) 100%)",
      secondaryIcon: "/icons/wallet.svg",
    },
    {
      heading: "Refunded",
      subHeading: "From Payment Summary",
      bg: "linear-gradient(138.32deg, #CE8E0F 3.31%, #FCFCFC 86.34%)",
      Amount: 850,
      countBg:
        "linear-gradient(180deg, rgba(206, 142, 15, 0.2) 0%, #CE8E0F 100%)",
      icon: "/icons/rupee.svg",
      iconBg: "#CE8E0F",
      indicatorBg:
        "linear-gradient(360deg, #CE8E0F 0%, rgba(206, 142, 15, 0.2) 100%)",
      secondaryIcon: "/icons/wallet.svg",
    },
  ];
  dashboardCardItems = [
    {
      heading: "Completed",
      subHeading: "From Booking Summary",
      bg: "linear-gradient(138.32deg, #8ABB8F 3.31%, #F0F7FF 86.34%)",
      count:400,
      countBg: "linear-gradient(92.43deg, #FFFFFF -26.05%, #6FA875 71.77%)",
      icon: "/icons/calender-white.svg",
      iconBg: "#6FA875",
    },
    {
      heading: "Pending",
      subHeading: "From Booking Summary",
      bg: "linear-gradient(138.32deg, #FF8F6B 3.31%, #F0F7FF 86.34%)",
      count: 300,
      countBg: "linear-gradient(92.43deg, #FFFFFF -26.05%, #FF8F6B 71.77%)",
      icon: "/icons/calender-white.svg",
      iconBg: "#FF8F6B",
    },
    {
      heading: "Cancelled",
      subHeading: "From Booking Summary",
      bg: "linear-gradient(138.32deg, #F01F35 3.31%, #F0F7FF 86.34%)",
      count:500,
      countBg: "linear-gradient(92.43deg, #FFFFFF -26.05%, #F01F35 71.77%)",
      icon: "/icons/calender-white.svg",
      iconBg: "#F01F35",
    },
  ];
  ngOnInit(){
    this.apiServices.get("/vehicle-make/").subscribe({
    next: (res:any) => console.log("API Response:", res),
    error: (err:any) => console.log("API Error:", err)
  });
  }
}
