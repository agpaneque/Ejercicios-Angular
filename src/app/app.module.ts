import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejemplo01Component } from './ejemplo01/ejemplo01.component';
import { Ejemplo02Component } from './ejemplo02/ejemplo02.component';
import { Ejemplo03Component } from './ejemplo03/ejemplo03.component';
import { Ejemplo04Component } from './ejemplo04/ejemplo04.component';
import { Ejemplo05Component } from './ejemplo05/ejemplo05.component';
import { Ejemplo06Component } from './ejemplo06/ejemplo06.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo01Component,
    Ejemplo02Component,
    Ejemplo03Component,
    Ejemplo04Component,
    Ejemplo05Component,
    Ejemplo06Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
