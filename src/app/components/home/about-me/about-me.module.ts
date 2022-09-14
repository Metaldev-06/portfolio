import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';



@NgModule({
  declarations: [
    AboutMeComponent,
    TecnologiasComponent,
  ],
  exports: [
    AboutMeComponent,
    TecnologiasComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class AboutMeModule { }
