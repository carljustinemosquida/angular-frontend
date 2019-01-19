import { TestBed } from '@angular/core/testing';

import { NominateService } from './nominate.service';

describe('NominateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NominateService = TestBed.get(NominateService);
    expect(service).toBeTruthy();
  });
});
