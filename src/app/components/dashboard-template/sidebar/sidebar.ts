import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  menuItems = [
  {
    item: "Dashboard",
    icon: "/icons/dashboard-black.svg",
    iconActive:"/icons/dashboard-white.svg",
    path:["/dashboard","/profile-info"],
    allowedUsers:["staff",]
  },
  {
    item: "Branches",
    icon: "/icons/branches-black.svg",
    iconActive:"/icons/branches-white.svg",
    path:["/branches"]
  },
  {
    item: "Staffs",
    icon: "/icons/staff-black.svg",
    iconActive:"/icons/staff-white.svg",
    path:["/staffs"]
  },
  {
    item: "Customers",
    icon: "/icons/customers-black.svg",
    iconActive:"/icons/customers-white.svg",
    path:["/customers"]
  },
  {
    item: "Bookings",
    icon: "/icons/bookings-black.svg",
    iconActive:"/icons/bookings-white.svg",
    path:["/bookings"]
  },
  {
    item: "Reports",
    icon: "/icons/reports-black.svg",
    iconActive:"/icons/reports-white.svg",
    path:["/reports"]
  },
];
  constructor(private router:Router){

  }
  isActive(menuItem: any): boolean {
    return menuItem.path.includes(this.router.url);
  }
  navigate(path:string):void{
    console.log(path);
    
    this.router.navigate([path])
  }
}
