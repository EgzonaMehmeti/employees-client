import { Routes } from '@angular/router';
import { EmployeeListComponent } from '../../employees-client/src/components/employeeListComponent/employee-list.component';

import { AuthGuard } from '../../employees-client/src/guards/auth.guard';
import { LoginComponent } from '../../employees-client/src/components/loginComponent/login.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent,
    canActivate: [AuthGuard]
  }
];
