import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DateUpdateComponent } from './components/date-update.component';


const routes: Routes = [
    {
        path: '',
        component: DateUpdateComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DataUpdateRoutingModule { }
