import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCursoDetalheComponent } from './comp-curso-detalhe.component';

describe('CompCursoDetalheComponent', () => {
  let component: CompCursoDetalheComponent;
  let fixture: ComponentFixture<CompCursoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompCursoDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCursoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
