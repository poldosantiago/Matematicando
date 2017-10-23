import { Injectable } from '@angular/core';

@Injectable()
export class Usuario{
  private email:String;
  private login:String;
  private senha:String;

  constructor(email:String, login:String, senha:String){
    this.email = email;
    this.login = login;
    this.senha = senha;
  }

  //gets e sets
  public getEmail(){
    return this.email;
  }
  public setEmail(email:String){
    this.email = email;
  }

  public getLogin(){
    return this.login;
  }
  public setLogin(login:String){
    this.login = login;
  }

  public getSenha(){
    return this.senha;
  }
  public setSenha(senha:String){
    this.senha = senha;
  }
}
