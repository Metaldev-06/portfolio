import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  datos: FormGroup;
  constructor(private http: HttpClient) {
    this.datos = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      asunto: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required),
    });
  }
  
  envioCorreo() {
    Loading.standard('Enviando correo...');
    let params = {
      email: this.datos.value.email,
      asunto: this.datos.value.asunto,
      mensaje: this.datos.value.mensaje,
    }
    
    
    this.http.post('https://back-mail-project.vercel.app/envio', params).subscribe(resp => {
      console.log(resp);
      Loading.remove();
      Notify.init({position: 'right-bottom',});
      if (this.datos.valid) {
        Notify.success('Correo enviado correctamente');
      }
      
      if (this.datos.invalid) {
        Notify.failure('Error al enviar el correo, complete los campos correctamente');
      }
      
      this.datos.reset();
    });
  }

}
