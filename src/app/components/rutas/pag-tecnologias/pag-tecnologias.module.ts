import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagTecnologiasComponent } from './pag-tecnologias.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PagTecnologiasComponent],
  exports: [
    PagTecnologiasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PagTecnologiasComponent}
    ])
  ]
})
export class PagTecnologiasModule { }
