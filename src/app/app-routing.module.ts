import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', canActivate: [SecurityGuard], loadChildren: () => import('@home/home.module').then(mod => mod.HomeModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, 
    { 
      relativeLinkResolution: 'legacy' ,
      preloadingStrategy: PreloadAllModules
    },
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
