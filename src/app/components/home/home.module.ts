import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ProyectosModule } from './proyectos/proyectos.module';
import { HeroModule } from './hero/hero.module';
import { AboutMeModule } from './about-me/about-me.module';



@NgModule({
  declarations: [    
    HomeComponent,
  ],
    exports: [
      HomeComponent
    ],
  imports: [
    CommonModule,
    ProyectosModule,
    HeroModule,
    AboutMeModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ])
  ]
})
export class HomeModule { }
