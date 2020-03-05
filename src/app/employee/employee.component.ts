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
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit {
  employees:string[];
  constructor(
    private httpClientService:HttpclientService
  ) { }
  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }
handleSuccessfulResponse(response)
{
    this.employees=response;
}
}