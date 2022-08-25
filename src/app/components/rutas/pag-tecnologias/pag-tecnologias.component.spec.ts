import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagTecnologiasComponent } from './pag-tecnologias.component';

describe('PagTecnologiasComponent', () => {
  let component: PagTecnologiasComponent;
  let fixture: ComponentFixture<PagTecnologiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagTecnologiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagTecnologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
