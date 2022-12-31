import { AuthGuard } from './../../../guards/auth.guard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  getApplicant = ""
  getInstructor = ""

  constructor(public authGuard:AuthGuard) { }

  ngOnInit(): void {
    this.getApplicant = localStorage.getItem("id")    
    this.getInstructor = localStorage.getItem("id")
  }

}
