import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../service/favorites.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  allFavorites: Character[];
  showSpiner: boolean = true;
  
  

  constructor(private favoritesSvc: FavoritesService) { }

  ngOnInit() {
    this.getFavorites();
  }
  
  getFavorites(){
    this.favoritesSvc.
      getFavotites().subscribe( favorites => {
        this.allFavorites = favorites ;
        this.showSpiner=false;
      }
    );
  }
  saveFavoriteHero(hero: Character){    
    this.favoritesSvc.saveFavoriteHero(hero);
  }
  isFavorite(character: Character){ 
    return this.favoritesSvc.isFavorite(character)
  }
 

}
