import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolService } from 'src/app/school.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchoolAcademic } from 'src/app/student';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-edit-school-academic-year',
  templateUrl: './edit-school-academic-year.component.html',
  styleUrls: ['./edit-school-academic-year.component.css'],
})
export class EditSchoolAcademicYearComponent implements OnInit {
  editdata: any;
  editForm: FormGroup;

  academics: SchoolAcademic[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private schoolService: SchoolService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.editdata = +params['id'];
    });
    debugger;

    this.editForm = this.formBuilder.group({
      // AcademicStartDate: [formatDate(this.editdata.AcademicStartDate, 'yyyy-MM-dd', 'en'), [Validators.required]],
      AcademicStartDate: ['', Validators.required],
      AcademicEndDate: ['', Validators.required],
      IsCurrentAcademic: ['', Validators.required],
    });

    this.schoolService
      .editAcademic(this.editdata)
      .subscribe((data: SchoolAcademic[]) => {
        console.log(data);
        this.academics = data;
        this.editForm.setValue({
          AcademicStartDate: this.academics[0].AcademicEndDate,
          AcademicEndDate: this.academics[0].AcademicEndDate,
          IsCurrentAcademic: this.academics[0].IsCurrentAcademic,
        });
      });
  }
  onSubmit() {}
}
