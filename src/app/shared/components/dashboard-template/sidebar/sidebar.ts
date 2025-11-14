import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menuItems } from '../../../constants/authConstants';
@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  menuItems = menuItems;
  constructor(private router:Router){

  }
  userRole:"super_admin" | 'staff' = localStorage.getItem("role") as "super_admin" | 'staff'
  isActive(menuItem: any): boolean {
    return menuItem.path.includes(this.router.url);
  }
  navigate(path:string):void{
    this.router.navigate([path])
  }
  handleLogout(){
    localStorage.clear()
    this.navigate("/login")
  }
}
