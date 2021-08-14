import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { episodesRoutes } from './pages/episodes/episodes.routes';
import { factorsRoutes } from './pages/factors/factors.routes';
import { messagesRoutes } from './pages/messages/messages.routes';
import { staticsRoutes } from './pages/statics/statics.routes';
import { userRoutes } from './pages/users/users.routes';

import { Err404Component } from '../err404/err404.component';

export const appRoutes: Routes = [
  { 
    path: '',  /* Base: /app */
    component: PagesComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'episodios' },
      { path: 'episodios', children: episodesRoutes },
      { path: 'factores', children: factorsRoutes },
      { path: 'mensajes', children: messagesRoutes },
      { path: 'estadisticas', children: staticsRoutes },
      { path: 'usuarios', children: userRoutes },
      { path: '**', component: Err404Component }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule] 
})
export class PublicRoutingModule { }
