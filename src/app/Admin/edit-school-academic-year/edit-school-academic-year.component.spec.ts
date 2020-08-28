import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSchoolAcademicYearComponent } from './edit-school-academic-year.component';

describe('EditSchoolAcademicYearComponent', () => {
  let component: EditSchoolAcademicYearComponent;
  let fixture: ComponentFixture<EditSchoolAcademicYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSchoolAcademicYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSchoolAcademicYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
