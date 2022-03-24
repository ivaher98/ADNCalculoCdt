/* tslint:disable:no-unused-variable */

// import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpService } from '@core/services/http.service';

import { ConsultDateService } from './consultdate.service';


describe('Prueba consultar cita', () => {
  // let service: ConsultDateService;
  // let fixture: ComponentFixture<DateConsultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ConsultDateService, HttpService]
    });
    // service = TestBed.inject(ConsultDateService);
  });

  // it('debería consultar cita', () => {
  //   fixture = TestBed.createComponent(DateConsultComponent);
  //   fixture.detectChanges();

  //   const dataDate: DataDate = new DataDate('Juan Camilo', '2-22-2022');
  //   const dataBasicPersonal: DataUser = new DataUser('Iván Camilo', 'Hernandez Leon', 1026595311);
  //   const dataSimulation: DataSimulation = new DataSimulation('$2.500.000', 270, dataDate, dataBasicPersonal);
  //   const dummyAssignDate: AssignDateModel = new AssignDateModel('1026595311', dataSimulation);
  //   // const endPointConsultDate = `${environment.endPointDataDate + '/' + dataBasicPersonal.document}`;

  //   service.getDate(dataBasicPersonal.document).subscribe(res => {
  //     expect(res).toEqual(dummyAssignDate);
  //   });
  // });

});
