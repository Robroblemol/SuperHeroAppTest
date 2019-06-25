import { Injectable } from '@angular/core';
import { AngularFirestore, 
         AngularFirestoreCollection,
         AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Favorite } from "../models/favorite";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favoritesCollection: AngularFirestoreCollection<Favorite>;
  favorites: Observable<Favorite[]> ;
  favotitesDoc: AngularFirestoreDocument<Favorite>;

  constructor(public afs: AngularFirestore) {
    this.favorites = afs.collection<Favorite>('favoritos').valueChanges();
   }
   getFavotites(){
     console.log("favorites", this.favorites);
     
     return this.favorites;
   }
}
