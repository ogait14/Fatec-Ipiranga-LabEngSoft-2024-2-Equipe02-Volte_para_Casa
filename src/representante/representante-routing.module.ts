import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { RepresentanteFormComponent } from './representante-form/representante-form.component';

const routes: Routes = [
  {path: 'representante', component: LayoutComponent, children:[
    {path: 'form', component: RepresentanteFormComponent}
  ]
}

];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepresentanteRoutingModule { }
