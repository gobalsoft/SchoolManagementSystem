import { Component, OnInit } from '@angular/core';
import {SchoolService} from 'src/app/school.service';
import {Router} from "@angular/router";
  import { from } from 'rxjs';
import { SchoolAcademic } from 'src/app/student';

@Component({
  selector: 'app-school-academic-year',
  templateUrl: './school-academic-year.component.html',
  styleUrls: ['./school-academic-year.component.css']
})
export class SchoolAcademicYearComponent implements OnInit {
academic:SchoolAcademic[]=[];

  constructor(private router: Router,private schoolService:SchoolService) { }

  ngOnInit() {
 debugger;

    this.schoolService.get().subscribe((data: SchoolAcademic[])=>{
      console.log(data);
      this.academic = data;
    });
 
  }

  

}
