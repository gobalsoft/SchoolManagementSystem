import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SchoolService} from 'src/app/school.service';
import { SchoolAcademic } from 'src/app/student';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-school-academic-year',
  templateUrl: './add-school-academic-year.component.html',
  styleUrls: ['./add-school-academic-year.component.css']
})
export class AddSchoolAcademicYearComponent implements OnInit {
  addForm: FormGroup;
  allcontrol:any;
  constructor(private formBuilder: FormBuilder,private router: Router, private SchoolService:SchoolService ) { }

  ngOnInit(): void {


    this.addForm = this.formBuilder.group({

      AcademicStartDate: ['', Validators.required],
      AcademicEndDate: ['', Validators.required],
      IsCurrentAcademic: ['1', Validators.required],
      SchoolID:['1'],
      AcademicID:['1'],
      
    });
  }
  onSubmit(){
    debugger;
    this.SchoolService.saveAcademic(this.addForm.value).subscribe((data: SchoolAcademic[])=>{
      console.log(data);
      console.log(this.addForm.value);
    
    });
   
    
  }
  
  }
   


