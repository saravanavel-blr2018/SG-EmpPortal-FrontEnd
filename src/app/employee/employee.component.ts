/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/


import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../service/httpclient.service';
import { Employee } from '../model/Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit {
  employees:Employee[];
  errorMsg:String = "No employee record found...";

  constructor(private httpClientService:HttpclientService) 
  {
    }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
     response =>this.handleSuccessfulResponse(response),
     error => this.handleErrorResponse("Please try leter (Data Service is down)...")
    );
  }


handleSuccessfulResponse(response)
{
    this.employees=response;
}

handleErrorResponse(response)
{
    this.errorMsg=response;
}

}