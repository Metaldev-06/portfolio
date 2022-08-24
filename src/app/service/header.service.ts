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
      console.log(this.clase)
    } else {
      this.clase = false;
      console.log(this.clase)
    }
    return this.clase;
  }

  constructor() { }
}
