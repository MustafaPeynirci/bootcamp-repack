import { InstructorService } from './../../../../services/instructor/instructor.service';
import { IInstructorAllModel } from './../../../../models/instructor/InstructorAllModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.css']
})
export class InstructorListComponent implements OnInit {

  allInstructors:IInstructorAllModel[] = []

  constructor(private instructorService:InstructorService) { }

  ngOnInit(): void {
    this.getAllInstructors()
  }

  getAllInstructors(){
    this.instructorService.getAllInstructors().subscribe((data)=>{
      this.allInstructors = data
    })
  }

}
