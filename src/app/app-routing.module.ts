import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchoolAcademicYearComponent} from './Admin/school-academic-year/school-academic-year.component';
import {EditSchoolAcademicYearComponent} from './Admin/edit-school-academic-year/edit-school-academic-year.component';

  import { from } from 'rxjs';


const routes: Routes = [
  { path: 'first-component', component: SchoolAcademicYearComponent,


  children:[
    {
      path: 'second-component', 
      component: EditSchoolAcademicYearComponent, 
    },
  ],
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
