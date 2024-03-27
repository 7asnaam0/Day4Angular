import { TestBed } from '@angular/core/testing';

import { ApiPrdService } from './api-prd.service';

describe('ApiPrdService', () => {
  let service: ApiPrdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPrdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
