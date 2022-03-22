import { Injectable } from '@angular/core';
import { AssignDateModel } from '@core/interface/assignDate.interface';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdateDateService {

  constructor(private httpService: HttpService) { }

  updateDate(assignData: AssignDateModel): Observable<AssignDateModel> {
    return this.httpService.doPut(`${environment.endPointDataDate + '/' + assignData.id}`, assignData, this.httpService.optsName("application/json"));
  }

}
