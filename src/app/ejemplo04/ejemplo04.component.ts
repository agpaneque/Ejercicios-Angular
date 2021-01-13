import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo04',
  templateUrl: './ejemplo04.component.html',
  styleUrls: ['./ejemplo04.component.css']
})
export class Ejemplo04Component implements OnInit {

  n: number;

  constructor() {
    this.n = 0;
    }
  generarValor(){

    this.n = Math.floor(Math.random()*10+1);
  }
  incrementarValor(){
    this.n++;
  }
  decrementarValor(){
    this.n--;
  }

  ngOnInit(): void {
  }

}
