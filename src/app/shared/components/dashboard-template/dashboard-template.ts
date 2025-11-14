import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { RouterModule } from '@angular/router';
import { Header } from './header/header';

@Component({
  selector: 'app-dashboard-template',
  imports: [Sidebar,RouterModule,Header],
  templateUrl: './dashboard-template.html',
  styleUrl: './dashboard-template.css'
})
export class DashboardTemplate {
  
}
