import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon'; 
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    MatIconModule,
    FlexLayoutModule
  ],
  exports: [
    MatIconModule,
    FlexLayoutModule
  ]
})
export class MaterialModule { }
