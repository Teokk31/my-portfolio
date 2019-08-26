import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';


const routes: Routes = [
  {
    path: 'home',
    redirectTo: '/'
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
