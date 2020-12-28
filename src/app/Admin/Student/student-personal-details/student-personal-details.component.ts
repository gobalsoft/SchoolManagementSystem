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
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-personal-details',
  templateUrl: './student-personal-details.component.html',
  styleUrls: ['./student-personal-details.component.css'],
})
export class StudentPersonalDetailsComponent implements OnInit {
  StudentPersonalForm: FormGroup;
  StudentList: Student_Personal_Details[] = [];
  StudentReligion: Religion[] = [];
  StudentNationality: Nationality[] = [];
  StudentCategory: Category[] = [];
  submitted = false;
  myDate = new Date();
  a: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private schoolService: SchoolService,
    private datePipe: DatePipe
  ) {
    this.a = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

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

      Religion: ['', ''],
      Nationality: ['', ''],
      Disability: ['', ''],
      Category: ['', ''],
      Caste: ['', ''],
      SentLogin: ['', ''],
      SchoolID: ['1'],
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
    // if (!this.StudentPersonalForm.invalid) {
    var array = {
      First_Name: this.StudentPersonalForm.controls.FirstName.value,
      Middle_Name: this.StudentPersonalForm.controls.LastName.value,
      Email_ID: this.StudentPersonalForm.controls.EmailID.value,
      Mother_Tongue: 'Test',
      Last_Name: 'Last_Name',
      Date_Of_Join: new Date(),
      Date_Of_Birth: new Date(),
      Aadhar_Number: 'Aadhar_Number',
      Gender: 'Gender',
      Is_Login_Details_Sent: 'Is_Login_Details_Sent',
    };
    this.schoolService
      .SaveStudentPersonal(array)
      .subscribe((data: Student_Personal_Details[]) => {
        console.log('cls' + data);
      });
    this.router.navigate(['/Student/AddStudentClass']);
    //  }
  }
}
