import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTemplate } from './dashboard-template';

describe('DashboardTemplate', () => {
  let component: DashboardTemplate;
  let fixture: ComponentFixture<DashboardTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
