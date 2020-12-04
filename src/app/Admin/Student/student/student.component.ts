import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  test:string="Test";
  constructor(private router: Router) {
    debugger;
    this.router.navigate(['/Student/AddStudentPersonal']);
  }

  ngOnInit(): void {
    
   
  }
}
