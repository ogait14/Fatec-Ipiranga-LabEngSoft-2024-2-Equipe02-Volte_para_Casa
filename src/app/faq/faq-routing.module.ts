import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq.component';
import { LayoutComponent } from 'src/app/layout/layout.component';

const routes: Routes = [{path: 'faq', component: FaqComponent}
];

const routes: Routes = [
  {path: 'faq', component: LayoutComponent}

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule { }
