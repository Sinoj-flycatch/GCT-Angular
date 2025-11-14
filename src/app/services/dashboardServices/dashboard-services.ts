import { inject, Injectable, signal } from '@angular/core';
import { ApiService } from '../apiServices/api-service';
import { response } from 'express';
import { error } from 'console';
import { BookingSummaryMessage, BookingSummaryParams, BookingSummaryResponses } from '../../shared/interfaces/dashboardInterface';

@Injectable({
  providedIn: 'root'
})
export class DashboardServices {
  apiService = inject(ApiService)
  //api Datas>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  dashboardSummaryData = signal<BookingSummaryMessage | null>(null)


  //api Loading>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  isDashboardSummaryLoading = signal<boolean>(false)


  //api functions>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  getDashboardSummary(params:BookingSummaryParams){
    this.isDashboardSummaryLoading.set(true)
    this.apiService.get<BookingSummaryResponses,BookingSummaryParams>("/bookings/dashboard-summary/",params).subscribe({
      next:(res)=>{
        this.dashboardSummaryData.set(res.message)
        this.isDashboardSummaryLoading.set(false)
      },
      error:(error:any)=>{
        console.log(error);
        this.isDashboardSummaryLoading.set(false)
      }
    })
  }

  //refetch functions>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  refetchashboardSummary(params:BookingSummaryParams){
    this.getDashboardSummary(params)
  }
}
