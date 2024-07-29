import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepresentanteFormComponent } from './representante-form/representante-form.component';

const routes: Routes = [
  {path: 'representante-form', component: RepresentanteFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentanteRoutingModule { }
