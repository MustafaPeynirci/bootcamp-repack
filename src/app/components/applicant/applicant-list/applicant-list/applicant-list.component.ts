import { AuthGuard } from './../../../../guards/auth.guard';
import { IApplicantAllModel } from './../../../../models/applicant/ApplicantAllModel';
import { ApplicantService } from './../../../../services/applicant/applicant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {

  allApplicantsList:IApplicantAllModel[] = []

  constructor(
    private applicantService:ApplicantService,
    public authGuard:AuthGuard
    ) { }

  ngOnInit(): void {
    this.getAllApplicants()
  }

  getAllApplicants(){
    this.applicantService.getAllApplicants().subscribe((data) =>{
      this.allApplicantsList = data
    })
  }

}
