import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagServiciosComponent } from './pag-servicios.component';

describe('PagServiciosComponent', () => {
  let component: PagServiciosComponent;
  let fixture: ComponentFixture<PagServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
