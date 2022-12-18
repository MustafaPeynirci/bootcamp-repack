import { IApplicantUpdateRequestModel } from './../../models/applicant/ApplicantUpdateRequestModel';
import { IApplicantAllModel } from './../../models/applicant/ApplicantAllModel';
import { IApplicantAddRequestModel } from './../../models/applicant/ApplicantAddRequestModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApplicantDeleteRequestModel } from 'src/app/models/applicant/ApplicantDeleteRequestModel';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  apiUrl = "http://localhost:3000/users"
  constructor(private httpClient:HttpClient) { }

  getAllApplicants():Observable<IApplicantAllModel[]>{
    return this.httpClient.get<IApplicantAllModel[]>(
      this.apiUrl
    )
  }

  getApplicantById(id:number):Observable<IApplicantAllModel>{
    return this.httpClient.get<IApplicantAllModel>(
      this.apiUrl + "/" + id
    )
  }

  addApplicant(data:IApplicantAddRequestModel):Observable<IApplicantAddRequestModel>{
    return this.httpClient.post<IApplicantAddRequestModel>(this.apiUrl, data)
  }

  updateApplicant(id:number, data:IApplicantUpdateRequestModel):Observable<IApplicantUpdateRequestModel>{
    return this.httpClient.put<IApplicantUpdateRequestModel>(this.apiUrl + "/" + id, data)
  }

  deleteApplicant(id:number):Observable<IApplicantDeleteRequestModel>{
    return this.httpClient.delete<IApplicantDeleteRequestModel>(
      this.apiUrl + "/" + id
    )
  }

}
