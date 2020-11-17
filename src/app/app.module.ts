import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolAcademicYearComponent } from './Admin/school-academic-year/school-academic-year.component';
import { EditSchoolAcademicYearComponent } from './Admin/edit-school-academic-year/edit-school-academic-year.component';
import { AddSchoolAcademicYearComponent } from './Admin/add-school-academic-year/add-school-academic-year.component';
import { SchoolClassesComponent } from './Admin/school-classes/school-classes.component';
import { SchoolSubjectsComponent } from './Admin/school-subjects/school-subjects.component';
import { ClassSubjectsComponent } from './Admin/class-subjects/class-subjects.component';
import { AddstudentComponent } from './Admin/addstudent/addstudent.component';
import { StudentPersonalDetailsComponent } from './Admin/Student/student-personal-details/student-personal-details.component';
import { StudentClassDetailsComponent } from './Admin/Student/student-class-details/student-class-details.component';
import { StudentParentDetailsComponent } from './Admin/Student/student-parent-details/student-parent-details.component';
import { StudentCommunicationAddressComponent } from './Admin/Student/student-communication-address/student-communication-address.component';
import { StudentDocumentComponent } from './Admin/Student/student-document/student-document.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolAcademicYearComponent,
    EditSchoolAcademicYearComponent,
    AddSchoolAcademicYearComponent,
    SchoolClassesComponent,
    SchoolSubjectsComponent,
    ClassSubjectsComponent,
    AddstudentComponent,
    StudentPersonalDetailsComponent,
    StudentClassDetailsComponent,
    StudentParentDetailsComponent,
    StudentCommunicationAddressComponent,
    StudentDocumentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
