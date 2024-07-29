import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdosoFormComponent } from './idoso-form/idoso-form.component';

const routes: Routes = [
  {path: 'idoso-form', component: IdosoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdosoRoutingModule { }
