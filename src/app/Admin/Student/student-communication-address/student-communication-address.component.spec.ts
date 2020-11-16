import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCommunicationAddressComponent } from './student-communication-address.component';

describe('StudentCommunicationAddressComponent', () => {
  let component: StudentCommunicationAddressComponent;
  let fixture: ComponentFixture<StudentCommunicationAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCommunicationAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCommunicationAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
