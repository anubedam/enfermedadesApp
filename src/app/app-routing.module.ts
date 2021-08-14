import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Err404Component } from './err404/err404.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'app'
  },
  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path: 'app',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: '**', component: Err404Component
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
