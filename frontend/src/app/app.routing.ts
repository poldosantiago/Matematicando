import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompLoginComponent } from './componentes/login/comp-login.component';
import { CompHomeComponent } from './componentes/home/comp-home.component';
import { CompCursosComponent } from './componentes/cursos/comp-cursos.component';
import { CompCursoDetalheComponent } from './componentes/curso-detalhe/comp-curso-detalhe.component';
import { CompMmcComponent } from './componentes/mmc/comp-mmc.component';
import { CompMdcComponent } from './componentes/mdc/comp-mdc.component';
import { CompEquacao2Component } from './componentes/equacao2/comp-equacao2.component';
import { CompSobremimComponent } from './componentes/sobremim/comp-sobremim.component';
import { CompCadastroComponent } from './componentes/cadastro/comp-cadastro.component';


//aqui define o caminho das url do site
const APP_ROUTES: Routes = [
  { path: 'formulas/mmc', component: CompMmcComponent }, // aqui  localhost:4200/formulas/mmc
  { path: 'formulas/mdc', component: CompMdcComponent }, // aqui  localhost:4200/formulas/mdc
  { path: 'formulas/equacao2', component: CompEquacao2Component }, // aqui  localhost:4200/formulas/equacao2
  { path: 'cursos', component: CompCursosComponent }, // aqui  localhost:4200/cursos
  { path: 'curso/:id', component: CompCursoDetalheComponent }, // aqui  localhost:4200/cursos
  { path: 'login', component: CompLoginComponent }, // aqui  localhost:4200/login
  { path: 'cadastro', component: CompCadastroComponent }, // aqui  localhost:4200/cadastro
  { path: 'sobremim', component: CompSobremimComponent }, // aqui  localhost:4200/sobremim
  { path: '', component: CompHomeComponent } // aqui vai para o home apenas colocando o site localhost:4200
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
