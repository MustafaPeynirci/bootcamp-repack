import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeAddComponent } from './components/employee/employee-add/employee-add/employee-add.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './components/employee/employee-update/employee-update/employee-update.component';
import { InstructorAddComponent } from './components/instructor/instructor-add/instructor-add/instructor-add.component';
import { InstructorListComponent } from './components/instructor/instructor-list/instructor-list/instructor-list.component';
import { InstructorUpdateComponent } from './components/instructor/instructor-update/instructor-update/instructor-update.component';
import { ApplicantAddComponent } from './components/applicant/applicant-add/applicant-add/applicant-add.component';
import { ApplicantListComponent } from './components/applicant/applicant-list/applicant-list/applicant-list.component';
import { ApplicantUpdateComponent } from './components/applicant/applicant-update/applicant-update/applicant-update.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    EmployeeListComponent,
    EmployeeUpdateComponent,
    InstructorAddComponent,
    InstructorListComponent,
    InstructorUpdateComponent,
    ApplicantAddComponent,
    ApplicantListComponent,
    ApplicantUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
