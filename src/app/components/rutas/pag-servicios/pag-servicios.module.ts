import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagServiciosComponent } from './pag-servicios.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PagServiciosComponent],
  exports: [
    PagServiciosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: PagServiciosComponent}
    ])
  ]
})
export class PagServiciosModule { }
