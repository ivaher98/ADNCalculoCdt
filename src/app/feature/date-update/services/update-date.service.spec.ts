/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { UpdateDateService } from './update-date.service';

describe('Service: UpdateDate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UpdateDateService, HttpService]
    });
  });

  it('should ...', inject([UpdateDateService], (service: UpdateDateService) => {
    expect(service).toBeTruthy();
  }));
});
