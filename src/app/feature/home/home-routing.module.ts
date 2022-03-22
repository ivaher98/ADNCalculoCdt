import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dating-assignment',
    loadChildren: () => import('../date-assing/date-assing.module').then(m => m.DateAssingModule)
  },
  {
    path: 'dating-consult',
    loadChildren: () => import('../date-consult/date-consult.module').then(m => m.DateConsultModule)
  },
  {
    path: 'dating-delete',
    loadChildren: () => import('../date-delete/date-delete.module').then(m => m.DateDeleteModule)
  },
  {
    path: 'dating-update',
    loadChildren: () => import('../date-update/date-update.module').then(m => m.DateUpdateModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
