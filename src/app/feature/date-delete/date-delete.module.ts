import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { DateDeleteComponent } from './components/date-delete.component';
import { DataDeleteRoutingModule } from './data-delete-routing.module';
import { CoreModule } from '@core/core.module';
import { DeleteDateService } from './service/deletedate.service';

@NgModule({
  imports: [
    CommonModule,
    DataDeleteRoutingModule,
    SharedModule,
    CoreModule
  ],
  declarations: [DateDeleteComponent],
  providers: [
    DeleteDateService,
  ]

})
export class DateDeleteModule { }
