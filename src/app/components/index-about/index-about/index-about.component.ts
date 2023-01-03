import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-about',
  templateUrl: './index-about.component.html',
  styleUrls: ['./index-about.component.css']
})
export class IndexAboutComponent implements OnInit {

  user = ""

  constructor() { }

  ngOnInit(): void {
    this.user = localStorage.getItem("role")
  }

}
