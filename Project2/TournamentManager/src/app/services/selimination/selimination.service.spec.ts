import { TestBed } from '@angular/core/testing';

import { SeliminationService } from './selimination.service';

describe('SeliminationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeliminationService = TestBed.get(SeliminationService);
    expect(service).toBeTruthy();
  });
});
