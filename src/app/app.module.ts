import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolAcademicYearComponent } from './admin/school-academic-year/school-academic-year.component';
import { YearofSchoolComponent } from './Admin/yearof-school/yearof-school.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolAcademicYearComponent,
    YearofSchoolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
