import { TestBed } from '@angular/core/testing';

import { PointInteretService } from './point-interet.service';

describe('PointInteretService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PointInteretService = TestBed.get(PointInteretService);
    expect(service).toBeTruthy();
  });
});
