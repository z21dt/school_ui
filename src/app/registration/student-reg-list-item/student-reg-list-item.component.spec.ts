import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegListItemComponent } from './student-reg-list-item.component';

describe('StudentRegListItemComponent', () => {
  let component: StudentRegListItemComponent;
  let fixture: ComponentFixture<StudentRegListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRegListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
