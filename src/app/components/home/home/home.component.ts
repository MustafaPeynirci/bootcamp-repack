import { Observable } from 'rxjs';
import { Stores } from './../../../store/store';
import { UserLogin } from './../../../models/users/user.model';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  today: Date = new Date()
  date:any = this.today.getDate() + "-" + this.today.getMonth() + "-" + this.today.getFullYear()

  currentUserId = 0

  role:string=localStorage.getItem("role")
  id=localStorage.getItem("id")
  loginer$:Observable<UserLogin[]>
  a$:UserLogin
  constructor(
    private applicantService:ApplicantService,
    private store:Store<[Stores["user"]]>
    
  ) { 
   this.store.select("values").subscribe((a)=>{
  console.log(a);
    
   })
  }

  ngOnInit(): void {
    // this.getUser()
  }

  // getUser(){
  //   this.currentUserId = JSON.parse(localStorage.getItem('id'))
  //   this.applicantService.getApplicantById(this.currentUserId).subscribe((data)=>{
      
  //   })
  // }

}
