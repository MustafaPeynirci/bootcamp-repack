import { AuthGuard } from './../../../guards/auth.guard';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { IBootcampAllModel } from './../../../models/bootcamp/BootcampAllModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  allBootcampList:IBootcampAllModel[] = []
  user = ""

  constructor(
    private bootcampService:BootcampService,
    private router:Router,
    public authGuard:AuthGuard
  ) { }

  ngOnInit(): void {
    this.getAllBootcamps()
    this.user = localStorage.getItem("role")
  }

  getAllBootcamps(){
    this.bootcampService.getAllBootcamps().subscribe((data)=>{
      this.allBootcampList = data
    })
  }

  apply(bootcamp:any){
    if(localStorage.getItem("token")){
      if(localStorage.getItem("role") == "ROLE_EMPLOYEE"){
        this.router.navigate(["admin-panel/bootcamp-list/bootcamp-update"])
      }
      else if(localStorage.getItem("role") == "ROLE_APPLICANT"){
        this.router.navigate(["applicant-panel/bootcamp-list"])
      }
    }
    else{
      this.router.navigate(["login"])
    }
  }

}
