import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSobremimComponent } from './comp-sobremim.component';

describe('CompSobremimComponent', () => {
  let component: CompSobremimComponent;
  let fixture: ComponentFixture<CompSobremimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompSobremimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompSobremimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
