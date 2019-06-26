import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../service/favorites.service';
import { Observable } from 'rxjs';
import Character from 'src/app/models/character.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  AllFavorites: Character[];
  

  constructor(private favoritesSvc: FavoritesService) { }

  ngOnInit() {
    this.getFavorites();
  }
  getFavorites(){
    this.favoritesSvc.
      getFavotites().subscribe( favorites => {
        this.AllFavorites = favorites ;
        console.log('AllFavorites',this.AllFavorites);
      }
    );
    
    return this.AllFavorites;
  }
  saveFavoriteHero(hero:Character){
    this.favoritesSvc.saveFavoriteHero(hero);
  }

}
