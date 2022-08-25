import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { AboutMeComponent } from './components/home/about-me/about-me.component';
import { TecnologiasComponent } from './components/home/about-me/tecnologias/tecnologias.component';
import { ProyectosComponent } from './components/home/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { PagErrorComponent } from './components/rutas/pag-error/pag-error.component';
import { RouterModule } from '@angular/router';
import { ContactoComponent } from './components/rutas/contacto/contacto.component';
import { PagTecnologiasComponent } from './components/rutas/pag-tecnologias/pag-tecnologias.component';
import { PagProyectosComponent } from './components/rutas/pag-proyectos/pag-proyectos.component';
import { PagServiciosComponent } from './components/rutas/pag-servicios/pag-servicios.component';

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
    PagErrorComponent,
    ContactoComponent,
    PagTecnologiasComponent,
    PagProyectosComponent,
    PagServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component:HomeComponent},
      {path: 'contacto', component:ContactoComponent},
      {path: 'tecnologias', component:PagTecnologiasComponent},
      {path: 'proyectos', component:PagProyectosComponent},
      {path: 'servicios', component:PagServiciosComponent},
      {path: 'error', component:PagErrorComponent},
      {path: '**', redirectTo:'/error', pathMatch:'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
