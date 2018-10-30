import { TestBed } from '@angular/core/testing';

import { CandyService } from './candy.service';

describe('CandyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CandyService = TestBed.get(CandyService);
    expect(service).toBeTruthy();
  });
});
