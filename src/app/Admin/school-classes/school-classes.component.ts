import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {SchoolService} from 'src/app/school.service';
import {FormBuilder, FormGroup, Validators,MaxLengthValidator,MinLengthValidator} from "@angular/forms";
import {Router} from "@angular/router";
import {SchoolClass } from 'src/app/student';

@Component({
  selector: 'app-school-classes',
  templateUrl: './school-classes.component.html',
  styleUrls: ['./school-classes.component.css']
})
export class SchoolClassesComponent implements OnInit {

  SchoolClsForm: FormGroup;
  Schoolcls:SchoolClass[]=[];
  submitted = false;
  constructor(private formBuilder: FormBuilder,private router: Router,private schoolService:SchoolService) { }

  ngOnInit() {


   
    
console.log(this.Schoolcls);
    this.schoolService.Getschoolcls().subscribe((data:SchoolClass[])=>{

    console.log(data);
      this.Schoolcls=data;
      console.log();

    });


    this.SchoolClsForm = this.formBuilder.group({

      Schoolclassname: ['', Validators.compose([ Validators.required, Validators.minLength(2), Validators.maxLength(5)])],
      Displayorder: ['', Validators.required],
     
      SchoolID:['1'],
  
      
    });
     
  }
  get fval() {
    console.log(this.SchoolClsForm.controls);
    return this.SchoolClsForm.controls;
    }
 
  onSubmit(){

 debugger;
      this.submitted = true;
      if (this.SchoolClsForm.invalid) {
      return;
    
   console.log(this.SchoolClsForm.value);
    
  }
 
    }
  

}
