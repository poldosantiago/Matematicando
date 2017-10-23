import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
@Component({
  selector: 'app-comp-curso-detalhe',
  templateUrl: './comp-curso-detalhe.component.html',
  styleUrls: ['./comp-curso-detalhe.component.css']
})
export class CompCursoDetalheComponent implements OnInit {

  id: string;
  inscricao: Subscription;

  constructor(private route: ActivatedRoute) {
    //console.log(this.route);
    //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
