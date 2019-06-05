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
  constructor(private http:HttpClient) { }

  getByName () : Observable <Characters>{
    return this.http.get <Characters> (this.URL_API)
      .pipe(map((data: any): Characters  => data.results))
  }
  
}
