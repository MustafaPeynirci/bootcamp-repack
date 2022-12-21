import { IInstructorAllModel } from './../../../../models/instructor/InstructorAllModel';
import { Router, ActivatedRoute } from '@angular/router';
import { InstructorService } from './../../../../services/instructor/instructor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-instructor-update',
  templateUrl: './instructor-update.component.html',
  styleUrls: ['./instructor-update.component.css']
})
export class InstructorUpdateComponent implements OnInit {

  instructorUpdateForm:FormGroup
  instructor:IInstructorAllModel

  constructor(
    private instructorService:InstructorService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.getInstructorById()
  }

  getInstructorById(){
    this.instructorService.getInstructoryById(this.activatedRoute.snapshot.params['id']).subscribe((data)=>{
      this.instructor = data
      this.createUpdateInstuctorForm()
    })
  }

  createUpdateInstuctorForm(){
    this.instructorUpdateForm = this.formBuilder.group({
      firstName: [this.instructor.firstName, Validators.required],
      lastName: [this.instructor.lastName, Validators.required],
      email: [this.instructor.email, Validators.required],
      password: [this.instructor.password, Validators.required],
      nationalIdentity: [this.instructor.nationalIdentity, Validators.required],
      dateOfBirth: [this.instructor.dateOfBirth, Validators.required],
      companyName: [this.instructor.companyName, Validators.required],
      token: [this.instructor.token],
      role: [this.instructor.role],
      expiration: [this.instructor.expiration]
    })
  }

  updateInstructor(){
    if(this.instructorUpdateForm.valid){
      let instructorModel = Object.assign({}, this.instructorUpdateForm.value)
      this.instructorService.updateInstructor(this.instructor.id, instructorModel).subscribe((data)=>{
        this.router.navigate(['admin-panel/instructor-list'])
        this.toastr.success('Update Successful')
      })
    }
    else{
      this.toastr.error('Update Failed')
    }
  }

  deleteInstructor(){
    this.instructorService.deleteInstructor(this.instructor.id).subscribe((data)=>{
      this.router.navigate(['admin-panel/instructor-list'])
      this.toastr.success('Delete Successful')
    })
  }

}
