import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Staff } from './pages/staff/staff';
import { DashboardTemplate } from './components/dashboard-template/dashboard-template';
import { Bookings } from './pages/bookings/bookings';
import { Customers } from './pages/customers/customers';
import { Branches } from './pages/branches/branches';
import { Reports } from './pages/reports/reports';
import { LoginPage } from './pages/login-page/login-page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: DashboardTemplate,
    children: [
      { path: 'staffs', component: Staff },
      { path: 'dashboard', component: Dashboard },
      { path: 'bookings', component: Bookings },
      { path: 'customers', component: Customers },
      { path: 'branches', component: Branches },
      { path: 'reports', component: Reports },
    ],
  },
  { path: 'login', component: LoginPage },
];
