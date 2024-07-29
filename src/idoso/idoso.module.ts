import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdosoRoutingModule } from './idoso-routing.module';
import { IdosoFormComponent } from './idoso-form/idoso-form.component';


@NgModule({
  declarations: [
    IdosoFormComponent
  ],
  imports: [
    CommonModule,
    IdosoRoutingModule
  ],
  exports:[
    IdosoFormComponent
  ]
  
})
export class IdosoModule { }
