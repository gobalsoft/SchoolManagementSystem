import { Injectable } from '@angular/core';
import{Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  student:Array<Student>=[];

  constructor() {
this.student=[
{AcademicStartDate:new Date("2019-01-16"),
AcademicEndDate:new Date("2019-01-16"),
IsCurrentAcademic:true},


];

   }
}
