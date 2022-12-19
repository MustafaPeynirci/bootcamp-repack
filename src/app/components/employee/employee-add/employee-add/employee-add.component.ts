import { Router } from '@angular/router';
import { EmployeeService } from './../../../../services/employee/employee.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  addEmployeeForm:FormGroup

  constructor(
    private employeeService:EmployeeService,
    private formBuilder:FormBuilder,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.createAddEmployeeForm()
  }

  createAddEmployeeForm(){
    this.addEmployeeForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      nationalIdentity: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      position: ['', Validators.required]
    })
  }

  addEmployee(){
    if(this.addEmployeeForm.valid){
        let employeeModel = Object.assign({}, this.addEmployeeForm.value)
        employeeModel.role = "ROLE_APPLICANT"
        employeeModel.token = new Date().toLocaleString()
        this.addEmployeeForm.reset()
        this.employeeService.addEmployee(employeeModel).subscribe((data)=>{
          this.router.navigate(['admin-panel/employee-list'])
      })
    }
    else{

    }

  }

}
