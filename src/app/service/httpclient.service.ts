import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { EmployeeComponent } from '../employee/employee.component';


export class Employee{
  constructor(
    public fname: String,
    public lname: String,
    public gender: String,
    public dob:String,
    public department:String
  ){}
}

@Injectable({
  providedIn: 'root'
})


export class HttpclientService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getEmployees(){
    console.log("Load all employees");
    return this.httpClient.get<Employee[]>('http://localhost:8080/employees')
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee);
  }
}
