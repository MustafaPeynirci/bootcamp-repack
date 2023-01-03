import { IEmployeeAllModel } from './../../../models/employee/EmployeeAllModel';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  user:IEmployeeAllModel
  currentUserId = 0
  userInfo:string

  constructor(
    private applicantService:ApplicantService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  logOut(){
    localStorage.clear()
    this.router.navigate([""])
    this.getUser()
  }

  getUser(){
    this.currentUserId = JSON.parse(localStorage.getItem("id"))
    this.applicantService.getApplicantById(this.currentUserId).subscribe((data)=>{
      this.userInfo = `${data.firstName}`
    })
  }

}
