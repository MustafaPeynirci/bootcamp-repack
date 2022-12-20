import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  today: Date = new Date()
  date:any = this.today.getDate() + "-" + this.today.getMonth() + "-" + this.today.getFullYear()

  constructor() { }

  ngOnInit(): void {
  }

}
