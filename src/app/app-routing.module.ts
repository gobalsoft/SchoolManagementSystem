import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SchoolAcademicYearComponent} from './Admin/school-academic-year/school-academic-year.component'
import {YearofSchoolComponent} from './Admin/yearof-school/yearof-school.component'
  import { from } from 'rxjs';


const routes: Routes = [
  { path: 'first-component', component: SchoolAcademicYearComponent },
  { path: 'second-component', component: YearofSchoolComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
