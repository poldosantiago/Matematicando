import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCursosComponent } from './comp-cursos.component';

describe('CompCursosComponent', () => {
  let component: CompCursosComponent;
  let fixture: ComponentFixture<CompCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
