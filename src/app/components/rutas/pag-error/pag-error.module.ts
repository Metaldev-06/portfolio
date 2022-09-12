import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagErrorComponent } from './pag-error.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [PagErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '**', component: PagErrorComponent, pathMatch:'full'}
    ])
  ]
})
export class PagErrorModule { }
