import { Injectable } from '@angular/core';
import { ResultadoMmc } from './resultado-mmc';

@Injectable()
export class MmcService {
  constructor(){}

  //verifica se a lista ta toda fatorada [1,1,1]
  public validaLista(lista){
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
  public elegerDenominador(lista){
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

  //faz o calculo e mostra como com OBJETO
  public calcularMMC(lista){
      let objResultadoMMC:ResultadoMmc = new ResultadoMmc();
      var listaDenominadores = [];
      var txtCalculo = '';

      //só sai do while quando a lista fica [1,1,1] por exemplo
      while(this.validaLista(lista)){
        var denominador = 0;

        // elege o denominador e bota na lista
        var denominador = this.elegerDenominador(lista);
        listaDenominadores.push(denominador);
        objResultadoMMC.setDenominadores(denominador);

        //mostra a lista + o denominador
        //txtCalculo += lista+' | '+denominador+'\n';
        objResultadoMMC.setRelacaoMMC(lista+'');

        //calcula a lista com o denominador atual
        for(var i = 0;i<lista.length;i++){
            if(lista[i] % denominador == 0){
              lista[i] = lista[i] / denominador;
            }
        }
      }

      //depois que a lista se encerrou. Ficou tudo 1,1,1; calcula o MMC.
      var resultado = 1;
      var texto = '';

      //aqui faz o calculo com os denominadores
      for(var i=0;i<listaDenominadores.length;i++){
        texto += listaDenominadores[i] + ' X ';
        resultado *= listaDenominadores[i];
      }

      //guarda os detalhe do calculo
      objResultadoMMC.setDetalheCalculo('MMC: '+texto.substring(0,texto.length-2)+' = '+resultado);
      //guarda o resultado do calculo
      objResultadoMMC.setResultado(resultado);

      return objResultadoMMC;
  }
}
