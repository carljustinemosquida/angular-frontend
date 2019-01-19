import { TestBed } from '@angular/core/testing';

import { BallotfetchService } from './ballotfetch.service';

describe('BallotfetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BallotfetchService = TestBed.get(BallotfetchService);
    expect(service).toBeTruthy();
  });
});
