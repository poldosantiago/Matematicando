import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMdcComponent } from './comp-mdc.component';

describe('CompMdcComponent', () => {
  let component: CompMdcComponent;
  let fixture: ComponentFixture<CompMdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompMdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
