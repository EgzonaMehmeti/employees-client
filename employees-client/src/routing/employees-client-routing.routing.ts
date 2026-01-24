// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { EmployeeListComponent } from '../components/employeeListComponent/employee-list.component';
// import { AuthGuard } from '../guards/auth.guard';


// const routes: Routes = [
//   { path: '', redirectTo: 'employees', pathMatch: 'full' },
//   { path: 'employees', component: EmployeeListComponent },
//   {
//   path: 'employees',
//   canActivate: [AuthGuard],
//   loadChildren: () =>
//     import('../modules/employees-client.module')
//       .then(m => m.EmployeesClientModule)
// }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class EmployeesClientRoutingModule {}
