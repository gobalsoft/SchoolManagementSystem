import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearofSchoolComponent } from './yearof-school.component';

describe('YearofSchoolComponent', () => {
  let component: YearofSchoolComponent;
  let fixture: ComponentFixture<YearofSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearofSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearofSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
