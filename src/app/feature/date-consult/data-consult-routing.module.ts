import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateConsultComponent } from './components/date-consult.component';


const routes: Routes = [
  {
    path: '',
    component: DateConsultComponent,
  },
  {
    path: '/:id',
    component: DateConsultComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataConsultRoutingModule { }
