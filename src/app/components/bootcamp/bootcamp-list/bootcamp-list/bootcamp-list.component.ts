import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ApplicantService } from './../../../../services/applicant/applicant.service';
import { ApplicationService } from './../../../../services/application/application.service';
import { InstructorService } from './../../../../services/instructor/instructor.service';
import { AuthGuard } from './../../../../guards/auth.guard';
import { BootcampService } from './../../../../services/bootcamp/bootcamp.service';
import { IBootcampAllModel } from './../../../../models/bootcamp/BootcampAllModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootcamp-list',
  templateUrl: './bootcamp-list.component.html',
  styleUrls: ['./bootcamp-list.component.css']
})
export class BootcampListComponent implements OnInit {

  allBootcampsList:IBootcampAllModel[] = []
  bootcampListByInstructorId:IBootcampAllModel[] = []
  bootcampModel:IBootcampAllModel
  selectedBootcamp:IBootcampAllModel

  constructor(
    private bootcampService:BootcampService,
    private instructorService:InstructorService,
    private applicationService:ApplicationService,
    private applicantService:ApplicantService,
    private router:Router,
    private toastr:ToastrService,
    public authGuard:AuthGuard
    ) { }

  ngOnInit(): void {
    this.getBootcamps()
    this.getBootcampByInstructorId()
  }

  getBootcamps(){
    this.bootcampService.getAllBootcamps().subscribe((data)=>{
      this.allBootcampsList = data
    })
  }

  getInstructorById(id:number){
    this.instructorService.getInstructoryById(id).subscribe((data)=>{   
    })
  }

  getBootcamp(data:any){
    this.bootcampModel = data
    this.addApplication()
  }

  getBootcampByInstructorId(){
    this.bootcampService.getBootcampsByInstructorId(parseInt(localStorage.getItem("id"))).subscribe((data)=>{
      this.bootcampListByInstructorId = data
    })
  }

  addApplication(){
    let applicationData = Object.assign({})
    applicationData.bootcampId = this.bootcampModel.id
    applicationData.bootcampName = this.bootcampModel.name
    this.applicantService.getApplicantById(parseInt(localStorage.getItem("id"))).subscribe((data)=>{
      applicationData.applicantName = data.firstName + " " + data.lastName
      applicationData.applicationId = localStorage.getItem("id")
      // applicationData.applicationState = ApplicationStates.PENDING
    this.applicationService.addApplication(applicationData).subscribe((data)=>{
      this.toastr.success("Application")
    })  
    })
  }

  changeSelected(model){
    if(model.state == 1){
      this.selectedBootcamp = model
    }
    else{
      this.toastr.warning("Application is not active")
    }
  }

  detail(bootcamp:any){
    this.router.navigate(["instructor-panel/detail"])
  }

}
