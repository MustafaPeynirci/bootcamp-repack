import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { EmployeeAddComponent } from './components/employee/employee-add/employee-add/employee-add.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './components/employee/employee-update/employee-update/employee-update.component';
import { InstructorAddComponent } from './components/instructor/instructor-add/instructor-add/instructor-add.component';
import { InstructorListComponent } from './components/instructor/instructor-list/instructor-list/instructor-list.component';
import { InstructorUpdateComponent } from './components/instructor/instructor-update/instructor-update/instructor-update.component';
import { ApplicantAddComponent } from './components/applicant/applicant-add/applicant-add/applicant-add.component';
import { ApplicantListComponent } from './components/applicant/applicant-list/applicant-list/applicant-list.component';
import { ApplicantUpdateComponent } from './components/applicant/applicant-update/applicant-update/applicant-update.component';
import { PanelComponent } from './layout/panel/panel/panel.component';
import { PanelIndexComponent } from './components/panel-index/panel-index/panel-index.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { NaviComponent } from './layout/navi/navi/navi.component';
import { SidebarComponent } from './layout/sidebar/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home/home.component';
import { IndexComponent } from './components/index/index/index.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BootcampAddComponent } from './components/bootcamp/bootcamp-add/bootcamp-add/bootcamp-add.component';
import { BootcampListComponent } from './components/bootcamp/bootcamp-list/bootcamp-list/bootcamp-list.component';
import { BootcampUpdateComponent } from './components/bootcamp/bootcamp-update/bootcamp-update/bootcamp-update.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlacklistAddComponent } from './components/blacklist/blacklist-add/blacklist-add/blacklist-add.component';
import { BlacklistListComponent } from './components/blacklist/blacklist-list/blacklist-list/blacklist-list.component';
import { BlacklistUpdateComponent } from './components/blacklist/blacklist-update/blacklist-update/blacklist-update.component';
import { LoginComponent } from './components/login/login/login.component';

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
    ApplicantUpdateComponent,
    PanelComponent,
    PanelIndexComponent,
    FooterComponent,
    NaviComponent,
    SidebarComponent,
    HomeComponent,
    IndexComponent,
    BootcampAddComponent,
    BootcampListComponent,
    BootcampUpdateComponent,
    BlacklistAddComponent,
    BlacklistListComponent,
    BlacklistUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-top-right',
      preventDuplicates: true
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
