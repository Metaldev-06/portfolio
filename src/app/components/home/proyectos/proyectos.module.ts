import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos.component';



@NgModule({
  declarations: [ProyectosComponent],
  exports: [ProyectosComponent],
  imports: [
    CommonModule
  ]
})
export class ProyectosModule { }
