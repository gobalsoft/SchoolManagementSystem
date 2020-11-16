import { Component, OnInit } from '@angular/core';

import { SchoolService } from 'src/app/school.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SchoolClass } from 'src/app/student';

@Component({
  selector: 'app-class-subjects',
  templateUrl: './class-subjects.component.html',
  styleUrls: ['./class-subjects.component.css'],
})
export class ClassSubjectsComponent implements OnInit {
  ClassSubject: SchoolClass[] = [];
  ClassSubjects: SchoolClass[] = [];
  selectSavearray: SchoolClass[] = [];
  ClsSubForm: FormGroup;
  masterSelected: boolean = false;
  model: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private schoolService: SchoolService
  ) {
    
  }

  ngOnInit(): void {
    this.schoolService.Getschoolcls().subscribe((data: SchoolClass[]) => {
      this.ClassSubjects = data;
      console.log(this.ClassSubject);
    });
  }
  GetClassSubject(e) {
    debugger;
    console.log('ClassSubject');
    console.log(e.target.value);

    this.schoolService
      .GetClassSubject(e.target.value)
      .subscribe((data: SchoolClass[]) => {
        this.ClassSubject = data;
        console.log(this.ClassSubject);
      });
  }

  checkUncheckAll() {
    console.log(this.masterSelected);
    console.log('checkUncheckAll');
    //this.ClassSubject[0].IsSelected=false;
    if (this.masterSelected) {
      debugger;
      for (var i = 0; i < this.ClassSubject.length; i++)
        this.ClassSubject[i].IsSelected = true;
    } else {
      for (var i = 0; i < this.ClassSubject.length; i++)
        this.ClassSubject[i].IsSelected = false;
    }
  }
  Selectvalue() {
    debugger;
    this.selectSavearray = [];
    for (var i = 0; i < this.ClassSubject.length; i++) {
      if (this.ClassSubject[i].IsSelected == true) {
        this.selectSavearray.push(this.ClassSubject[i]);
      }
    }
    if(this.selectSavearray.length==0){
     alert("any one select class name");
    }else{
    alert("select Item Sucess Fully");
    }
    console.log(this.selectSavearray);
    //this.ClassSubject[i].IsSelected=true;
    //this.selectSavearray.push(this.ClassSubject[i]);
  }
}
