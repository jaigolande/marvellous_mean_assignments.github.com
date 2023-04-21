import { TestBed } from '@angular/core/testing';

import { NumberServiceService } from './number-service.service';

describe('NumberServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberServiceService = TestBed.get(NumberServiceService);
    expect(service).toBeTruthy();
  });
});
