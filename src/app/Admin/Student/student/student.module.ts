import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StudentClassDetailsComponent } from 'src/app/Admin/Student/student-class-details/student-class-details.component';
import { StudentDocumentComponent } from 'src/app/Admin/Student/student-document/student-document.component';
import { StudentPersonalDetailsComponent } from 'src/app/Admin/Student/student-personal-details/student-personal-details.component';
import { StudentComponent } from './student.component';
import { StudentParentDetailsComponent } from 'src/app/Admin/Student/student-parent-details/student-parent-details.component';
import{StudentCommunicationAddressComponent}from 'src/app/Admin/Student/student-communication-address/student-communication-address.component';
import { from } from 'rxjs';
const studentRoutes: Routes = [
  {
    path: 'Student',
    component: StudentComponent,
    children: [
      {
        path: 'AddStudentPersonal',
        component: StudentPersonalDetailsComponent,
      },

      {
        path: 'AddStudentClass',
        component: StudentClassDetailsComponent,
      },
      {
        path: 'StudentParentDetails',
        component: StudentParentDetailsComponent,
      },
      {
        path:'StudentCommunicationAddress',
        component: StudentCommunicationAddressComponent,
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
