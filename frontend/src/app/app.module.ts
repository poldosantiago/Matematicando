import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CompLoginComponent } from './componentes/login/comp-login.component';
import { CompHomeComponent } from './componentes/home/comp-home.component';
import { CompCursosComponent } from './componentes/cursos/comp-cursos.component';
import { CompCursoDetalheComponent } from './componentes/curso-detalhe/comp-curso-detalhe.component';
import { CompMmcComponent } from './componentes/mmc/comp-mmc.component';
import { CompMdcComponent } from './componentes/mdc/comp-mdc.component';
import { CompEquacao2Component } from './componentes/equacao2/comp-equacao2.component';
import { CompSobremimComponent } from './componentes/sobremim/comp-sobremim.component';
import { CompCadastroComponent } from './componentes/cadastro/comp-cadastro.component';

import { UsuarioService } from './componentes/cadastro/usuario.service';
import { AutenticacaoService } from './services/autenticacao.service';


@NgModule({
  declarations: [
    AppComponent,
    CompLoginComponent,
    CompHomeComponent,
    CompCursosComponent,
    CompCursoDetalheComponent,
    CompMmcComponent,
    CompMdcComponent,
    CompEquacao2Component,
    CompSobremimComponent,
    CompCadastroComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    UsuarioService,
    AutenticacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
