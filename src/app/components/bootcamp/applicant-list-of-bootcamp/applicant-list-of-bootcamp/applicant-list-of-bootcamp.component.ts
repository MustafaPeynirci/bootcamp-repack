import { IApplicationAllModel } from 'src/app/models/application/ApplicationAllModel';
import { AuthGuard } from './../../../../guards/auth.guard';
import { ActivatedRoute } from '@angular/router';
import { ApplicantService } from './../../../../services/applicant/applicant.service';
import { ApplicationService } from './../../../../services/application/application.service';
import { IApplicantAllModel } from './../../../../models/applicant/ApplicantAllModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-list-of-bootcamp',
  templateUrl: './applicant-list-of-bootcamp.component.html',
  styleUrls: ['./applicant-list-of-bootcamp.component.css']
})
export class ApplicantListOfBootcampComponent implements OnInit {

  applicationAllModel:IApplicationAllModel[] = []
  applicantAllModel:IApplicantAllModel[] = []
  bootcampId

  constructor(
    private applicationService:ApplicationService,
    private applicantService:ApplicantService,
    private activatedRoute:ActivatedRoute,
    public authGuard:AuthGuard
  ) { }

  ngOnInit(): void {
    this.getApplicationListByBootcampId()
  }

  getApplicationListByBootcampId(){
    this.activatedRoute.params.subscribe((param)=>{
      this.bootcampId = param["id"]
      this.applicationService.getApplicationListByBootcampId(this.bootcampId).subscribe((data)=>{
        this.applicationAllModel = data
        this.getApplicantListByBootcamp(this.applicationAllModel)
      })
    })
  }

  getApplicantListByBootcamp(applicationAllModel:IApplicationAllModel[]){
    for(let application of applicationAllModel){
      this.applicantService.getApplicantById(application.applicantId).subscribe((userx)=>{
        this.applicantAllModel.push(userx)
      })
    }
  }

}
