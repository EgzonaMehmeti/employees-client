import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from '../components/employeeListComponent/employee-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EmployeesClientRoutingModule } from '../routing/employees-client-routing.routing';
import { AddEditEmployeeComponent } from '../components/employeeListComponent/addEditEmployee/add-edit-employee.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,EmployeeListComponent, AddEditEmployeeComponent
  ],
  exports: [
    EmployeeListComponent,
    AddEditEmployeeComponent,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    EmployeesClientRoutingModule
  ]
})
export class EmployeesClientModule {}
