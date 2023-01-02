import { IApplicationAddRequestModel } from './../../models/application/ApplicationAddRequestModel';
import { IApplicationUpdateRequestModel } from './../../models/application/ApplicationUpdateModel';
import { IApplicationDeleteRequestModel } from './../../models/application/ApplicationDeleteModel';
import { IApplicationAllModel } from './../../models/application/ApplicationAllModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  apiUrl = "http://localhost:3000/applications"

  constructor(private httpClient:HttpClient) { }

  getAllApplication():Observable<IApplicationAllModel[]>{
    return this.httpClient.get<IApplicationAllModel[]>(
      this.apiUrl
    )
  }

  getApplicantById(id:any):Observable<IApplicationAllModel>{
    return this.httpClient.get<IApplicationAllModel>(
      this.apiUrl + "?applicantId=" + id
    )
  }

  getApplicationByApplicantId(id:any):Observable<IApplicationAllModel[]>{
    return this.httpClient.get<IApplicationAllModel[]>(
      this.apiUrl + "?aplicantId=" + id
    )
  }

  getApplicationById(id:any):Observable<IApplicationAllModel>{
    return this.httpClient.get<IApplicationAllModel>(
      this.apiUrl + "/" + id
    )
  }

  addApplication(data:IApplicationAddRequestModel){
    return this.httpClient.post<IApplicationAddRequestModel[]>(
      this.apiUrl, data
    )
  }

  updateApplication(id:number, data:IApplicationUpdateRequestModel){
    return this.httpClient.put<IApplicationUpdateRequestModel>(
      this.apiUrl + "/" + id, data
    )
  }

  deleteAppication(id:number):Observable<IApplicationDeleteRequestModel>{
    return this.httpClient.delete<IApplicationDeleteRequestModel>(
      this.apiUrl + "/" + id
    )
  }

  getApplicationListByBootcampId(bootcampId):Observable<IApplicationAllModel[]>{
    return this.httpClient.get<IApplicationAllModel[]>(
      this.apiUrl + "?bootcampId" + bootcampId + "&applicationState=SELECTED"
    )
  }

}
