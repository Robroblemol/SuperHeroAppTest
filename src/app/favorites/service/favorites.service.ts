import { Injectable } from '@angular/core';
import { AngularFirestore, 
         AngularFirestoreCollection,
         AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Character } from 'src/app/models/character.model';
import { Auth } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favoritesCollection: AngularFirestoreCollection<Character>;
  favorites: Observable<Character[]> ;
  favotitesDoc: AngularFirestoreDocument<Character>;
  
  constructor(public afs: AngularFirestore, public auth: Auth) {
    this.favorites = afs.collection<Character>(this.auth.getEmail()).valueChanges();
   }
   getFavotites(){
     console.log("favorites", this.favorites);
     
     return this.favorites;
   }
   saveFavoriteHero(hero:Character){
    
    return new Promise<any>((resolve, reject) =>{
      this.afs
          .collection(this.auth.getEmail())
          .add(hero)
          .then(res => {console.log("saved");}, err => reject(err));
  });
    
    
   }
}
