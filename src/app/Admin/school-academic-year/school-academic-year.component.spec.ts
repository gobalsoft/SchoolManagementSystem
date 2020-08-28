import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAcademicYearComponent } from './school-academic-year.component';

describe('SchoolAcademicYearComponent', () => {
  let component: SchoolAcademicYearComponent;
  let fixture: ComponentFixture<SchoolAcademicYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolAcademicYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAcademicYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
