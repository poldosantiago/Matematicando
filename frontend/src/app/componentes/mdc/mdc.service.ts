import { Injectable } from '@angular/core';
import { ResultadoMDC } from './resultado-mdc';

@Injectable()
export class MdcService {
  constructor(){}

  //verifica se a lista ta toda fatorada [1,1,1]
  private validaLista(lista){
    var status = false;
    for(var i=0;i<lista.length;i++){
      if(lista[i] != 1){
        status = true;
        break;
      }
    }
    return status;
  }

  //elegendo o denominador
  private elegerDenominador(lista){
    var primo = [2,3,5,7,11,13,17,19,23,29,31];

    for(var p = 0;p<primo.length;p++){
      for(var n = 0;n<lista.length;n++){
          if(lista[n] % primo[p] == 0){
            return primo[p];
          }
      }
    }
    return -1;
  }

  // verifico se o denominador elegido consegue dividir toda a relacao
  private verifCriterioMDC(denominador,lista){
    for(let i=0;i<lista.length;i++){
      if(lista[i] % denominador !=0)
        return false;
    }
    return true;
  }

  //faz o calculo e mostra como com OBJETO
  public calcularMDC(lista){
      let objResultadoMDC:ResultadoMDC = new ResultadoMDC();
      var listaDenominadores = [];
      var txtCalculo = '';

      //só sai do while quando a lista fica [1,1,1] por exemplo
      while(this.validaLista(lista)){
        var denominador = 0;

        // elege o denominador e bota na lista
        var denominador = this.elegerDenominador(lista);

        // verifico se o denominador elegido consegue dividir toda a relacao
        let criterioMDC:boolean = this.verifCriterioMDC(denominador,lista);
        if(criterioMDC)
          listaDenominadores.push(denominador);

        //coloco o denominador no objeto mdc
        objResultadoMDC.setDenominadores(denominador);
        //coloco o criterio no objeto tb
        objResultadoMDC.setCriterioMDC(criterioMDC);

        //mostra a lista + o denominador
        //txtCalculo += lista+' | '+denominador+'\n';
        objResultadoMDC.setRelacaoMDC(lista+'');

        //calcula a lista com o denominador atual
        for(var i = 0;i<lista.length;i++){
            if(lista[i] % denominador == 0){
              lista[i] = lista[i] / denominador;
            }
        }
      }

      //depois que a lista se encerrou. Ficou tudo 1,1,1; calcula o MDC.
      var resultado = 1;
      var texto = '';

      //aqui faz o calculo com os denominadores
      for(var i=0;i<listaDenominadores.length;i++){
        texto += listaDenominadores[i] + ' X ';
        resultado *= listaDenominadores[i];
      }

      //guarda os detalhe do calculo
      objResultadoMDC.setDetalheCalculo('MDC: '+texto.substring(0,texto.length-2)+' = '+resultado);
      //guarda o resultado do calculo
      objResultadoMDC.setResultado(resultado);

      return objResultadoMDC;
  }
}
