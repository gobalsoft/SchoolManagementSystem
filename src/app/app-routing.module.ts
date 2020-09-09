import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchoolAcademicYearComponent} from './Admin/school-academic-year/school-academic-year.component';
import {EditSchoolAcademicYearComponent} from './Admin/edit-school-academic-year/edit-school-academic-year.component';
import{AddSchoolAcademicYearComponent}from './Admin/add-school-academic-year/add-school-academic-year.component';
import {SchoolClassesComponent}from './Admin/school-classes/school-classes.component';
import {SchoolSubjectsComponent}from './Admin/school-subjects/school-subjects.component';
import {ClassSubjectsComponent}from './Admin/class-subjects/class-subjects.component';


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

{
  path:'SchoolClasses', component:SchoolClassesComponent,
},
{
  path:'SchoolSubjects', component:SchoolSubjectsComponent,
},
{
  path:'ClassSubjects', component:ClassSubjectsComponent,
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
