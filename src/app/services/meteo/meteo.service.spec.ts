import { TestBed } from '@angular/core/testing';

import { MeteoService } from './meteo.service';
import { HttpClientModule } from '@angular/common/http';

describe('MeteoService', () => {
  let service: MeteoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(MeteoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
