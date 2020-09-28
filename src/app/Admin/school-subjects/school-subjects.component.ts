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

  SchoolSubForm: FormGroup;
  SchoolSub:SchoolSubject[]=[];
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router,private schoolService:SchoolService) { }

  ngOnInit(): void {

    this.SchoolSubForm = this.formBuilder.group({

      SubjectCode: ['', Validators.compose([ Validators.required, Validators.minLength(2), Validators.maxLength(5)])],
      SubjectName: ['', Validators.required],
      Category: ['',Validators.required],
      SchoolID:['1'],
  
      
    });
     
  


  }
  get Subval() {
    console.log(this.SchoolSubForm.controls);
    return this.SchoolSubForm.controls;
    }

    onSubmit(){

      debugger;
           this.submitted = true;
           if (this.SchoolSubForm.invalid) {
           return;
                        
       }
      
         }

}
