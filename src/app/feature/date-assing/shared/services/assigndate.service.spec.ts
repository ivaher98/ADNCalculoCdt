/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AssigndateService } from './assigndate.service';

describe('Service: Assigndate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssigndateService]
    });
  });

  it('should ...', inject([AssigndateService], (service: AssigndateService) => {
    expect(service).toBeTruthy();
  }));
});
