import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PagedResult } from "../models/pagedResult,model";
import { CreateEditEmployee, Employee } from "../models/employee.model";
import { Department } from "../models/department.model";

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {
    private apiUrl = 'https://localhost:44377/v1/employee';

    constructor(private http: HttpClient){}

    public getEmployees(search?: string, department?: string, page: number = 1, pageSize: number = 10) : Observable<PagedResult<Employee>>{
        let params = new HttpParams()
        .set('page', page)
        .set('pageSize',pageSize);

        if(search) params = params.set('search',search);
        if(department) params = params.set('department', department);
        return this.http.get<PagedResult<Employee>>(this.apiUrl, {params});
    }

    public getEmployeeById(id: number){
        return this.http.get<Employee>(`${this.apiUrl}/${id}`)
    }

    public createEmployee(body: CreateEditEmployee){
        return this.http.post<Employee>(this.apiUrl, body);
    }

    public updateEmployee(id: number, body: Employee){
        return this.http.put(`${this.apiUrl}/${id}`, body);
    }

    public deleteEmployee(id: number){
        return this.http.delete(`${this.apiUrl}/${id}`);
    }

    public getDepartments(){
        return this.http.get<PagedResult<Department>>(`${this.apiUrl}/department`)
    }
}