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
  showSpiner : boolean = true;

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(){
    this.allCharacters = this.characterSvc.getByName();
    this.allCharacters.subscribe(()=>this.showSpiner=false);
  }
  searchHero(search:string){
    this.showSpiner = true;
    this.allCharacters = this.characterSvc.searchHero(search);
    this.allCharacters.subscribe(()=>this.showSpiner=false);
  }
}
