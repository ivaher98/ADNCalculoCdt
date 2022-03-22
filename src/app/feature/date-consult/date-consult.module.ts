import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateConsultComponent } from './components/date-consult.component';
import { DataConsultRoutingModule } from './data-consult-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ConsultDateService } from './services/consultdate.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataConsultRoutingModule
  ],
  declarations: [DateConsultComponent],
  providers: [ConsultDateService]
})
export class DateConsultModule { }
