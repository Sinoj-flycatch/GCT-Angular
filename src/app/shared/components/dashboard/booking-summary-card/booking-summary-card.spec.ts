import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSummaryCard } from './booking-summary-card';

describe('BookingSummaryCard', () => {
  let component: BookingSummaryCard;
  let fixture: ComponentFixture<BookingSummaryCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingSummaryCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingSummaryCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('bg', 'red');
    fixture.componentRef.setInput('heading', 'Total Bookings');
    fixture.componentRef.setInput('icon', 'car');
    fixture.componentRef.setInput('iconBg', '#eee');
    fixture.componentRef.setInput('count', 10);
    fixture.componentRef.setInput('countBG', 'blue');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
