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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
