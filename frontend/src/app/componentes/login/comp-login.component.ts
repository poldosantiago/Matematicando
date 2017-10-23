import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AutenticacaoService } from './../../services/autenticacao.service';
import { Usuario } from './../../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-login',
  templateUrl: './comp-login.component.html',
  styleUrls: ['./comp-login.component.css']
})
export class CompLoginComponent implements OnInit {


  @Output() logado = new EventEmitter();
  msgPrecisaLogar: boolean = false;


  constructor(private router: Router, private autenticacao: AutenticacaoService) {
      this.getStatusUsuario();
  }

  ngOnInit() {

  }

  //uso para mostrar a mensagem de erro, caso nao esteja logado
  public getStatusUsuario() {
    let status = localStorage.getItem('status-usuario');

    if(status == 'precisa-logar'){
      this.msgPrecisaLogar = true;
      localStorage.removeItem('status-usuario');
    }
  }

  onSubmit(form){
    //console.log(form);
    let usuario:Usuario = new Usuario(form.value.login,form.value.login,form.value.senha);
    //console.log(usuario);
    this.autenticacao.logar(usuario);
    this.logado.emit(true);
    this.router.navigate(['']);
  }

}
