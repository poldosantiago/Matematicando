import { Injectable } from '@angular/core';

@Injectable()
export class ResultadoMDC{
  private resultado:number;
  private relacaoMDC:string[] = [];
  private denominadores:number[] = [];
  private detalheCalculo:string;
  private criterioMDC:boolean[] = [];

  constructor(){}

  getResultado(){
    return this.resultado;
  }
  setResultado(resultado:number){
    this.resultado = resultado;
  }

  getRelacaoMDC(){
    return this.relacaoMDC;
  }

  setRelacaoMDC(relacaoMDC:string){
    this.relacaoMDC.push(relacaoMDC);
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

  getCriterioMDC(){
    return this.criterioMDC;
  }

  setCriterioMDC(criterioMDC:boolean){
    this.criterioMDC.push(criterioMDC);
  }
}
