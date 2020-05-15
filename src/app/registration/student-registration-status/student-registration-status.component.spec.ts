import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegistrationStatusComponent } from './student-registration-status.component';

describe('StudentRegistrationStatusComponent', () => {
  let component: StudentRegistrationStatusComponent;
  let fixture: ComponentFixture<StudentRegistrationStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRegistrationStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegistrationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
