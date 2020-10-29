import { Component, OnInit } from '@angular/core';

import {SchoolService} from 'src/app/school.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { SchoolClass } from 'src/app/student';

@Component({
  selector: 'app-class-subjects',
  templateUrl: './class-subjects.component.html',
  styleUrls: ['./class-subjects.component.css']
})
export class ClassSubjectsComponent implements OnInit {
  ClassSubject:SchoolClass[]=[];
  ClassSubjects:SchoolClass[]=[];
  ClsSubForm: FormGroup;
  constructor( private formBuilder: FormBuilder,private router: Router,private schoolService:SchoolService ) {}

  ngOnInit(): void {
    
this.schoolService.Getschoolcls().subscribe((data:SchoolClass[])=>{
  this.ClassSubjects=data;
  console.log(this.ClassSubject);
 });

  }
  GetClassSubject(e){
    debugger;
    console.log("ClassSubject");
    console.log(e.target.value);

    this.schoolService.GetClassSubject(e.target.value).subscribe((data:SchoolClass[])=>{
    
     this.ClassSubject=data;
     console.log(this.ClassSubject);
    });
  }
  
}
