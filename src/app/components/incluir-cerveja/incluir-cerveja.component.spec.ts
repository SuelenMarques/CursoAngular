import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirCervejaComponent } from './incluir-cerveja.component';

describe('IncluirCervejaComponent', () => {
  let component: IncluirCervejaComponent;
  let fixture: ComponentFixture<IncluirCervejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirCervejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirCervejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
