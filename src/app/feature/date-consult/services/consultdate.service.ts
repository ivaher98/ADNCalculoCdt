import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AssignDateModel } from '../../../core/interface/assignDate.interface';

@Injectable({
  providedIn: 'platform'
})
export class ConsultDateService {

constructor(private http: HttpService) { }

  getDate(id: number): Observable<AssignDateModel>{
    return this.http.doGet<AssignDateModel>(`${environment.endPointDataDate + '/' + id}`);
  }

}
