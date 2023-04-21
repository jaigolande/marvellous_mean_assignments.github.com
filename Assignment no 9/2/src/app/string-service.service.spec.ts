import { TestBed } from '@angular/core/testing';

import { StringServiceService } from './string-service.service';

describe('StringServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StringServiceService = TestBed.get(StringServiceService);
    expect(service).toBeTruthy();
  });
});
