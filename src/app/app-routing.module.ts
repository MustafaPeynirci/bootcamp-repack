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

  {
    path: "admin-panel",
    component: PanelIndexComponent,
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
      { path: "bootcamp-list/bootcamp-update/:id", component: BootcampUpdateComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
