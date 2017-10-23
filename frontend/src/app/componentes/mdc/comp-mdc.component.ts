import { Component, OnInit } from '@angular/core';
import { MdcService } from './MDC.service';
import { ResultadoMDC } from './resultado-MDC';

@Component({
  selector: 'app-comp-mdc',
  templateUrl: './comp-mdc.component.html',
  styleUrls: ['./comp-mdc.component.css']
})
export class CompMdcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  resultadoMDC:string = '';
  objmdc:any = [];
  teto:boolean = false;
  detalheCalculo:string = '';
  txtCampo:string = '';


  //validacao do campo
  statusCampo:boolean = false;
  msgStatusCampo:string = 'xxx';

  calcularMDC(conteudoMDC){
      try{
          //transformo o que foi digitado em um array
          let lista:number[] = conteudoMDC.split(",");

          //validando o array lista
          if(lista.length <= 1) // a lista está vazia?
            throw "Campo vazio ou inválido. Digite uma relação de números";

          for(let i=0;i<lista.length;i++){
            if(isNaN(lista[i])) // isso é número mesmo?
              throw "Dados inválidos. Isso nao é numero";
          }
          // fim da validacao!

          //se deu tudo certo, segue o jogo...
          let mdc:MdcService = new MdcService();
          let objResultadoMDC:ResultadoMDC =  mdc.calcularMDC(lista); //façco o calculo e jogo num objeto com os resultados

          //jogo os resultados em variaveis
          let relacaoMDC = objResultadoMDC.getRelacaoMDC();
          let denominador = objResultadoMDC.getDenominadores();
          let criterioMDC = objResultadoMDC.getCriterioMDC();

          //agora crio um objeto JSON com os valores
          let objmdc = [];
          for(let i=0;i<relacaoMDC.length;i++){
            var obj = {relacao: relacaoMDC[i],denominador: denominador[i],criterioMDC: criterioMDC[i]};
            objmdc.push(obj);
          }

          //jogos os resultados nos objetos do componente
          this.resultadoMDC = objResultadoMDC.getResultado()+'';
          this.detalheCalculo = objResultadoMDC.getDetalheCalculo();
          this.objmdc = objmdc;
          this.teto = true;
          //console.log(objmdc);
      }
      catch(err){
        this.msgStatusCampo = err;
        this.statusCampo = true;
      }
  }

  limparMDC(){
      this.objmdc = [];
      this.teto = false;
      this.resultadoMDC = '';
      this.detalheCalculo = '';
      this.txtCampo = '';
      this.msgStatusCampo = 'xxx';
      this.statusCampo = false;
  }

}
