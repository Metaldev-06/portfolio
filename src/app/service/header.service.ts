import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  @Output() activadorSidebar: EventEmitter<any> = new EventEmitter();

  public clase: boolean = false;
  mostrar() {
    
    if (this.clase === false) {
      this.clase = true;
    } else {
      this.clase = false;
    }
    return this.clase;
  }

  constructor() { }
}
