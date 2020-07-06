import { TestBed } from '@angular/core/testing';

import { OWMapService } from './owmap.service';
import { HttpClientModule } from '@angular/common/http';

describe('OWMapService', () => {
  let service: OWMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(OWMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
