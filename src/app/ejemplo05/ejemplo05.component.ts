import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo05',
  templateUrl: './ejemplo05.component.html',
  styleUrls: ['./ejemplo05.component.css']
})
export class Ejemplo05Component implements OnInit {
  palabra: string;

  constructor() {
    this.palabra = "";
   }

  ngOnInit() {
    
  }

  actualizaPalabra(cadena: string) {
    this.palabra = cadena;
  }

  limpiaTexto() {
    this.palabra = "";
  }

}
