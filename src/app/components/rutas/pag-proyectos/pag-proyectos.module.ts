import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagProyectosComponent } from './pag-proyectos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PagProyectosComponent],
  exports: [
    PagProyectosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PagProyectosComponent}
    ])
  ]
})
export class PagProyectosModule { }
