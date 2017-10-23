import { Component, OnInit } from '@angular/core';
import { MmcService } from './mmc.service';
import { ResultadoMmc } from './resultado-mmc';

@Component({
  selector: 'app-comp-mmc',
  templateUrl: './comp-mmc.component.html',
  styleUrls: ['./comp-mmc.component.css']
})
export class CompMmcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  resultadoMMC:string = '';
  objmmc:any = [];
  teto:boolean = false;
  detalheCalculo:string = '';
  txtCampo:string = '';


  //validacao do campo
  statusCampo:boolean = false;
  msgStatusCampo:string = 'xxx';

  calcularMmc(conteudoMMC){
      try{
          //transformo o que foi digitado em um array
          let lista:number[] = conteudoMMC.split(",");

          //validando o array lista
          if(lista.length <= 1) // a lista está vazia?
            throw "Campo vazio ou inválido. Digite uma relação de números";

          for(let i=0;i<lista.length;i++){
            if(isNaN(lista[i])) // isso é número mesmo?
              throw "Dados inválidos. Isso nao é numero";
          }
          // fim da validacao!

          //se deu tudo certo, segue o jogo...
          let mmc:MmcService = new MmcService();
          let objResultadoMMC:ResultadoMmc =  mmc.calcularMMC(lista); //façco o calculo e jogo num objeto com os resultados

          //jogo os resultados em variaveis
          let relacaoMMC = objResultadoMMC.getRelacaoMMC();
          let denominador = objResultadoMMC.getDenominadores();

          //agora crio um objeto JSON com os valores
          let objmmc = [];
          for(let i=0;i<relacaoMMC.length;i++){
            var obj = {relacao: relacaoMMC[i],denominador: denominador[i]};
            objmmc.push(obj);
          }

          //jogos os resultados nos objetos do componente
          this.resultadoMMC = objResultadoMMC.getResultado()+'';
          this.detalheCalculo = objResultadoMMC.getDetalheCalculo();
          this.objmmc = objmmc;
          this.teto = true;
      }
      catch(err){
        this.msgStatusCampo = err;
        this.statusCampo = true;
      }
  }

  limparMmc(){
      this.objmmc = [];
      this.teto = false;
      this.resultadoMMC = '';
      this.detalheCalculo = '';
      this.txtCampo = '';
      this.msgStatusCampo = 'xxx';
      this.statusCampo = false;
  }
}
