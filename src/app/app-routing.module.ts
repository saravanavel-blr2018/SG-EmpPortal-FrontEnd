import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  
  {path:'employees', component:EmployeeComponent},
  {path:'addemployee', component: AddEmployeeComponent},
  { path: '', redirectTo: 'employees',pathMatch: 'full' },
  { path: 'NotFound', component: NotFoundComponent},
  {path: '**', redirectTo: 'NotFound' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
