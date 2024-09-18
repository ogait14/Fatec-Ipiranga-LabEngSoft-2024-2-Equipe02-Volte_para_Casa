import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RepresentanteRoutingModule } from './representante-routing.module';
import { RepresentanteFormComponent } from './representante-form/representante-form.component';




@NgModule({
  declarations: [
    RepresentanteFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RepresentanteRoutingModule
  ],
  exports: [
    RepresentanteFormComponent
  ]
})
export class RepresentanteModule { }


