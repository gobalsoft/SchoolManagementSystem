import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolAcademicYearComponent } from './Admin/school-academic-year/school-academic-year.component';
import { EditSchoolAcademicYearComponent } from './Admin/edit-school-academic-year/edit-school-academic-year.component';



@NgModule({
  declarations: [
    AppComponent,
    SchoolAcademicYearComponent,
    EditSchoolAcademicYearComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
