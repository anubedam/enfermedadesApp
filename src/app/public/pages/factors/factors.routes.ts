import { Routes } from '@angular/router';

import { FactorsComponent } from './factors/factors.component';
import { NewFactorComponent } from './new-factor/new-factor.component';
import { SubfactorsComponent } from './subfactors/subfactors.component';
import { NewSubfactorComponent } from './new-subfactor/new-subfactor.component';

import { Err404Component } from '../../../err404/err404.component';

export const factorsRoutes: Routes = [
    {
        path: '', pathMatch: 'full',  /* Base: /app/factores */
        component: FactorsComponent
    },
    {
        path: 'nuevo', 
        component: NewFactorComponent
    },
    {
        path: ':id/subfactores',
        component: SubfactorsComponent
    },
    {
        path: ':id/subfactores/nuevo',
        component: NewSubfactorComponent
    },
    { 
        path: '**', 
        component: Err404Component 
    }
];
