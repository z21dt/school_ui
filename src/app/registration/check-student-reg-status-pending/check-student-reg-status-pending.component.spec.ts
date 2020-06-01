import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStudentRegStatusPendingComponent } from './check-student-reg-status-pending.component';

describe('CheckStudentRegStatusPendingComponent', () => {
  let component: CheckStudentRegStatusPendingComponent;
  let fixture: ComponentFixture<CheckStudentRegStatusPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckStudentRegStatusPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStudentRegStatusPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
