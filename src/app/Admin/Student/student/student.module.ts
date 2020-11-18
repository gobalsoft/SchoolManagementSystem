import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentClassDetailsComponent } from 'src/app/Admin/Student/student-class-details/student-class-details.component';
import { StudentDocumentComponent } from 'src/app/Admin/Student/student-document/student-document.component';
import { StudentPersonalDetailsComponent } from 'src/app/Admin/Student/student-personal-details/student-personal-details.component';
import { StudentComponent } from './student.component';

const studentRoutes: Routes = [
  {
    path: 'Student',
    component: StudentPersonalDetailsComponent,
    children: [
      {
        path: 'AddStudentClass',
        component: StudentClassDetailsComponent,
      },
      {
        path: 'AddDocument',
        component: StudentDocumentComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [StudentComponent],
  imports: [RouterModule.forRoot(studentRoutes)],
  exports: [RouterModule],
})
export class StudentModule {}
