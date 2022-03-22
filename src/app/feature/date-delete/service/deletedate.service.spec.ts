/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeletedateService } from './deletedate.service';

describe('Service: Deletedate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeletedateService]
    });
  });

  it('should ...', inject([DeletedateService], (service: DeletedateService) => {
    expect(service).toBeTruthy();
  }));
});
