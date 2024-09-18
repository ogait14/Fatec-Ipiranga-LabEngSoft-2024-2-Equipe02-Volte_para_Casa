import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagamentoFormComponent } from './pagamento-form/pagamento-form.component';
import { LayoutComponent } from 'src/app/layout/layout.component';

const routes: Routes = [
  {path: 'pagamento', component: LayoutComponent, children:[
    {path: 'form', component: PagamentoFormComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentoRoutingModule { }
