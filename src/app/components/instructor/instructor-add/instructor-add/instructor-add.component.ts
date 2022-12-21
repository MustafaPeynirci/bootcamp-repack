import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { InstructorService } from './../../../../services/instructor/instructor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-add',
  templateUrl: './instructor-add.component.html',
  styleUrls: ['./instructor-add.component.css']
})
export class InstructorAddComponent implements OnInit {

  addInstructorForm:FormGroup

  constructor(
    private instructorService:InstructorService,
    private formBuilder:FormBuilder,
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.createAddInstructorForm()
  }

  createAddInstructorForm(){
    this.addInstructorForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      nationalIdentity: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      companyName: ['', Validators.required]
    })
  }

  addInstructor(){
    if(this.addInstructorForm.valid){
      let instructorModel = Object.assign({}, this.addInstructorForm.value)
      instructorModel.role = "ROLE_INSTRUCTOR"
      instructorModel.token = new Date().toLocaleString()
      this.addInstructorForm.reset()
      this.instructorService.addInstructor(instructorModel).subscribe((data)=>{
        this.router.navigate(['admin-panel/instructor-list'])
        this.toastr.success('Adding Successful')
      })
    }
    else{
      this.toastr.error('Adding Failed')
    }
  }

}
