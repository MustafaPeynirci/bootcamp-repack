import { IAuthTokenModel } from './../../models/authtoken/AuthTokenModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthtokenService {

  apiUrl = "http://localhost:3000/authToken"

  constructor(private httpClient:HttpClient) { }

  getToken():Observable<IAuthTokenModel>{
    return this.httpClient.get<IAuthTokenModel>(
      this.apiUrl
    )
  }

}
