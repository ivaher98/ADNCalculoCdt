/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { HttpService } from '@core/services/http.service';
import { DeleteDateService } from './deletedate.service';

describe('Service: Deletedate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeleteDateService, HttpService]
    });
  });

  it('should ...', inject([DeleteDateService], (service: DeleteDateService) => {
    expect(service).toBeTruthy();
  }));
});
