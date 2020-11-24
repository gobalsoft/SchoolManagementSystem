import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/school.service';
import { Student_Personal_Details } from 'src/app/student';
import {
  Religion,
  Caste,
  Category,
  Disability,
  Nationality,
} from 'src/app/master';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-student-personal-details',
  templateUrl: './student-personal-details.component.html',
  styleUrls: ['./student-personal-details.component.css'],
})
export class StudentPersonalDetailsComponent implements OnInit {
  StudentPersonalForm: FormGroup;
 StudentList :StudentPersonalDetailsComponent[] = [];
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private schoolService: SchoolService
  ) {}

  ngOnInit(): void {
    this.StudentPersonalForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      MiddleName:[],
      LastName: ['', Validators.required],
    });
  }
  get StudentControl() {
    console.log(this.StudentPersonalForm.controls);
    return this.StudentPersonalForm.controls;
  }
  onSubmit() {
    debugger;
    console.log("submit");
    this.submitted = true;
    if (!this.StudentPersonalForm.invalid) {
      console.log("ackabc");
    }

  }
}
