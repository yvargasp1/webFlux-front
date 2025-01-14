import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';

export const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
  },
  {
    path :'',
    component: LoginComponent
  }
];
