import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompEquacao2Component } from './comp-equacao2.component';

describe('CompEquacao2Component', () => {
  let component: CompEquacao2Component;
  let fixture: ComponentFixture<CompEquacao2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompEquacao2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompEquacao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
