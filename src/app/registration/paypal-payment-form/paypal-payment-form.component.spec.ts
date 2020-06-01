import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalPaymentFormComponent } from './paypal-payment-form.component';

describe('PaypalPaymentFormComponent', () => {
  let component: PaypalPaymentFormComponent;
  let fixture: ComponentFixture<PaypalPaymentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaypalPaymentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypalPaymentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
