import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';


@Component({
  selector: 'app-resultad',
  templateUrl: './resultad.component.html',
  styleUrls: ['./resultad.component.scss']
})
export class ResultadComponent {


get resultados(){

  return this.gifService.resultados
}

  constructor(private gifService: GifsService){}


}
