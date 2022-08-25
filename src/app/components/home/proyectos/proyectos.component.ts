import { Component, OnInit } from '@angular/core';

interface Proyectos {
  url: string;
  img: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent{

  proyectos: Proyectos[] = [
    {
      url: 'https://giftify-app.netlify.app/',
      img: '../../../../../assets/img/proyecto1_optimized.png',
      title: 'GifTify',
      description: 'Es una página web para buscar gif, usando la API de Giphy. Desarrollada con Angular, Sass y TypeScript.'
    },
    {
      url: 'https://candela-fest.netlify.app/',
      img: '../../../../../assets/img/proyecto2_optimized.png',
      title: 'Candela Fest',
      description: 'Es una tarjeta de invitación digital para un XI años de Candela Rojas. Desarrollada con HTML, JavaScript y Sass.'
    },
    {
      url: 'https://metaldev-06.github.io/Juego-del-ahorcado-Alura-Challenges-Oracle-ONE/',
      img: '../../../../../assets/img/proyecto3_optimized.png',
      title: 'Juego del Ahorcado',
      description: 'Es el clásico juego del ahorcado, este es un proyecto de Oracle Next Education. Desarrollado con HTML, CSS y JavaScript.'
    },
    {
      url: 'https://metaldev-06.github.io/Encriptador-de-texto-Alura-Challenges-Oracle-ONE/',
      img: '../../../../../assets/img/proyecto4_optimized.png',
      title: 'Encriptador de Texto',
      description: 'Es un sencillo encriptador y desencriptador de texto, este es un proyecto de Oracle Next Education. Desarrollado con HTML, CSS y JavaScript.'
    },
    {
      url: 'https://color-selector-metaldev.netlify.app/',
      img: '../../../../../assets/img/proyecto5_optimized.png',
      title: 'Color Picker',
      description: 'Es un sencillo selector de color que fue desarrollado con el proposito de aprender nuevas cosas. Desarrollado con HTML, CSS y JavaScript.'
    },
  ];

}
