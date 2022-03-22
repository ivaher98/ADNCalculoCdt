import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { DateDeleteComponent } from './components/date-delete.component';
import { DataDeleteRoutingModule } from './data-delete-routing.module';
import { DeleteDateService } from './service/deletedate.service';
import { HttpService } from '@core/services/http.service';

@NgModule({
  imports: [
    CommonModule,
    DataDeleteRoutingModule,
    SharedModule
  ],
  declarations: [DateDeleteComponent],
  providers: [DeleteDateService, HttpService]
})
export class DateDeleteModule { }
