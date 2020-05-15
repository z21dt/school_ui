import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStudentRegistrationStatusComponent } from './check-student-registration-status.component';

describe('CheckStudentRegistrationStatusComponent', () => {
  let component: CheckStudentRegistrationStatusComponent;
  let fixture: ComponentFixture<CheckStudentRegistrationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckStudentRegistrationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStudentRegistrationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
