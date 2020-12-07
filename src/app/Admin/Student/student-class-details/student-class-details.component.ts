import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-class-details',
  templateUrl: './student-class-details.component.html',
  styleUrls: ['./student-class-details.component.css']
})
export class StudentClassDetailsComponent implements OnInit {
  @Input() data: string;
  constructor() { }

  ngOnInit(): void {
  }

}
