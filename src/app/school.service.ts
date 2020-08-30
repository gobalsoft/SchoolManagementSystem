import { Injectable } from '@angular/core';
import{Student} from './student';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  student:Array<Student>=[];

  constructor() {
this.student=[
  { AcademicID:1,
    AcademicStartDate:new Date("2019-01-16"),
   AcademicEndDate:new Date("2019-01-16"),
IsCurrentAcademic:false,
SchoolID:1},


];
   }
   get(){
    console.log("get"+this.student);
    return of(this.student);

  }
}
