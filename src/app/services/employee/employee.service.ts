import { IEmloyeeDeleteRequestModel } from './../../models/employee/EmployeeDeleteRequestModel';
import { IEmployeeUpdateRequestModel } from './../../models/employee/EmployeeUpdateRequestModel';
import { IEmployeeAddRequestModel } from './../../models/employee/EmployeeAddRequestModel';
import { IEmployeeAllModel } from './../../models/employee/EmployeeAllModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = "http://localhost:3000/users"

  constructor(private httpClient:HttpClient) { }

  getAllEmployees():Observable<IEmployeeAllModel[]>{
    return this.httpClient.get<IEmployeeAllModel[]>(
      this.apiUrl + "?role=ROLE_EMPLOYEE"
    )
  }

  getEmployeeById(id:number):Observable<IEmployeeAllModel>{
    return this.httpClient.get<IEmployeeAllModel>(
      this.apiUrl + "/" + id
    )
  }

  addEmployee(data:IEmployeeAddRequestModel):Observable<IEmployeeAddRequestModel>{
    return this.httpClient.post<IEmployeeAddRequestModel>(
      this.apiUrl, data
    )
  }

  updateEmployee(id:number, data:IEmployeeUpdateRequestModel):Observable<IEmployeeUpdateRequestModel>{
    return this.httpClient.put<IEmployeeUpdateRequestModel>(
      this.apiUrl + "/" + id, data
    )
  }

  deleteEmployee(id:number):Observable<IEmloyeeDeleteRequestModel>{
    return this.httpClient.delete<IEmloyeeDeleteRequestModel>(
      this.apiUrl + "/" + id
    )
  }


}
