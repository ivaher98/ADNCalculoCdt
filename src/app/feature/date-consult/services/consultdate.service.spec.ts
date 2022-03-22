/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultdateService } from './consultdate.service';

describe('Service: Consultdate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultdateService]
    });
  });

  it('should ...', inject([ConsultdateService], (service: ConsultdateService) => {
    expect(service).toBeTruthy();
  }));
});
