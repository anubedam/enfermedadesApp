import { Routes } from '@angular/router';

import { StaticsComponent } from './statics/statics.component';
import { Err404Component } from '../../../err404/err404.component';

export const staticsRoutes: Routes = [
    { 
        path: '',  pathMatch: 'full',  /* Base: /app/estadisticas */
        component: StaticsComponent
    },
    {
        path: '**', 
        component: Err404Component 
    }
];
