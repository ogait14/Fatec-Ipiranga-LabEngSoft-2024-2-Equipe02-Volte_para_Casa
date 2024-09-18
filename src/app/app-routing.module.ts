import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  

  {path: 'login', component:LoginComponent},
  {path: 'recuperar', component:EsqueciSenhaComponent},
  {path: 'cadastro', component:CadastroComponent},
  {path: '', component:LayoutComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'sobre-nos', component: SobreNosComponent},
    {path: 'faq', component:FaqComponent}

  ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
