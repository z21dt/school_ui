import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifiedRegFormComponent } from './simplified-reg-form.component';

describe('SimplifiedRegFormComponent', () => {
  let component: SimplifiedRegFormComponent;
  let fixture: ComponentFixture<SimplifiedRegFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplifiedRegFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplifiedRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
