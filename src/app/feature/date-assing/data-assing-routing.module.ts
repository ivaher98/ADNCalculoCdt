import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateAssingComponent } from './components/date-assing.component';


const routes: Routes = [
  {
    path: '',
    component: DateAssingComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataAssingRoutingModule { }
