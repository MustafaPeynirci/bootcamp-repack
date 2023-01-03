import { UpdateCurrentUserComponent } from './components/current-user/update-current-user/update-current-user/update-current-user.component';
import { ApplicantListOfBootcampComponent } from './components/bootcamp/applicant-list-of-bootcamp/applicant-list-of-bootcamp/applicant-list-of-bootcamp.component';
import { ApplicationListComponent } from './components/application/application-list/application-list/application-list.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login/login.component';
import { BlacklistAddComponent } from './components/blacklist/blacklist-add/blacklist-add/blacklist-add.component';
import { BlacklistListComponent } from './components/blacklist/blacklist-list/blacklist-list/blacklist-list.component';
import { InstructorUpdateComponent } from './components/instructor/instructor-update/instructor-update/instructor-update.component';
import { InstructorAddComponent } from './components/instructor/instructor-add/instructor-add/instructor-add.component';
import { InstructorListComponent } from './components/instructor/instructor-list/instructor-list/instructor-list.component';
import { BootcampUpdateComponent } from './components/bootcamp/bootcamp-update/bootcamp-update/bootcamp-update.component';
import { BootcampAddComponent } from './components/bootcamp/bootcamp-add/bootcamp-add/bootcamp-add.component';
import { BootcampListComponent } from './components/bootcamp/bootcamp-list/bootcamp-list/bootcamp-list.component';
import { EmployeeUpdateComponent } from './components/employee/employee-update/employee-update/employee-update.component';
import { EmployeeAddComponent } from './components/employee/employee-add/employee-add/employee-add.component';
import { EmployeeListComponent } from './components/employee/employee-list/employee-list/employee-list.component';
import { ApplicantUpdateComponent } from './components/applicant/applicant-update/applicant-update/applicant-update.component';
import { ApplicantAddComponent } from './components/applicant/applicant-add/applicant-add/applicant-add.component';
import { ApplicantListComponent } from './components/applicant/applicant-list/applicant-list/applicant-list.component';
import { IndexComponent } from './components/index/index/index.component';
import { HomeComponent } from './components/home/home/home.component';
import { PanelIndexComponent } from './components/panel-index/panel-index/panel-index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", component: IndexComponent },
  { path: "login", component: LoginComponent },

  {
    path: "admin-panel",
    component: PanelIndexComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: HomeComponent },
      { path: "applicant-list", component: ApplicantListComponent },
      { path: "applicant-add", component: ApplicantAddComponent },
      { path: "applicant-list/applicant-update/:id", component: ApplicantUpdateComponent },

      { path: "employee-list", component: EmployeeListComponent },
      { path: "employee-add", component: EmployeeAddComponent },
      { path: "employee-list/employee-update/:id", component: EmployeeUpdateComponent },

      { path: "bootcamp-list", component: BootcampListComponent },
      { path: "bootcamp-add", component: BootcampAddComponent },
      { path: "bootcamp-list/bootcamp-update/:id", component: BootcampUpdateComponent },

      { path: "instructor-list", component: InstructorListComponent },
      { path: "instructor-add", component: InstructorAddComponent },
      { path: "instructor-list/instructor-update/:id", component: InstructorUpdateComponent },

      { path: "blacklist", component: BlacklistListComponent },
      { path: "applicant-list/blacklist-add/:id", component: BlacklistAddComponent }
    ]
  },
  {
    path: "instructor-panel",
    component: PanelIndexComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: HomeComponent },
      { path: "applicant-list", component: ApplicantListComponent },
      { path: "bootcamp-list", component: BootcampListComponent },
      { path: "blacklist", component: BlacklistListComponent },
      { path: "instructor-update/:id", component: InstructorUpdateComponent },
      { path: "application-list", component: ApplicationListComponent },
      { path: "bootcamp-list/detail-bootcamp/:id", component: ApplicantListOfBootcampComponent }   
    ]
  },
  {
    path: "applicant-panel",
    component: PanelIndexComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", component: HomeComponent },
      { path: "user-update/:id", component: UpdateCurrentUserComponent },
      { path: "bootcamp-list", component: BootcampListComponent },
      { path: "application-list", component: ApplicationListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
