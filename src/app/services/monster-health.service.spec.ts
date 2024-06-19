import { TestBed } from '@angular/core/testing';

import { MonsterHealthService } from '../services/monster-health.service';

describe('MonsterHealthService', () => {
  let service: MonsterHealthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonsterHealthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
