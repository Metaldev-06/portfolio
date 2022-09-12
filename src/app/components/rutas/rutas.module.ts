import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoModule } from './contacto/contacto.module';
import { PagErrorModule } from './pag-error/pag-error.module';
import { PagProyectosModule } from './pag-proyectos/pag-proyectos.module';
import { PagServiciosModule } from './pag-servicios/pag-servicios.module';
import { PagTecnologiasModule } from './pag-tecnologias/pag-tecnologias.module';



@NgModule({
  declarations: [],
  exports: [
    ContactoModule
  ],
  imports: [
    CommonModule,
    ContactoModule,
    PagErrorModule,
    PagProyectosModule,
    PagServiciosModule,
    PagTecnologiasModule
  ]
})
export class RutasModule { }
