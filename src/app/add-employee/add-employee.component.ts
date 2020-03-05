import { Component, OnInit } from '@angular/core';
import { HttpclientService,Employee } from '../service/httpclient.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee("","","","","");
  //employee: Employee;
  //form: FormGroup;

  constructor(private httpClientService: HttpclientService,private formBuilder: FormBuilder) 
  { 
    
  }

    form = this.formBuilder.group({
    fName: [''],
    lastName: [''],
    gender: [''],
    dob: [''],
    department: [''],
  
  });

  ngOnInit() {
    this.form = this.formBuilder.group({
      fName: ['', Validators.required],
      lastName: [null, Validators.required],
      gender: [null, Validators.required],
      dob: [null, Validators.required],
      department: [null, Validators.required],
     
    });
  }


  createEmployee(): void {
    this.httpClientService.createEmployee(this.employee)
        .subscribe( data => {
          alert("Employee created successfully.");
        });

  };
}
