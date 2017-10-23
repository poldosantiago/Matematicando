import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCadastroComponent } from './comp-cadastro.component';

describe('CompCadastroComponent', () => {
  let component: CompCadastroComponent;
  let fixture: ComponentFixture<CompCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
