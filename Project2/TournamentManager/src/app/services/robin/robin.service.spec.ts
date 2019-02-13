import { TestBed } from '@angular/core/testing';

import { RobinService } from './robin.service';

describe('RobinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RobinService = TestBed.get(RobinService);
    expect(service).toBeTruthy();
  });
});
