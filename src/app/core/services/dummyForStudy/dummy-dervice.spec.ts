import { TestBed } from '@angular/core/testing';

import { DummyDervice } from './dummy-dervice';

describe('DummyDervice', () => {
  let service: DummyDervice;

  beforeEach(() => {
    TestBed.configureTestingModule({providers:[]});
    service = TestBed.inject(DummyDervice);
  });

  it('addition of  two numbers', () => {
    const sum = service.add(4,5)
    expect(sum).toEqual(10);
  });
});
