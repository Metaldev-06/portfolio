import { Component, HostListener } from '@angular/core';
import { Scroll } from '@angular/router';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent {
  
  constructor(private headerService: HeaderService) { }
  get mostrar() {
    return this.headerService.mostrar();
  }
  
  activarSidebar() {
    this.headerService.activadorSidebar.emit(this.headerService.mostrar());
  }
  
  headerVariable: boolean = false;
  
  @HostListener('document:scroll')
  scrollFunction() {
    if(document.documentElement.scrollTop > 777) {
      this.headerVariable = true;
    } else {
      this.headerVariable = false;
    }
  }
}
