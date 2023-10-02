import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadComponent } from './resultad/resultad.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    BusquedaComponent,
    ResultadComponent
  ],

exports:[
GifsPageComponent,
BusquedaComponent,
ResultadComponent
],

  imports: [
    CommonModule
  ]
})
export class GifsModule { }
