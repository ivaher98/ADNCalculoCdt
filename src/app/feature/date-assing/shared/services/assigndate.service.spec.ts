/* tslint:disable:no-unused-variable */

import { HttpResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AssignDateModel } from '@core/interface/assignDate.interface';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { AssignDateService } from './assigndate.service';
import { DateAssingComponent } from '../../components/date-assing.component';
import { DataSimulation } from '@core/interface/dataSimulation';
import { DataDate } from '../model/dataDate';
import { DataUser } from '../model/dataUser';
import { DataCdtInterface } from '../model/dataCdt';
import { DataAsesorInterface } from '../model/dataAsesor';

describe('DataAssign Service', () => {
  let httpMock: HttpTestingController;
  let service: AssignDateService;
  let fixture: ComponentFixture<DateAssingComponent>;
  const endPointAssignDate = `${environment.endPointDataDate}`;
  // const endPointDataCdt = `${environment.endPointGetDataCdt}`

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [AssignDateService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(AssignDateService);
  });



  it('deberia crear una cita', () => {
    fixture = TestBed.createComponent(DateAssingComponent);
    fixture.detectChanges();

    const dataDate: DataDate = new DataDate('Juan Camilo', '2-22-2022');
    const dataBasicPersonal: DataUser = new DataUser('Iván Camilo', 'Hernandez Leon', 1026595311);
    const dataSimulation: DataSimulation = new DataSimulation('$2.500.000', 270, dataDate, dataBasicPersonal);
    const dummyAssignDate: AssignDateModel = new AssignDateModel('1026595311', dataSimulation);

    service.assignDateCdt(dummyAssignDate).subscribe(res => {
      expect(res).toEqual(true);
    });
    const req = httpMock.expectOne(endPointAssignDate);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });

  it('debería obtener info CDT', () => {
    const dataCdt: DataCdtInterface = new DataCdtInterface(6.5, 4.5);
    service.getInfoCdt().subscribe( (res: DataCdtInterface)  => {
      expect(res).toEqual(dataCdt);
    });
  });

  it('debería obtener info Asesor', () => {
    const dataAsesor: DataAsesorInterface = new DataAsesorInterface('Juan Camilo García', '0123456789');
    service.getInfoAsesor().subscribe(res => {
      expect(res).toEqual(dataAsesor);
    });
  });


  it('should be created', () => {
    const assignDataService: AssignDateService = TestBed.inject(AssignDateService);
    expect(assignDataService).toBeTruthy();
  });

});
