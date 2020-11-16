import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDocumentComponent } from './student-document.component';

describe('StudentDocumentComponent', () => {
  let component: StudentDocumentComponent;
  let fixture: ComponentFixture<StudentDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
