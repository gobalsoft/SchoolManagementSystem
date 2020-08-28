import { Component, OnInit } from '@angular/core';
import {SchoolService} from 'src/app/school.service';
  import { from } from 'rxjs';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-school-academic-year',
  templateUrl: './school-academic-year.component.html',
  styleUrls: ['./school-academic-year.component.css']
})
export class SchoolAcademicYearComponent implements OnInit {
Academic:Array<Student>;
  constructor(private schoolService:SchoolService) { }

  ngOnInit() {
    this.schoolService.get().subscribe(res=>{
      this.Academic=res;
      console.log(this.Academic);
    });
  }

  

}
