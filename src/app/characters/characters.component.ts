import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from './character/shared/characters-api.service';
import { Observable } from 'rxjs';
import { Characters } from "../models/characters.model";




@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  
  constructor(private  characterSvc: CharactersApiService) { }
  allCharacters : Observable<Characters>;

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(){
    this.allCharacters = this.characterSvc.getByName();
  }
  searchHero(search:string){
    console.log(`pressed! ${search}`);
    this.allCharacters = this.characterSvc.searchHero(search);

  }
}
