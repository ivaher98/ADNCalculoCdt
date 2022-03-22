import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAssingComponent } from './components/date-assing.component';
import { SharedModule } from '@shared/shared.module';
import { DataAssingRoutingModule } from './data-assing-routing.module';
import { AssignDateService } from './shared/services/assigndate.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataAssingRoutingModule
  ],
  declarations: [DateAssingComponent],
  providers: [AssignDateService],
})
export class DateAssingModule { }
