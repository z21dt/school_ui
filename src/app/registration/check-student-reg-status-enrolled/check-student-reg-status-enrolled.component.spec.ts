import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStudentRegStatusEnrolledComponent } from './check-student-reg-status-enrolled.component';

describe('CheckStudentRegStatusEnrolledComponent', () => {
  let component: CheckStudentRegStatusEnrolledComponent;
  let fixture: ComponentFixture<CheckStudentRegStatusEnrolledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckStudentRegStatusEnrolledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStudentRegStatusEnrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
