import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AssignDateModel } from '../../../../core/interface/assignDate';
import { DataAsesorInterface } from '../model/dataAsesor';

@Injectable({
  providedIn: 'root'
})
export class AssignDateService {

  constructor(protected httpService: HttpService) { }

  getInfoCdt(){
    return this.httpService.doGet(environment.endPointGetDataCdt);
  }

  getInfoAsesor(): Observable<DataAsesorInterface[]>{
    return this.httpService.doGet(environment.endPointGetDataAsesor);
  }

  assignDateCdt(assignDate: AssignDateModel): Observable<AssignDateModel> {
    return this.httpService.doPost(environment.endPointDataDate, assignDate, this.httpService.optsName("application/json"));
  }

}
