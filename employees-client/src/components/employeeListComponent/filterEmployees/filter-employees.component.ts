import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { Department } from "../../../models/department.model";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'filter-employees',
    templateUrl: './filter-employees.component.html',
    styleUrls: ['./filter-employees.component.scss'],
    imports: [MatDialogModule, MatFormField, MatLabel, MatInputModule, FormsModule, MatSelectModule, MatButtonModule,
              ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule]
})
export class FilterEmployeesComponent implements OnInit{
    public form!: FormGroup;
    public departmentsList: Department[] = [];
    constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<FilterEmployeesComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any){
               }
    
    ngOnInit(): void {
        this.initForm();
        this.departmentsList = this.data.departmentsList;
    }
    initForm(){
        this.form = this.fb.group({
            name: [null],
            surname: [null],
            departmentId: [null],
            role: [null],
            hireDateFrom: [null],
            hireDateTo: [null]
        });
    }
    save() {
    const result = this.form.value;
    this.dialogRef.close(result);
  }
    
}