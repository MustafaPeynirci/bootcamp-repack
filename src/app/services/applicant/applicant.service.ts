import { IApplicantAddRequestModel } from './../../models/applicant/ApplicantAddRequestModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {

  apiUrl = "http://localhost:3000/users"
  constructor(private httpClient:HttpClient) { }

  addApplicant(data:IApplicantAddRequestModel):Observable<IApplicantAddRequestModel>{
    return this.httpClient.post<IApplicantAddRequestModel>(this.apiUrl, data)
  }


}
