import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagamentoFormComponent } from './pagamento-form/pagamento-form.component';

const routes: Routes = [
  {path: 'pagamento-form', component: PagamentoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentoRoutingModule { }
