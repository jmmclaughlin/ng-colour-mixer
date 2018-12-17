import { TestBed } from '@angular/core/testing';

import { RgbService } from './rgb.service';

describe('RgbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RgbService = TestBed.get(RgbService);
    expect(service).toBeTruthy();
  });
});
