import { Injectable } from '@angular/core';

@Injectable()
export class ResultadoMmc{
  private resultado:number;
  private relacaoMMC:string[] = [];
  private denominadores:number[] = [];
  private detalheCalculo:string;

  constructor(){}

  getResultado(){
    return this.resultado;
  }
  setResultado(resultado:number){
    this.resultado = resultado;
  }

  getRelacaoMMC(){
    return this.relacaoMMC;
  }

  setRelacaoMMC(relacaoMMC:string){
    this.relacaoMMC.push(relacaoMMC);
  }

  getDenominadores(){
    return this.denominadores;
  }

  setDenominadores(denominadores:number){
    this.denominadores.push(denominadores);
  }

  getDetalheCalculo(){
    return this.detalheCalculo;
  }

  setDetalheCalculo(detalheCalculo:string){
    this.detalheCalculo = detalheCalculo;
  }
}
