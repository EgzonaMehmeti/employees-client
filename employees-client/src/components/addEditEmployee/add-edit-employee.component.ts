import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { Department } from "../../models/department.model";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'add-employee',
    templateUrl: './add-edit-employee.component.html',
    styleUrls: ['./add-edit-employee.component.scss'],
    imports: [MatDialogModule, MatFormField, MatLabel, MatInputModule, FormsModule, MatSelectModule, MatButtonModule,
              ReactiveFormsModule, MatDatepickerModule, MatNativeDateModule]
})
export class AddEditEmployeeComponent implements OnInit{
    public form!: FormGroup;
    public departmentsList: Department[] = [];
    constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddEditEmployeeComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any){
               }
    
    ngOnInit(): void {
        this.initForm();
        if(this.data.type == 'edit'){
            this.form.patchValue({
                ...this.data.employee,
                departmentId: this.data.employee.department?.id
            });
        }
        console.log('this.data',this.form);
        this.departmentsList = this.data.departmentsList;
    }
    initForm(){
        this.form = this.fb.group({
            name: [null, Validators.required],
            surname: [null, Validators.required],
            age: [null, Validators.required],
            departmentId: [null, Validators.required],
            role: [null, Validators.required],
            hireDate: [null, Validators.required],
            email: [null, Validators.email],
            phone: [null, Validators.required],
            salary: [null, Validators.required]
        });
    }
    save() {
    const result = {
        data: this.form.value,
        type: this.data.type
    }
    this.dialogRef.close(result);
  }
    
}