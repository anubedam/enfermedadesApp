import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticsComponent } from './statics/statics.component';

@NgModule({
  declarations: [
    StaticsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StaticsComponent
  ]
})
export class StaticsModule { }
