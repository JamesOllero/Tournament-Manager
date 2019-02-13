import { TestBed } from '@angular/core/testing';

import { SwissService } from './swiss.service';

describe('SwissService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwissService = TestBed.get(SwissService);
    expect(service).toBeTruthy();
  });
});
