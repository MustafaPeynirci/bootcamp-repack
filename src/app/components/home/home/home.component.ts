import { ApplicationService } from './../../../services/application/application.service';
import { DashboardService } from './../../../services/dashboard/dashboard.service';
import { AuthGuard } from './../../../guards/auth.guard';
import { Observable } from 'rxjs';
import { Stores } from './../../../store/store';
import { UserLogin } from './../../../models/users/user.model';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IApplicationAllModel } from 'src/app/models/application/ApplicationAllModel';
import { IInstructorAllModel } from 'src/app/models/instructor/InstructorAllModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allApplicationList: IApplicationAllModel[] = []
  allInstructorList: IInstructorAllModel[] = []
  applicationByIdList: IApplicationAllModel[] = []
  totalApplicants = 0
  totalEmployees = 0
  totalInstructors = 0
  totalBootcamps = 0
  currentUserId = 0
  userInfo: string
  today: Date = new Date()
  // mounth = this.today.getMonth()+1
  locale = "en-us"
  mounthName = this.today.toLocaleString(this.locale, { month: 'long' })
  date:any = this.today.getDate() + " " + this.mounthName + " " + this.today.getFullYear()
  
  // role:string=localStorage.getItem("role")
  // id=localStorage.getItem("id")
  // loginer$:Observable<UserLogin[]>
  // a$:UserLogin

  constructor(
    // private store:Store<[Stores["user"]]>
    private dashboardService:DashboardService,
    private applicantService:ApplicantService,
    private applicationService:ApplicationService,
    public authGuard:AuthGuard
  ) { 
    //  this.store.subscribe((data)=>{
    //    this.loginer$[0]=data;
    //  })
    //  this.store.select("user").subscribe((data)=>{
    //    this.loginer$[0]=data;
    //  })
  }

  ngOnInit(): void {
    this.getAllApplicants();
    this.getTotalEmployees();
    this.getTotalInstructors();
    this.getTotalBootcamps();
    this.getUser();
    this.getAllApplication();
    this.getApplicationByApplicantId(localStorage.getItem('id'));
  }

  getAllApplicants(){
    this.dashboardService.getTotalApplicants().subscribe((data:any)=>{
      this.totalApplicants = data.length
    })
  }

  getTotalEmployees(){
    this.dashboardService.getTotalEmployees().subscribe((data:any)=>{
      this.totalEmployees = data.length
    })
  }

  getTotalInstructors(){
    this.dashboardService.getTotalInstructors().subscribe((data:any)=>{
      this.totalInstructors = data.length
    })
  }

  getTotalBootcamps(){
    this.dashboardService.getTotalBootcamps().subscribe((data:any)=>{
      this.totalBootcamps = data.length
    })
  }

  getAllApplication(){
    this.applicationService.getAllApplication().subscribe((data)=>{
      this.allApplicationList = data
    })
  }

  getApplicationByApplicantId(id:any){
    this.applicationService.getApplicationByApplicantId(id).subscribe((data)=>{
      this.applicationByIdList = data
    })
  }

  getUser(){
    this.currentUserId = JSON.parse(localStorage.getItem("id"))
    this.applicantService.getApplicantById(this.currentUserId).subscribe((data)=>{
      this.userInfo = `${data.firstName} ${data.lastName}`
    })
  }

}
