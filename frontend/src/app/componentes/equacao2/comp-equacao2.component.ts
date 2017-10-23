import { Component, OnInit } from '@angular/core';
import { Equacao2Service } from './equacao2.service';

@Component({
  selector: 'app-comp-equacao2',
  templateUrl: './comp-equacao2.component.html',
  styleUrls: ['./comp-equacao2.component.css']
})
export class CompEquacao2Component implements OnInit {


  //atributos
  msgStatusCampo:string = 'xxx';
  statusCampo:boolean = false;

  txtCalcDelta:string[] = [];
  txtCalcCoeficiente:string[] = [];
  txtMensagemCalculo:string = '';

  statusCampoCalculo:string = '';


  constructor() {

   }

  ngOnInit() {
  }

  calcularEquacao2(valorA,valorB,valorC){
    let eq2:Equacao2Service = new Equacao2Service(valorA,valorB,valorC);
    this.statusCampoCalculo = eq2.getStatusCampoCalculo();
    this.txtCalcDelta = eq2.getTxtCalcDelta();
    this.txtCalcCoeficiente = eq2.getTxtCalcCoeficiente();
  }

  limparEquacao2(){
    this.statusCampoCalculo = '';
    this.txtCalcDelta = [];
    this.txtCalcCoeficiente = [];
  }
}
