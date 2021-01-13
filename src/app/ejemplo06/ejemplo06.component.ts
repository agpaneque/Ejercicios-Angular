import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo06',
  templateUrl: './ejemplo06.component.html',
  styleUrls: ['./ejemplo06.component.css']
})
export class Ejemplo06Component implements OnInit {

  usd : number;
  cup : number;

  constructor() {
    
   this.usd = 0;
   this.cup = 0;

   }

  ngOnInit(): void {
  }

  limpiarValores(){
    this.usd = 0;
    this.cup = 0;
  }

  actualizarUSD(cup:string){
    this.usd = Number(cup)/24;
  }
  actualizarCUP(usd:string){
    this.cup = Number(usd)*24;
  }

}
