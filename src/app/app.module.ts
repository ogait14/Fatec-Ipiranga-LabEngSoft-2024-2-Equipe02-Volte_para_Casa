import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { RepresentanteModule } from 'src/representante/representante.module';
import { IdosoModule } from 'src/idoso/idoso.module';
import { PagamentoModule } from 'src/pagamento/pagamento.module';
import { FormsModule } from '@angular/forms';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { LoginComponent } from './login/login.component';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './auth.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreNosComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    CadastroComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    RepresentanteModule,
    IdosoModule,
    PagamentoModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
