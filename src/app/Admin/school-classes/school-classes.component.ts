import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {SchoolService} from 'src/app/school.service';
import {Router} from "@angular/router";
 
import {SchoolClass } from 'src/app/student';

@Component({
  selector: 'app-school-classes',
  templateUrl: './school-classes.component.html',
  styleUrls: ['./school-classes.component.css']
})
export class SchoolClassesComponent implements OnInit {
  
  Schoolcls:SchoolClass[]=[];
  constructor(private router: Router,private schoolService:SchoolService) { }

  ngOnInit() {
    debugger;
console.log(this.Schoolcls);
    this.schoolService.Getschoolcls().subscribe((data:SchoolClass[])=>{

    console.log(data);
      this.Schoolcls=data;
      console.log();

    });
  }

}
