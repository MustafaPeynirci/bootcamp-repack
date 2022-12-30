import { IEmployeeAllModel } from './../../models/employee/EmployeeAllModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userApiUrl = "http://localhost:3000/users"
  isLogin = false

  constructor(private httpClient:HttpClient) { }

  login(user:any){
    return this.httpClient.get<IEmployeeAllModel[]>(
      this.userApiUrl + "?email=" + user.email + "&password=" + user.password
    )
  }

  isLoggedIn(){
    const loggedIn = localStorage.getItem("token")
    if(loggedIn){
      this.isLogin = true
    }
    else{
      this.isLogin = false
    }
    return this.isLogin
  }

}
