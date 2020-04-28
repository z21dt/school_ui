import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripleDateComponent } from './triple-date.component';

describe('TripleDateComponent', () => {
  let component: TripleDateComponent;
  let fixture: ComponentFixture<TripleDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripleDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripleDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
