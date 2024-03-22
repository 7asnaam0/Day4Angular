import { TestBed } from '@angular/core/testing';

import { StaticPrdService } from './static-prd.service';

describe('StaticPrdService', () => {
  let service: StaticPrdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticPrdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
