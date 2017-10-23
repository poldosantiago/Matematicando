import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
//import { Http } from '@angular/http';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UsuarioService {

private uriCadastroUsuario = 'http://localhost:3000/usuario/';

  constructor(private http: Http) { }

  cadastrarUsuario(usuario: Usuario){
    //console.log(JSON.stringify(usuario));

    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    //{ headers: headers }

    let url = 'http://localhost:3000/usuario/';

    return this.http.post(url,JSON.stringify(usuario),{ headers: headers })
      .map(res => res)
      .subscribe(res => console.log(res));

  }

}
