import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo02',
  templateUrl: './ejemplo02.component.html',
  styleUrls: ['./ejemplo02.component.css']
})
export class Ejemplo02Component implements OnInit {

  x: number;
  y: number;
  palabra: string;
  persona: cPersona;

  constructor() {
    this.x = 5;
    this.y = 34;
    this.palabra = "Valek";
    this.persona = new cPersona;
   }

  ngOnInit(): void {   

  }
  }

   class cPersona 
  {
    nombre: string ;
    puesto: string;
    sueldo: number;

    constructor(){

      this.nombre ="Antonio Paneque";
      this.puesto = "Master en Front-End";
      this.sueldo = 25000;

    }
  }
