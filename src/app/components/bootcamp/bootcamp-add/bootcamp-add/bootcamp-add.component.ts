import { IInstructorAllModel } from './../../../../models/instructor/InstructorAllModel';
import { InstructorService } from './../../../../services/instructor/instructor.service';
import { IBootcampAllModel } from './../../../../models/bootcamp/BootcampAllModel';
import { Router } from '@angular/router';
import { BootcampService } from './../../../../services/bootcamp/bootcamp.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootcamp-add',
  templateUrl: './bootcamp-add.component.html',
  styleUrls: ['./bootcamp-add.component.css']
})
export class BootcampAddComponent implements OnInit {

  addBootcampForm:FormGroup
  bootcamp:IBootcampAllModel[] = []
  instructors:IInstructorAllModel[]

  constructor(
    private bootcampService:BootcampService,
    private instructorService:InstructorService,
    private formBuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createAddBootcampForm()
  }

  createAddBootcampForm(){
    this.addBootcampForm = this.formBuilder.group({
      instructorId: ['', Validators.required],
      name: ['', Validators.required],
      dateStart: ['', Validators.required],
      dateEnd: ['', Validators.required],
      state: ['', Validators.required],
      explanation: ['', Validators.required]
    })
  }

  addBootcamp(){
    if(this.addBootcampForm.valid){
      let bootcampModel:IBootcampAllModel = Object.assign({}, this.addBootcampForm.value) 
      this.instructorService.getInstructoryById(bootcampModel.instructorId).subscribe((data)=>{
        bootcampModel.instructorName = data.firstName + " " + data.lastName
        this.bootcampService.addBootcamp(bootcampModel).subscribe((data)=>{
          this.addBootcampForm.reset()
          this.router.navigate(['admin-panel/bootcamp-list'])
          
        })
      })
    }
    else{

    }
  }

}
