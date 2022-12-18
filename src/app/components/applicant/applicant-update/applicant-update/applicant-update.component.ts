import { IApplicantUpdateRequestModel } from './../../../../models/applicant/ApplicantUpdateRequestModel';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplicantService } from './../../../../services/applicant/applicant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-update',
  templateUrl: './applicant-update.component.html',
  styleUrls: ['./applicant-update.component.css']
})
export class ApplicantUpdateComponent implements OnInit {

  applicantUpdateForm:FormGroup
  getApplicant:IApplicantUpdateRequestModel

  constructor(
    private applicantService:ApplicantService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getApplicantById()
  }

  getApplicantById(){
    this.applicantService.getApplicantById(this.activatedRoute.snapshot.params['id']).subscribe((data)=>{
      this.getApplicant = data
      this.createUpdateApplicantForm()
    })
  }

  createUpdateApplicantForm(){
    this.applicantUpdateForm = this.formBuilder.group({
      firstName: [this.getApplicant.firstName, Validators.required],
      lastName: [this.getApplicant.lastName, Validators.required],
      email: [this.getApplicant.email, Validators.required],
      password: [this.getApplicant.password, Validators.required],
      nationalIdentity: [this.getApplicant.nationalIdentity, Validators.required],
      dateOfBirth: [this.getApplicant.dateOfBirth, Validators.required],
      about: [this.getApplicant.about, Validators.required],
      state: [1],
      token: [this.getApplicant.token],
      role: [this.getApplicant.role],
      expiration: [this.getApplicant.expiration]
    })
  }

  updateApplicant(){
    if(this.applicantUpdateForm.valid){
      let getApplicant = Object.assign({}, this.applicantUpdateForm.value)
      this.applicantService.updateApplicant(this.getApplicant.id, getApplicant).subscribe((data)=>{
        this.router.navigate(['admin-panel/applicant-list'])
      })
    }
    else{

    }
  }

  deleteApplicant(){
    this.applicantService.deleteApplicant(this.getApplicant.id).subscribe((data)=>{
      this.router.navigate(['admin-panel/applicant-list'])
    })
  }

}
