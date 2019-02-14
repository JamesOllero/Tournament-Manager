import { TestBed } from '@angular/core/testing';

import { SingleEliminationService } from './single-elimination.service';

describe('SingleEliminationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleEliminationService = TestBed.get(SingleEliminationService);
    expect(service).toBeTruthy();
  });
});
