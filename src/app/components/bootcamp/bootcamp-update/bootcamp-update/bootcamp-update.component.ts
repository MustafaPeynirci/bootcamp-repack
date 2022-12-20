import { IInstructorAllModel } from './../../../../models/instructor/InstructorAllModel';
import { InstructorService } from './../../../../services/instructor/instructor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BootcampService } from './../../../../services/bootcamp/bootcamp.service';
import { IBootcampUpdateRequestModel } from './../../../../models/bootcamp/BootcampUpdateRequestModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootcamp-update',
  templateUrl: './bootcamp-update.component.html',
  styleUrls: ['./bootcamp-update.component.css']
})
export class BootcampUpdateComponent implements OnInit {

  bootcampUpdateForm:FormGroup
  getBootcamp:IBootcampUpdateRequestModel
  instructors:IInstructorAllModel[]

  constructor(
    private bootcampService:BootcampService,
    private instructorService:InstructorService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getBootcampById()
  }

  getBootcampById(){
    this.bootcampService.getBootcampById(this.activatedRoute.snapshot.params['id']).subscribe((data)=>{
      this.getBootcamp = data
      this.createUpdateBootcampForm()
    })
  }

  createUpdateBootcampForm(){
    this.bootcampUpdateForm = this.formBuilder.group({
      instructorId: [this.getBootcamp.instructorId, Validators.required],
      name: [this.getBootcamp.name, Validators.required],
      dateStart: [this.getBootcamp.dateStart, Validators.required],
      dateEnd: [this.getBootcamp.dateEnd, Validators.required],
      state: [this.getBootcamp.state, Validators.required],
      explanation: [this.getBootcamp.explanation, Validators.required]
    })
  }

  updateBootcamp(){
    if(this.bootcampUpdateForm.valid){
      let bootcampModel = Object.assign({}, this.bootcampUpdateForm.value)
      this.instructorService.getInstructoryById(bootcampModel.instructorId).subscribe((data)=>{
        bootcampModel.instructorName = data.firstName + " " + data.lastName
        this.bootcampUpdateForm.reset()
        this.bootcampService.updateBootcamp(this.getBootcamp.id, bootcampModel).subscribe((data)=>{
          this.router.navigate(['admin-panel/bootcamp-list'])

        })
      })
    }
    else{

    }
  }

  deleteBootcamp(){
    this.bootcampService.deleteBootcamp(this.getBootcamp.id).subscribe((data)=>{
      this.router.navigate(["admin-panel/bootcamp-list"])
    })
  }

}
