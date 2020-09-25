import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {SchoolSubject} from 'src/app/student';
import {SchoolService} from 'src/app/school.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-school-subjects',
  templateUrl: './school-subjects.component.html',
  styleUrls: ['./school-subjects.component.css']
})
export class SchoolSubjectsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router,private schoolService:SchoolService) { }

  ngOnInit(): void {
  }

}
