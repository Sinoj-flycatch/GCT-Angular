import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSummaryCard } from './payment-summary-card';

describe('PaymentSummaryCard', () => {
  let component: PaymentSummaryCard;
  let fixture: ComponentFixture<PaymentSummaryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentSummaryCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentSummaryCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
