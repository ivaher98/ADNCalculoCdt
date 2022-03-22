/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { DateDeleteComponent } from '../components/date-delete.component';
import { DeleteDateService } from './deletedate.service';

describe('Service: Deletedate', () => {
  let service: DeleteDateService;
  let fixture: ComponentFixture<DateDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [DeleteDateService, HttpService]
    });
    service = TestBed.inject(DeleteDateService);
  });

  it('debería borrar cita', () => {
    fixture = TestBed.createComponent(DateDeleteComponent);
    fixture.detectChanges();
    const id = '1026595311';
    service.deleteDate(id).subscribe(res => {
      expect(res).toEqual(true);
    });
  });

});
