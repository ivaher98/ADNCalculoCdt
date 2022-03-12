import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
    //   {
    //     path: 'crear',
    //     component: CrearProductoComponent
    //   },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]  
})
export class HomeRoutingModule { }