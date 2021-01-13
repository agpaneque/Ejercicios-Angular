import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo08',
  templateUrl: './ejemplo08.component.html',
  styleUrls: ['./ejemplo08.component.css']
})
export class Ejemplo08Component implements OnInit {
  numeros: number[];
  frutas: string[];
  numero : number;
  fruta : string;

  constructor() {
    this.numeros = [1, 5, 8, 24, 32, 11, 55];
    this.frutas = ["pera", "manzana", "melón", "sandía", "mango"];
    this.numero = 0;
    this.fruta = "";
    }
    
  insertaNumero() {
    this.numeros.push(this.numero);
    this.numero = 0; // limpia el input
  }

  insertaFruta() {
    this.frutas.push(this.fruta);
    this.fruta = ""; // limpia el input
  }

  ngOnInit(): void {
  }

}
