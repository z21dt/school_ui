import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegListComponent } from './student-reg-list.component';

describe('StudentRegListComponent', () => {
  let component: StudentRegListComponent;
  let fixture: ComponentFixture<StudentRegListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRegListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
