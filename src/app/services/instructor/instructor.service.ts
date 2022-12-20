import { IInstructorDeleteRequestModel } from './../../models/instructor/InstructorDeleteRequestModel';
import { IInstructorUpdateRequestModel } from './../../models/instructor/InstructorUpdateRequestModel';
import { IInstructorAddRequestModel } from './../../models/instructor/InstructorAddRequestModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IInstructorAllModel } from './../../models/instructor/InstructorAllModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  allInstructors:IInstructorAllModel[] = []
  apiUrl = 'http://localhost:3000/users'

  constructor(private httpClient:HttpClient) { }

  getAllInstructors():Observable<IInstructorAllModel[]>{
    return this.httpClient.get<IInstructorAllModel[]>(
      this.apiUrl
    )
  }

  getInstructoryById(id:number):Observable<IInstructorAllModel>{
    return this.httpClient.get<IInstructorAllModel>(
      this.apiUrl + "/" + id
    )
  }

  addInstructor(data:IInstructorAddRequestModel):Observable<IInstructorAddRequestModel>{
    return this.httpClient.post<IInstructorAddRequestModel>(
      this.apiUrl, data
    )
  }

  updateInstructor(id:number, data:IInstructorUpdateRequestModel):Observable<IInstructorUpdateRequestModel>{
    return this.httpClient.put<IInstructorUpdateRequestModel>(
      this.apiUrl + "/" + id, data
    )
  }

  deleteInstructor(id:number):Observable<IInstructorDeleteRequestModel>{
    return this.httpClient.delete<IInstructorDeleteRequestModel>(
      this.apiUrl + "/" + id
    )
  }

}
