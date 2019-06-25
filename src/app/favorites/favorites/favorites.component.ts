import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../service/favorites.service';
import { Favorite } from '../models/favorite';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  AllFavorites: Favorite[];
  constructor(private favoritesSvc: FavoritesService) { }

  ngOnInit() {
    this.getFavorites();
  }
  getFavorites(){
    this.favoritesSvc.
      getFavotites().subscribe( favorites => {
        this.AllFavorites = favorites;
        console.log('AllFavorites',this.AllFavorites);
      }
    );
    
    return this.AllFavorites;
  }

}
