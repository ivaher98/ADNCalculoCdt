import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeleteDateService {

  constructor(private httpService: HttpService) {

  }

  public deleteDate(id: string) {
    return this.httpService.doDelete<boolean>(`${environment.endPointDataDate + '/' + id}`);
  }
}
