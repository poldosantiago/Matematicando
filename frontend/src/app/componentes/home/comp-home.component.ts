import { Component, OnInit } from '@angular/core';
//import { Equacao2Service } from './equacao2.service';

@Component({
  selector: 'app-comp-home',
  templateUrl: './comp-home.component.html',
  styleUrls: ['./comp-home.component.css']
})
export class CompHomeComponent implements OnInit {
  constructor(){}
  ngOnInit() {}

  valorDoCompTeste:number;

  pessoa: any = {
    nome: 'leopoldo',
    idade: 20
  }

  recebeEvento(evento){
    console.log(evento.novoValor);
    this.valorDoCompTeste = evento.novoValor;
  }

  kkk:string = '';

}
