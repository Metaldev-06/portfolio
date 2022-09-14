import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // {path: '', component:HomeComponent},
  {path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)},
  {path: 'contacto', loadChildren: () => import('./components/rutas/contacto/contacto.module').then(m => m.ContactoModule)},
  {path: 'error', loadChildren: () => import('./components/rutas/pag-error/pag-error.module').then(m => m.PagErrorModule)},
  {path: 'proyectos', loadChildren: () => import('./components/rutas/pag-proyectos/pag-proyectos.module').then(m => m.PagProyectosModule)},
  {path: 'servicios', loadChildren: () => import('./components/rutas/pag-servicios/pag-servicios.module').then(m => m.PagServiciosModule)},
  {path: 'tecnologias', loadChildren: () => import('./components/rutas/pag-tecnologias/pag-tecnologias.module').then(m => m.PagTecnologiasModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
