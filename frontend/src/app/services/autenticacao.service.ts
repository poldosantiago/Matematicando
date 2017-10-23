import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './../models/usuario';

import {Http, Headers, RequestOptions, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class AutenticacaoService {

  constructor(private router: Router, private http: Http) { }

  //verifica se o usuario esta logado
  isLogged(){
    let usuario = localStorage.getItem("status-usuario");
    if(usuario != null)
        return true;
    else
        return false;
  }

  //se o cara nao esta logado, joga la pro /login
  precisaAutenticar(){
    if(!this.isLogged()){
      localStorage.setItem('status-usuario','precisa-logar');
      this.router.navigate(['/login']);
    }
  }

  logar(usuario:Usuario){
    //console.log(usuario);
    //console.log(JSON.stringify(usuario));
    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    let url = 'http://localhost:3000/usuario/autenticar-usuario/';

    return this.http.post(url,JSON.stringify(usuario),{ headers: headers })
      .map(res => res.json())
      .subscribe(res => this.autenticaUsuario(res));
  }

  //cria a sessao e manda pro /home
  autenticaUsuario(res){
    localStorage.setItem('status-usuario','ativo');
    localStorage.setItem('usuario',res);
    console.log(res);
  }
}
