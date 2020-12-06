import { Component, Input, OnInit } from '@angular/core';
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
  StudentList: StudentPersonalDetailsComponent[] = [];
  StudentReligion: Religion[] = [];
  StudentNationality: Nationality[] = [];
  StudentCategory: Category[] = [];
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private schoolService: SchoolService
  ) {}

  ngOnInit(): void {
    this.StudentPersonalForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      MiddleName: ['', ''],
      LastName: ['', Validators.required],
      Admission: [
        '',
        Validators.required,
        Validators.maxLength[4],
        Validators.minLength[1],
      ],
      EmailID: ['', [Validators.required, Validators.email]],
      DateOfJoining: ['', ''],
      AadharCardNumber: ['', ''],
      DateOfBirth: ['', ''],

      Religion: ['', Validators.required],
      Nationality: ['', Validators.required],
      Disability: ['', ''],
      Category: ['', Validators.required],
      Caste: ['', ''],
      SentLogin: ['', ''],
    });
    this.schoolService.GetStudentReligion().subscribe((data: Religion[]) => {
      this.StudentReligion = data;
      console.log('StudentReligion' + this.StudentReligion);
    });
    this.schoolService
      .GetStudentNationality()
      .subscribe((data: Nationality[]) => {
        this.StudentNationality = data;
        console.log('StudentReligion' + this.StudentNationality);
      });
    this.schoolService.GetStudentCategory().subscribe((data: Category[]) => {
      this.StudentCategory = data;
      console.log('StudentReligion' + this.StudentCategory);
    });
  }
  get StudentControl() {
    console.log(this.StudentPersonalForm.controls);
    return this.StudentPersonalForm.controls;
  }
  onSubmit() {
    debugger;
    console.log(this.StudentPersonalForm.controls);
    console.log('submit');
    this.submitted = true;
    if (!this.StudentPersonalForm.invalid) {
      this.router.navigate(['/Student/AddStudentClass']);
    }
  }
}
