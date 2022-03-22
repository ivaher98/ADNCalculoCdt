import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';
import { AssignDateModel } from '../../../../core/interface/assignDate.interface';
import { DataAsesorInterface } from '../model/dataAsesor';
import { DataCdtInterface } from '../model/dataCdt';

@Injectable({
  providedIn: 'root'
})
export class AssignDateService {

  constructor(protected httpService: HttpService) { }

  getInfoCdt(){
    return this.httpService.doGet<DataCdtInterface>(environment.endPointGetDataCdt);
  }

  getInfoAsesor(){
    return this.httpService.doGet<DataAsesorInterface>(environment.endPointGetDataAsesor);
  }

  assignDateCdt(assignDate: AssignDateModel) {
    return this.httpService.doPost<AssignDateModel, boolean>(environment.endPointDataDate, assignDate, this.httpService.optsName("application/json"));
  }

}
