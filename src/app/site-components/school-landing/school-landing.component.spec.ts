import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolLandingComponent } from './school-landing.component';

describe('SchoolLandingComponent', () => {
  let component: SchoolLandingComponent;
  let fixture: ComponentFixture<SchoolLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
