import { TestBed } from '@angular/core/testing';

import { VcentreService } from './vcentre.service';

describe('VcentreService', () => {
  let service: VcentreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VcentreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
