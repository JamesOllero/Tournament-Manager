import { TestBed } from '@angular/core/testing';

import { PseudorandomService } from './pseudorandom.service';

describe('PseudorandomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PseudorandomService = TestBed.get(PseudorandomService);
    expect(service).toBeTruthy();
  });
});
