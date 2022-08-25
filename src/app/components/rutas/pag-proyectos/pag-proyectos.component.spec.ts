import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagProyectosComponent } from './pag-proyectos.component';

describe('PagProyectosComponent', () => {
  let component: PagProyectosComponent;
  let fixture: ComponentFixture<PagProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
