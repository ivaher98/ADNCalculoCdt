import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataUpdateRoutingModule } from './date-update-routing.module';
import { DateUpdateComponent } from './components/date-update.component';
import { SharedModule } from '@shared/shared.module';
import { HttpService } from '@core/services/http.service';

@NgModule({
  imports: [
    CommonModule,
    DataUpdateRoutingModule,
    SharedModule
  ],
  declarations: [DateUpdateComponent],
  providers: [HttpService]
})
export class DateUpdateModule { }
