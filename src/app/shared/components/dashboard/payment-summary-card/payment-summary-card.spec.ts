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
    fixture.componentRef.setInput('heading', 'Total Revenue');
    fixture.componentRef.setInput('iconBg', '#eee');
    fixture.componentRef.setInput('count', 2500.50);
    fixture.componentRef.setInput('countBg', 'blue');
    fixture.componentRef.setInput('indecatorBg', 'green');
    fixture.componentRef.setInput('bg', 'white');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
