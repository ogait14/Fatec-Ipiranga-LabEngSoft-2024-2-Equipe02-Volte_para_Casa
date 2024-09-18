import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdosoFormComponent } from './idoso-form/idoso-form.component';
import { LayoutComponent } from 'src/app/layout/layout.component';


const routes: Routes = [
  {path: 'idoso', component: LayoutComponent, children:[
    {path: 'form', component: IdosoFormComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IdosoRoutingModule { }
