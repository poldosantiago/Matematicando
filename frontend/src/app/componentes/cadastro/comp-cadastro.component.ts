import { Component, OnInit } from '@angular/core';
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-comp-cadastro',
  templateUrl: './comp-cadastro.component.html',
  styleUrls: ['./comp-cadastro.component.css']
})
export class CompCadastroComponent implements OnInit {

  constructor(private http: Http,private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  cadastrarUsuario(email:String, login:String, senha:String){
    let usuario = new Usuario(email,login,senha);
    this.usuarioService.cadastrarUsuario(usuario);

  }
}
