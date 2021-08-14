import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Err404Component } from '../err404/err404.component';

const authRoutes: Routes = [
  { 
    path: '',   /* Base /auth */
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegisterComponent },
      { path: '**', component: Err404Component }      
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]  
})
export class AuthRoutingModule { }
