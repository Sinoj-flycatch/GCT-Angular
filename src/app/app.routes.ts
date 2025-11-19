import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Staff } from './pages/staff/staff';
import { DashboardTemplate } from './shared/components/dashboard-template/dashboard-template';
import { Bookings } from './pages/bookings/bookings';
import { Customers } from './pages/customers/customers';
import { Branches } from './pages/branches/branches';
import { Reports } from './pages/reports/reports';
import { LoginPage } from './pages/login-page/login-page';
import { authGuard } from './core/guards/authGuard/auth-guard';
import { roleGuard } from './core/guards/roleGuard/role-guard';
import { allowedUsers } from './shared/constants/authConstants';
import { publicGuard } from './core/guards/publicGuard/public-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: DashboardTemplate,
    children: [
      {
        path: 'staffs',
        component: Staff,
        canActivate: [authGuard, roleGuard],
        data: {
          allowedState: [allowedUsers.superAdmin],
        },
      },
      {
        path: 'dashboard',
        component: Dashboard,
        canActivate: [authGuard, roleGuard],
        data: {
          allowedState: [allowedUsers.staff, allowedUsers.superAdmin],
        },
      },
      {
        path: 'bookings',
        component: Bookings,
        canActivate: [authGuard, roleGuard],
        data: {
          allowedState: [allowedUsers.staff],
        },
      },
      {
        path: 'customers',
        component: Customers,
        canActivate: [authGuard, roleGuard],
        data: {
          allowedState: [allowedUsers.staff],
        },
      },
      {
        path: 'branches',
        component: Branches,
        canActivate: [authGuard, roleGuard],
        data: {
          allowedState: [allowedUsers.superAdmin],
        },
      },
      {
        path: 'reports',
        component: Reports,
        canActivate: [authGuard, roleGuard],
        data: {
          allowedState: [allowedUsers.staff, allowedUsers.superAdmin],
        },
      },
    ],
  },
  { path: 'login', component: LoginPage ,canActivate:[publicGuard]},
];
