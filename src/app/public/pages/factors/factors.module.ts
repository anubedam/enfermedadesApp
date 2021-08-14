import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactorsComponent } from './factors/factors.component';
import { NewFactorComponent } from './new-factor/new-factor.component';
import { NewSubfactorComponent } from './new-subfactor/new-subfactor.component';
import { SubfactorsComponent } from './subfactors/subfactors.component';

@NgModule({
  declarations: [
    FactorsComponent,
    NewFactorComponent,
    SubfactorsComponent,
    NewSubfactorComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    FactorsComponent,
    NewFactorComponent,
    SubfactorsComponent,
    NewSubfactorComponent
  ]
})
export class FactorsModule { }
