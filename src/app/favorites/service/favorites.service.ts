import { Injectable } from '@angular/core';
import { AngularFirestore, 
         AngularFirestoreCollection,
         AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import Character from 'src/app/models/character.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favoritesCollection: AngularFirestoreCollection<Character>;
  favorites: Observable<Character[]> ;
  favotitesDoc: AngularFirestoreDocument<Character>;
  
  constructor(public afs: AngularFirestore) {
    this.favorites = afs.collection<Character>('favoritos').valueChanges();
   }
   getFavotites(){
     console.log("favorites", this.favorites);
     
     return this.favorites;
   }
   saveFavoriteHero(hero:Character){
    
    return new Promise<any>((resolve, reject) =>{
      this.afs
          .collection('favoritos')
          .add(hero)
          .then(res => {console.log("saved");}, err => reject(err));
  });
    
    
   }
}
