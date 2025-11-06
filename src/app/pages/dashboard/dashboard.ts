import { Component, inject } from '@angular/core';
import { DashboardTemplate } from '../../components/dashboard-template/dashboard-template';
import { ApiService } from '../../services/apiServices/api-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  apiServices  = inject(ApiService)
  ngOnInit(){
    this.apiServices.get("/vehicle-make/").subscribe({
    next: (res:any) => console.log("API Response:", res),
    error: (err:any) => console.log("API Error:", err)
  });
  }
}
