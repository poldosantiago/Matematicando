import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from './../../services/autenticacao.service';

@Component({
  selector: 'app-comp-sobremim',
  templateUrl: './comp-sobremim.component.html',
  styleUrls: ['./comp-sobremim.component.css']
})
export class CompSobremimComponent implements OnInit {

  //minha imagem. veio la do google fotos, blz? por isso ta essa liguiçona
  urlEu ='https://lh3.googleusercontent.com/9-a9VCleIoTGeQAHykaZnbKjy6tRAMW7l1JPz0yEz4-TtdlKpLIN-vR-maJqWjrHSu4MLyo5t7stt5H29iRoTJGHkEjJCnLMU3DDoi0J42Xd7g_ZK96sosO4myzcbvRaN8Zlil2XyPGp8v1YXHwR9UjAk8v78DKzKgZb5TbO-TZ6grVaneg6PuZWoyoSp-jtF3ir_iEbyc_zy9zFt0Z3omjPJ8s9JmagB2IOW4v_zs2nfoZ1LQGBBlxQtnQcb6jZrob9moPCZNceuQfjtLoy47A5rtHJUNVJyvjJn5hW0w_Cjy1ObpXBJAOBWBVImI27ZlLY8s045-KDquqjBDPWgD5wvNVkNqzLh7i9Za3YB62POC4qjWC11hM4Dc20qBdZHcQ3hD2eirYjJaUCqLJGWZXHxXIs_AjHPBV0ifQLn3iNR0LwwjgAIWh19byDP-LOSw3wVAQ5_Mt0UJ2xJaD7yZeD71bZ1-8u8TXvo1A81ogW8LrAHcTlEOJ3RLANbhR-m3TE26IG1uQBRv5b_V7a7AEJxlQenzy3xTk8ggLFyPAwJ8zrlrwYdFRWmHJkkQKercfEXcgiccsNi2ZAHFwLwWGlTABbqpK40Uw5lEQ_eF28e9yMPFx4ootp=w1194-h895-no';

  constructor(private autenticacao: AutenticacaoService) {

  }

  ngOnInit() {
     //uso para verificar se o usuario foi logado... caso falso, mando-o para o /login
     this.autenticacao.precisaAutenticar();
  }
}
