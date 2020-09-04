import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchoolAcademicYearComponent} from './Admin/school-academic-year/school-academic-year.component';
import {EditSchoolAcademicYearComponent} from './Admin/edit-school-academic-year/edit-school-academic-year.component';
import{AddSchoolAcademicYearComponent}from './Admin/add-school-academic-year/add-school-academic-year.component';

  import { from } from 'rxjs';


const routes: Routes = [
  { path: 'SchoolAcadamicYear', component: SchoolAcademicYearComponent,


  children:[
    {
      path: 'editschoolacademicyear/:id', 
      component: EditSchoolAcademicYearComponent, 
    },
    {
      path: 'addschoolacademicyear', 
      component: AddSchoolAcademicYearComponent, 
    },
  ],
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
