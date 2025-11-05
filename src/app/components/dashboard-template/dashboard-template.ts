import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard-template',
  imports: [Sidebar,RouterModule],
  templateUrl: './dashboard-template.html',
  styleUrl: './dashboard-template.css'
})
export class DashboardTemplate {
  
}
