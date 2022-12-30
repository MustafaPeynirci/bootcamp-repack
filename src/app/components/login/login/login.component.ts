import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { LoginService } from './../../../services/login/login.service';
import { AuthtokenService } from './../../../services/authtoken/authtoken.service';
import { Component, OnInit } from '@angular/core';
// import { login } from '../../../store/action'
// import { logout } from '../../../store/action'
// import { userAuth } from '../../../store/state'
// import {Token} from '../../../store/mutation'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup

  constructor(
    private authTokenService:AuthtokenService,
    private loginService:LoginService,
    private formBuilder:FormBuilder,
    private router:Router,
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value).subscribe((data)=>{       
        if(data.length > 0){
          this.toastr.success("Login Successful")
          if(data[0].role == "ROLE_EMPLOYEE"){
            this.router.navigate(["admin-panel"])
          }
          if(data[0].role == "ROLE_APPLICANT"){
            this.router.navigate(["applicant-panel"])
          }
          if(data[0].role == "ROLE_INSTRUCTOR"){
            this.router.navigate(["instructor-panel"])
          }
          localStorage.setItem("token", data[0].token)
          localStorage.setItem("id", data[0].id.toString())
          localStorage.setItem("role", data[0].role)
        }
        else{
          this.toastr.error("Make Sure You Enter Your Information Correctly!")
        }
      })
    }
    else{
      this.toastr.warning("Cannot be blank! Please fill in all fields.")
    }
  }







  // login(){

    //post('www.service.teknokoz.com/oauth/token'){
      //email
      //password
      //grant_type
      
    //}.then
    //get('wwww.service.teknokoz.com/api/auth-user'){
      //header bearar + ' '+ token

    //}.data -> email pass name -> { role : root } 


    // this.authTokenService.getToken().subscribe((data)=>{
    
      // login(data[1]);
      //console.log(Token)
      //console.log(userAuth['token'])
      //console.log(localStorage.getItem('token'));
     // console.log(localStorage.getItem('role'));
    // })



  // }


  // logout(){
  //   logout()
  //   console.log(localStorage.getItem('token'));
    
  // }



}
