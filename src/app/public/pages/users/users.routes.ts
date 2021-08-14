import { Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { Err404Component } from '../../../err404/err404.component';

export const userRoutes: Routes = [
    { 
      path: '',  pathMatch: 'full',  /* Base: /app/usuarios */
      component: UsersComponent
    },
    {
      path: '**', 
      component: Err404Component  
    }
];
