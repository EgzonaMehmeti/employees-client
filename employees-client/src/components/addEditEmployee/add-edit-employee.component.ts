import { Component, Inject, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { Department } from "../../models/department.model";

@Component({
    selector: 'add-employee',
    templateUrl: './add-edit-employee.component.html',
    styleUrls: ['./add-edit-employee.component.scss'],
    imports: [MatDialogModule, MatFormField, MatLabel, MatInputModule, FormsModule, MatSelectModule]
})
export class AddEditEmployeeComponent implements OnInit{
    public form: any;
    public departmentsList: Department[] = [];
    constructor(public dialogRef: MatDialogRef<AddEditEmployeeComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any){
               }
    
    ngOnInit(): void {
        if(this.data.type == 'edit'){
            this.form = {
                ...this.data.employee,
                departmentId: this.data.employee.department?.id
            };
        }else{
            this.form = {};
        }
        console.log('this.data',this.form);
        this.departmentsList = this.data.departmentsList;
    }
    save() {
    const result = {
        data: this.form,
        type: this.data.type
    }
    this.dialogRef.close(result);
  }
    
}