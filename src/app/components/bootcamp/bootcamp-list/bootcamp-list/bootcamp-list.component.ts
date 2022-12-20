import { BootcampService } from './../../../../services/bootcamp/bootcamp.service';
import { IBootcampAllModel } from './../../../../models/bootcamp/BootcampAllModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootcamp-list',
  templateUrl: './bootcamp-list.component.html',
  styleUrls: ['./bootcamp-list.component.css']
})
export class BootcampListComponent implements OnInit {

  allBootcampsList:IBootcampAllModel[] = []
  selectedBootcamp:IBootcampAllModel

  constructor(private bootcampService:BootcampService) { }

  ngOnInit(): void {
    this.getBootcamps()
  }

  getBootcamps(){
    this.bootcampService.getAllBootcamps().subscribe((data)=>{
      this.allBootcampsList = data
    })
  }

  changeSelected(model){
    if(model.state == 1){
      this.selectedBootcamp = model
    }
    else{

    }
  }

}
