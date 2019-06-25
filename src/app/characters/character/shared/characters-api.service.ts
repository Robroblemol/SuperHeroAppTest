import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//se trae el cliente http
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';
import { Characters } from "src/app/models/characters.model";


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {
  PUBLIC_KEY = '10214891365899950';
  HASH='search/ab';
  URL_API=`/api/${this.PUBLIC_KEY}/${this.HASH}`;
  URL_index=``;
  

  constructor(private http:HttpClient) { }

  getByName () : Observable <Characters>{
    return this.http.get <Characters> (this.URL_API)
      .pipe(map((data: any): Characters   => data.results))
  }

  searchHero(index:string):Observable <Characters>{
    this.URL_index=`/api/${this.PUBLIC_KEY}/search/${index}`;
    //res: this.http.get<Characters>(this.URL_index) 
    //return res.pipe(map((data: any):Characters => data.results))
    return this.http.get<Characters>(this.URL_index)
    .pipe(map((data: any):Characters => data.results) 
    )
  }
  
}
