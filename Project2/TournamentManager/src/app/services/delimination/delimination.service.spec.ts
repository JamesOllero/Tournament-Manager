import { TestBed } from '@angular/core/testing';

import { DeliminationService } from './delimination.service';

describe('DeliminationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeliminationService = TestBed.get(DeliminationService);
    expect(service).toBeTruthy();
  });
});
