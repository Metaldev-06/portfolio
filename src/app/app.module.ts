import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutMeComponent } from './components/home/about-me/about-me.component';
import { TecnologiasComponent } from './components/home/about-me/tecnologias/tecnologias.component';
import { ProyectosComponent } from './components/home/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HeroComponent,
    AboutMeComponent,
    TecnologiasComponent,
    ProyectosComponent,
    FooterComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
