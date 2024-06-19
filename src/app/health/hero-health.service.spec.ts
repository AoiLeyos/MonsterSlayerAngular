import { TestBed } from '@angular/core/testing';

import { HeroHealthService } from './hero-health.service';

describe('HeroHealthService', () => {
  let service: HeroHealthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroHealthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
