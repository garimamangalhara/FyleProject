import { TestBed, inject } from '@angular/core/testing';

import { GetCacheService } from './get-cache.service';

describe('GetCacheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCacheService]
    });
  });

  it('should be created', inject([GetCacheService], (service: GetCacheService) => {
    expect(service).toBeTruthy();
  }));
});
