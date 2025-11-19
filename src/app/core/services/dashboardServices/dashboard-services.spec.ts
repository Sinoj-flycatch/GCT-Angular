import { TestBed } from '@angular/core/testing';

import { DashboardServices } from './dashboard-services';
import { provideHttpClient } from '@angular/common/http';

describe('DashboardServices', () => {
  let service: DashboardServices;

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[provideHttpClient()]});
    service = TestBed.inject(DashboardServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
