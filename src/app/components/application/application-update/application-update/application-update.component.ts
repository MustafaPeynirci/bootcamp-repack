import { ApplicationStates } from './../../../../enums/applicationState';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from './../../../../services/application/application.service';
import { IApplicationAllModel } from 'src/app/models/application/ApplicationAllModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IApplicationUpdateRequestModel } from './../../../../models/application/ApplicationUpdateModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-update',
  templateUrl: './application-update.component.html',
  styleUrls: ['./application-update.component.css']
})
export class ApplicationUpdateComponent implements OnInit {

  getApplication:IApplicationUpdateRequestModel
  applications:IApplicationAllModel
  applicationUpdateForm:FormGroup

  constructor(
    private applicationService:ApplicationService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private toastr:ToastrService
  ) { }

  public getApplicationState():typeof ApplicationStates{
    return ApplicationStates
  }

  ngOnInit(): void {
    this.getApplicationById()
  }

  getApplicationById(){
    this.applicationService.getApplicationById(this.activatedRoute.snapshot.params["id"]).subscribe((data)=>{
      this.getApplication = data
      this.createUpdateApplicaitonForm()
    })
  }

  createUpdateApplicaitonForm(){
    this.applicationUpdateForm = this.formBuilder.group({
      applicantName: [this.getApplication.applicantName, Validators.required],
      bootcampName: [this.getApplication.bootcampName, Validators.required],
      applicationState: [this.getApplication.applicationState, Validators.required],
    })
  }

  updateApplication(){
    if(this.applicationUpdateForm.valid){
      let applicationModel = Object.assign({}, this.applicationUpdateForm.value)
      this.applicationService.updateApplication(this.getApplication.id, applicationModel).subscribe((data)=>{
        this.router.navigate(["admin-panel/application-list"])
        this.toastr.success("Update Successful")
      })
    }
    else{
      this.toastr.error("Form not valid!")
    }
  }

  deleteApplication(){
    this.applicationService.deleteAppication(this.getApplication.id).subscribe((data)=>{
      this.router.navigate(["admin-panel/application-list"])
      this.toastr.success("Deleted Application")
    })
  }

}
