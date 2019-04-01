import { TestBed, inject } from '@angular/core/testing';

import { SampletestService } from './sampletest.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SampletestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampletestService],
      imports:[HttpClientModule, HttpClientTestingModule]
    });
  });

  it('should be created', inject([SampletestService], (service: SampletestService) => {
    // expect(service).toBeTruthy();
    expect(service.firstService()).toContain('Hello')
  }));
});
