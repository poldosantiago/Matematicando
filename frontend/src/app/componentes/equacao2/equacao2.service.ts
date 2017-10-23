import { Injectable } from '@angular/core';

@Injectable()
export class Equacao2Service{

  //atributos
  private a:number;
  private b:number;
  private c:number;
  private delta:number;
  private x1:number;
  private x2:number;
  private txtCalcDelta:string[] = [];
  private txtCalcCoeficiente:string[] = [];
  private txtMensagemCalculo:string = '';
  private statusCampoCalculo:string = '';

  //construtor
  constructor(a:number,b:number,c:number){
    //pego os valores
    this.a = a;
    this.b = b;
    this.c = c;

    //aqui já façco o calculo
    this.calcular();
  }

  //Só gets. Como aciono o calculo no construtor, os sets só vão atrapalhar
  public getA(){
    return this.a;
  }
  public getB(){
    return this.b;
  }
  public getC(){
    return this.c;
  }

  public getDelta(){
    return this.delta;
  }

  public getX1(){
    return this.x1;
  }
  public getX2(){
    return this.x2;
  }

  public getTxtCalcDelta(){
    return this.txtCalcDelta;
  }
  public getTxtCalcCoeficiente(){
    return this.txtCalcCoeficiente;
  }
  public getTxtMensagemCalculo(){
    return this.txtMensagemCalculo;
  }

  public getStatusCampoCalculo(){
    return this.statusCampoCalculo;
  }

  //calcular o delta + baskara
  private calcular(){
    // 1º parte
    // △ = b²-4.a.c

    //isso aqui sao as formulas de baskara
    this.txtCalcDelta.push('\u25B3'+' = b'+"\u00B2"+'-4.a.c');
    this.txtCalcDelta.push("\u25B3"+' = '+this.b+"\u00B2"+'-4.'+this.a+'.'+this.c);

    // faz o calculo do delta
    this.delta = Math.pow(this.b,2) -4 * this.a * this.c;
    this.txtCalcDelta.push("\u25B3"+' = '+this.delta+'\n');

    //se o delta for maior que zero, continua o calculo
    if(this.delta > 0){
      /* 2º parte
         x = – b ± √∆
            2∙a      */

      //isso aqui sao as formulas da segunda formula de baskara
      this.txtCalcCoeficiente.push('x = -b +- '+"\u221A"+"\u25B3");
      this.txtCalcCoeficiente.push('\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'2.a');
      this.txtCalcCoeficiente.push('x = -'+this.b+' +- '+"\u221A"+"\u25B3");
      this.txtCalcCoeficiente.push('\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'\u00A0'+'2.'+this.a+'\n');

      //calcula o x1 e o x2
      this.x1 = ((-1*this.b)+(Math.sqrt(this.delta)))/2*this.a;
      this.x2 = ((-1*this.b)-(Math.sqrt(this.delta)))/2*this.a;

      //isso aqui sao os resultados de x1 e x2
      this.txtCalcCoeficiente.push('x'+"\u0027"+' = '+this.x1);
      this.txtCalcCoeficiente.push('x'+"\u0027"+"\u0027"+' = '+this.x2);

      this.txtMensagemCalculo = this.txtCalcDelta+'\n'+this.txtCalcCoeficiente;

      this.statusCampoCalculo = 'equacaoOK';
    }
    //caso o delta seja menor que zero, nao rola fazer o baskara
    else {
      this.txtMensagemCalculo = "Conjunto vazio. Não é possível encontrar o valor de bhaskara";
      this.statusCampoCalculo = 'deltaNegativo';
    }
  }





}
