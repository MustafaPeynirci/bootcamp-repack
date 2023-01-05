import { IBootcampDeleteRequestModel } from './../../models/bootcamp/BootcampDeleteRequestModel';
import { IBootcampUpdateRequestModel } from './../../models/bootcamp/BootcampUpdateRequestModel';
import { IBootcampAddRequestModel } from './../../models/bootcamp/BootcampAddRequestModel';
import { IBootcampAllModel } from './../../models/bootcamp/BootcampAllModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BootcampService {

  apiUrl = 'http://localhost:3000/bootcamps';

  constructor(private httpClient:HttpClient) { }

  getAllBootcamps():Observable<IBootcampAllModel[]>{
    return this.httpClient.get<IBootcampAllModel[]>(
      this.apiUrl
    )
  }

  getBootcampById(id:number):Observable<IBootcampAllModel>{
    return this.httpClient.get<IBootcampAllModel>(
      this.apiUrl + "/" + id
    )
  }

  getBootcampsByInstructorId(id:number):Observable<IBootcampAllModel[]>{
    return this.httpClient.get<IBootcampAllModel[]>(
      this.apiUrl + "?instructorId=" + id
    )
  }

  addBootcamp(data:IBootcampAddRequestModel):Observable<IBootcampAddRequestModel>{
    return this.httpClient.post<IBootcampAddRequestModel>(
      this.apiUrl, data
    )
  }

  updateBootcamp(id:number, data:IBootcampUpdateRequestModel):Observable<IBootcampUpdateRequestModel>{
    return this.httpClient.put<IBootcampUpdateRequestModel>(
      this.apiUrl + "/" + id, data
    )
  }

  deleteBootcamp(id:number):Observable<IBootcampDeleteRequestModel>{
    return this.httpClient.delete<IBootcampDeleteRequestModel>(
      this.apiUrl + "/" + id
    )
  }

}
