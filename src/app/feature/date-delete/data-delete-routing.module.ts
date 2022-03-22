import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateDeleteComponent } from './components/date-delete.component';


const routes: Routes = [
  {
    path: '',
    component: DateDeleteComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataDeleteRoutingModule { }
