import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeadings } from './dashboard-headings';

describe('DashboardHeadings', () => {
  let component: DashboardHeadings;
  let fixture: ComponentFixture<DashboardHeadings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHeadings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHeadings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
