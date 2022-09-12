import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { TecnologiasComponent } from './about-me/tecnologias/tecnologias.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [    
    HomeComponent,
    HeroComponent,
    AboutMeComponent,
    TecnologiasComponent,
    ProyectosComponent
  ],
    exports: [
      HomeComponent,
      HeroComponent,
      AboutMeComponent,
      TecnologiasComponent,
      ProyectosComponent
    ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forChild([
      {path: '', component: HomeComponent}
    ])
  ]
})
export class HomeModule { }
