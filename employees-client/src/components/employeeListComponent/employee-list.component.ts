import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { CreateEditEmployee, Employee } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddEditEmployeeComponent } from './addEditEmployee/add-edit-employee.component';
import { Department } from '../../models/department.model';
import { FilterEmployeesComponent } from './filterEmployees/filter-employees.component';
import { EmployeeSearch } from '../../models/employeeSearch.model';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  standalone: true,
  styleUrls: ['./employee-list.component.scss'],
  imports: [MatFormFieldModule, MatTableModule, MatPaginatorModule, MatInputModule, MatSortModule, MatButtonModule,
            MatIconModule, MatDialogModule, DatePipe, CommonModule
  ]
})
export class EmployeeListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'displayName', 'department', 'role', 'hireDate', 'actions'];
  dataSource: MatTableDataSource<Employee> = new MatTableDataSource<Employee>();
  departmentsList: Department[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private employeeService: EmployeesService,
              private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadEmployees();
    this.loadDepartments();
  }

  loadEmployees(search?: EmployeeSearch, page: number = 1, pageSize: number = 10) {
    this.employeeService.getEmployees(search, page, pageSize).subscribe(res => {
      this.dataSource.data = res.items; // assuming paged result has `items` array
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  loadDepartments() {
    this.employeeService.getDepartments().subscribe(res => {
      this.departmentsList = res.items; // assuming paged result has `items` array
    });
  }
  filterEmployees(){
    var title = 'Filter Employees';
    var dataForDialog =  {
      title,
      departmentsList: this.departmentsList
    }
    const dialogRef = this.dialog.open(FilterEmployeesComponent, {
      data: dataForDialog
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res){
        this.employeeService.getEmployees(res).subscribe(res => {
        this.dataSource.data = res.items;
        });

        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
          }
      }
    })
  }

  public onSortChange() {
    this.loadEmployees(
      undefined,
      this.paginator.pageIndex + 1,
      this.paginator.pageSize
    );
  }

  onPageChange() {
    this.loadEmployees(
      undefined,
      this.paginator.pageIndex + 1,
      this.paginator.pageSize
    );
  }

  public addEditEmployee(type: string, employee?: CreateEditEmployee, employeeId?: any){
    var title = (type == 'edit') ? 'Edit Employee' : 'Add Employee';
    var message = 'Fill the necessary data';
    var dataForDialog = (type == 'edit') ? {
      employee,
      title,
      message,
      type,
      departmentsList: this.departmentsList
    } : {
      title,
      message,
      type,
      departmentsList: this.departmentsList
    }
    const dialogRef = this.dialog.open(AddEditEmployeeComponent, {
      data: dataForDialog
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res){
        if(type == 'edit'){
          this.employeeService.updateEmployee(employeeId, res.data).subscribe(res1=>{
            this.loadEmployees();
          });
        }else if(type == 'add'){
          this.employeeService.createEmployee(res.data).subscribe(res1=>{
            this.loadEmployees();
          });
        }
      }
    })
  }
  public deleteEmployee(employee: Employee){
    this.employeeService.deleteEmployee(employee.id).subscribe(res1=>{
          this.loadEmployees();
        });
  }
}
