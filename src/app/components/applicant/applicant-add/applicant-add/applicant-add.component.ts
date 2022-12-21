import { ToastrService } from 'ngx-toastr';
import { ApplicantService } from './../../../../services/applicant/applicant.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applicant-add',
  templateUrl: './applicant-add.component.html',
  styleUrls: ['./applicant-add.component.css']
})
export class ApplicantAddComponent implements OnInit {
  
  addApplicantForm:FormGroup

  constructor(
    private applicantService:ApplicantService, 
    private formBuilder:FormBuilder, 
    private router:Router,
    private toastr:ToastrService
    ) { }

  ngOnInit(): void {
    this.createAddApplicantForm()
  }

  createAddApplicantForm(){
    this.addApplicantForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      nationalIdentity: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      about: ['', Validators.required],
      state: [1]
    })
  }
  
  addApplicant(){
    if(this.addApplicantForm.valid){
        let applicantModel = Object.assign({}, this.addApplicantForm.value)
        applicantModel.role = "ROLE_APPLİCANT"
        applicantModel.token = new Date().toLocaleString()
        this.addApplicantForm.reset()
        this.applicantService.addApplicant(applicantModel).subscribe((data) => {
          this.router.navigate(['admin-panel/applicant-list'])
          this.toastr.success('Adding Successful')
      })
    }
    else{
      this.toastr.error('Adding Failed')
    }
  }


}
