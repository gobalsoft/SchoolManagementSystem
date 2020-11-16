import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentParentDetailsComponent } from './student-parent-details.component';

describe('StudentParentDetailsComponent', () => {
  let component: StudentParentDetailsComponent;
  let fixture: ComponentFixture<StudentParentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentParentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentParentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
