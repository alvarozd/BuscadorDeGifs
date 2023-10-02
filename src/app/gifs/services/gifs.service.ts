import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gisf.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {



  private _historial: string[] = []

  public resultados: Gif[]= [] 


  get historial() {

    return [...this._historial]
  }

  constructor(private http: HttpClient){

this._historial = JSON.parse(localStorage.getItem('hisotiral')!) || []

  }




  buscarGifs(query: string) {


    query = query.trim().toLocaleLowerCase()

    if (!this._historial.includes(query)) {

      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10)


     localStorage.setItem('historial', JSON.stringify(this._historial))
    }

  

    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=4WU05uc4gZURmh9DVIXOadEB8B01jjnC&q=${query}&limit=10`)
    .subscribe( (resp ) => {

     
      this.resultados = resp.data
      console.log(this.resultados)
      localStorage.setItem('historial', JSON.stringify(this._historial))

    } )

    



    // console.log(this._historial)

  }


}




