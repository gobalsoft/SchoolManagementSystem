import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSchoolAcademicYearComponent } from './add-school-academic-year.component';

describe('AddSchoolAcademicYearComponent', () => {
  let component: AddSchoolAcademicYearComponent;
  let fixture: ComponentFixture<AddSchoolAcademicYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSchoolAcademicYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSchoolAcademicYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
