import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../service/favorites.service';
//import { Observable } from 'rxjs';
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
        console.log('AllFavorites',this.allFavorites);
        this.showSpiner=false;
      }
    );
    
    // return this.AllFavorites;
  }
  saveFavoriteHero(hero: Character){    
    this.favoritesSvc.saveFavoriteHero(hero);
  }

}
