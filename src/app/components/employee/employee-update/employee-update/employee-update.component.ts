import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './../../../../services/employee/employee.service';
import { IEmployeeUpdateRequestModel } from './../../../../models/employee/EmployeeUpdateRequestModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  employeeUpdateForm:FormGroup
  getEmployee:IEmployeeUpdateRequestModel

  constructor(
    private employeeService:EmployeeService,
    private formBuilder:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getEmployeeById()
  }

  getEmployeeById(){
    this.employeeService.getEmployeeById(this.activatedRoute.snapshot.params['id']).subscribe((data)=>{
      this.getEmployee = data
      this.createUpdateEmployeeForm()
    })
  }

  createUpdateEmployeeForm(){
    this.employeeUpdateForm = this.formBuilder.group({
      firstName: [this.getEmployee.firstName, Validators.required],
      lastName: [this.getEmployee.lastName, [Validators.required]],
      email: [this.getEmployee.email, [Validators.required]],
      password: [this.getEmployee.password, Validators.required],
      nationalIdentity: [this.getEmployee.nationalIdentity, Validators.required],
      dateOfBirth: [this.getEmployee.dateOfBirth, [Validators.required]],
      position: [this.getEmployee.position, [Validators.required]],
      token: [this.getEmployee.token],
      role: [this.getEmployee.role],
      expiration: [this.getEmployee.expiration]
    })
  }

  updateEmployee(){
    if(this.employeeUpdateForm.valid){
      let getEmployee = Object.assign({}, this.employeeUpdateForm.value)
      this.employeeService.updateEmployee(this.getEmployee.id, getEmployee).subscribe((data)=>{
        this.router.navigate(['admin-panel/employee-list'])
      })
    }
    else{

    }
  }

  deleteEmployee(){
    this.employeeService.deleteEmployee(this.getEmployee.id).subscribe((data)=>{
      this.router.navigate(['admin-panel/employee-list'])
    })
  }

}
