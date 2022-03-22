/* tslint:disable:no-unused-variable */

// import { HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AssignDateModel } from '@core/interface/assignDate.interface';
import { DataSimulation } from '@core/interface/dataSimulation';
import { HttpService } from '@core/services/http.service';
import { DataDate } from '../../date-assing/shared/model/dataDate';
import { DataUser } from '../../date-assing/shared/model/dataUser';
import { DateConsultComponent } from '../components/date-consult.component';
import { ConsultDateService } from './consultdate.service';


describe("Prueba consultar cita", () => {
  let service: ConsultDateService;
  let fixture: ComponentFixture<DateConsultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ConsultDateService, HttpService,]
    })
    service = TestBed.inject(ConsultDateService);
  });

  it('debería consultar cita', () => {

    fixture = TestBed.createComponent(DateConsultComponent);
    fixture.detectChanges();

    let dataDate: DataDate = new DataDate("Juan Camilo", "2-22-2022");
    let dataBasicPersonal: DataUser = new DataUser("Iván Camilo", "Hernandez Leon", 1026595311)
    let dataSimulation: DataSimulation = new DataSimulation('$2.500.000', 270, dataDate, dataBasicPersonal)
    let dummyAssignDate: AssignDateModel = new AssignDateModel('1026595311', dataSimulation)
    // const endPointConsultDate = `${environment.endPointDataDate + '/' + dataBasicPersonal.document}`;

    service.getDate(dataBasicPersonal.document).subscribe(res => {
      expect(res).toEqual(dummyAssignDate);
    })



  })
})


