import { IBlackListAddRequestModel } from './../../../../models/blacklist/BlacklistAddRequestModel';
import { IApplicantUpdateRequestModel } from './../../../../models/applicant/ApplicantUpdateRequestModel';
import { ToastrService } from 'ngx-toastr';
import { ApplicantService } from './../../../../services/applicant/applicant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlacklistService } from './../../../../services/blacklist/blacklist.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blacklist-add',
  templateUrl: './blacklist-add.component.html',
  styleUrls: ['./blacklist-add.component.css']
})
export class BlacklistAddComponent implements OnInit {

  addBlacklistForm:FormGroup
  getApplicant:IApplicantUpdateRequestModel
  id:number
  today:Date = new Date()
  date:any = this.today.getDate() + "-" + this.today.getMonth() + "-" + this.today.getFullYear()

  constructor(
    private blacklistService:BlacklistService,
    private applicantService:ApplicantService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
    this.createAddBlacklistForm()
  }

  createAddBlacklistForm(){
    this.addBlacklistForm = this.formBuilder.group({
      reason: ['', Validators.required],
      date: [this.date]
    })
  }

  getApplicantById(id:number){
    return this.applicantService.getApplicantById(id).subscribe((data)=>{
      
    })
  }

  addBlacklist(){
    if(this.addBlacklistForm.valid){
      let datas:IBlackListAddRequestModel = Object.assign({}, this.addBlacklistForm.value)
      this.activatedRoute.params.subscribe((params)=>{
        datas.applicantId = params['id']
        this.id = params['id']
      })
      this.applicantService.getApplicantById(datas.applicantId).subscribe((data)=>{
        datas.applicantName = data.firstName + " " + data.lastName
        this.blacklistService.addBlacklist(datas).subscribe((data)=>{
          this.router.navigate(['admin-panel/blacklist'])
          this.toastr.success('Adding Successful')
        })
      })
      this.updateApplicantState()
    }
    else{
      this.toastr.error('Failed to Blacklist')
    }
  }

  updateApplicantState(){
    this.applicantService.updateApplicantState(this.id, 0).subscribe((val)=>{
      this.toastr.success('Applicant Updated')
    })
  }

}
