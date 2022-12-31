import { AuthGuard } from './../../../../guards/auth.guard';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ApplicantService } from './../../../../services/applicant/applicant.service';
import { BlacklistService } from './../../../../services/blacklist/blacklist.service';
import { IBlackListAllModel } from './../../../../models/blacklist/BlacklistAllModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blacklist-list',
  templateUrl: './blacklist-list.component.html',
  styleUrls: ['./blacklist-list.component.css']
})
export class BlacklistListComponent implements OnInit {

  allBlacklist:IBlackListAllModel[] = []

  constructor(
    private blacklistService:BlacklistService,
    private applicantService:ApplicantService,
    private router:Router,
    private toastr:ToastrService,
    public authGuard:AuthGuard
  ) { }

  ngOnInit(): void {
    this.getAllBlacklists()
  }

  getAllBlacklists(){
    this.blacklistService.getAllBlacklists().subscribe((response)=>{
      this.allBlacklist = response
    })
  }

  getApplicantById(id:number){
    this.applicantService.getApplicantById(id).subscribe((data)=>{
      
    })
  }

  removeApplicant(id:number, applicantId:number){
    this.blacklistService.removeApplicant(id).subscribe((response)=>{
      this.toastr.warning('Applicant removed from blacklist')
      this.applicantService.updateApplicantState(applicantId, 1).subscribe()
      this.toastr.success('Blacklist Updated')
      this.router.navigate(['admin-panel/applicant-list'])
    })
  }

}
