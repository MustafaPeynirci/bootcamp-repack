import { IApplicantAllModel } from './../../../../models/applicant/ApplicantAllModel';
import { AuthGuard } from './../../../../guards/auth.guard';
import { ApplicationService } from './../../../../services/application/application.service';
import { ApplicantService } from './../../../../services/applicant/applicant.service';
import { IApplicationAllModel } from 'src/app/models/application/ApplicationAllModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css']
})
export class ApplicationListComponent implements OnInit {

  allApplicationList:IApplicationAllModel[] = []
  applicationByIdList:IApplicationAllModel[] = []
  applicant:IApplicantAllModel

  constructor(
    private applicaitonService:ApplicationService,
    private applicantService:ApplicantService,
    public authGuard:AuthGuard
  ) { }

  ngOnInit(): void {
    this.getAllApplication()
    this.getApplicationByApplicantId(localStorage.getItem("id"))
  }

  getAllApplication(){
    this.applicaitonService.getAllApplication().subscribe((data)=>{
      this.allApplicationList = data
    })
  }

  getApplicantById(id:number){
    this.applicantService.getApplicantById(id).subscribe((data)=>{
      this.applicant = data
    })
  }

  getApplicationByApplicantId(id:any){
    this.applicaitonService.getApplicationByApplicantId(id).subscribe((data)=>{
      this.applicationByIdList = data
    })
  }

}
