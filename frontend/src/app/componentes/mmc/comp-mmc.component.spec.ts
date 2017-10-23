import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompMmcComponent } from './comp-mmc.component';

describe('CompMmcComponent', () => {
  let component: CompMmcComponent;
  let fixture: ComponentFixture<CompMmcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompMmcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompMmcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
