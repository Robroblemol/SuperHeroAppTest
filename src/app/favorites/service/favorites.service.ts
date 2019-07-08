import { Injectable } from '@angular/core';
import { AngularFirestore, 
         AngularFirestoreCollection,
         AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { Auth } from 'src/app/auth/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  favoritesCollection: AngularFirestoreCollection<Character>;
  favorites: Observable<Character[]> ;
  favoritesDoc: AngularFirestoreDocument<Character>;
  allFavorites: Character[];
  
  constructor(public afs: AngularFirestore, public auth: Auth) {
    
      this.favoritesCollection = 
        afs.collection<Character>(this.auth.getUid());

      this.favorites = this.favoritesCollection.snapshotChanges()
      .pipe(
          map(favorites =>{
            return favorites.map(
              a =>{
                const data = a.payload.doc.data() as Character;
                data.idfv = a.payload.doc.id;
                console.log("data",data);
                return data;
              }
            )
          })
      );

      this.favorites.subscribe(favorites=>{
        this.allFavorites=favorites;
      });

  }
   getIdFavorite(character:Character){

      return this.allFavorites.find(
          char => char.id === character.id
        ).idfv;

    }
   isFavorite(character:Character){ 

      return this.allFavorites.find( 
          char => char.id === character.id
        ) !== undefined ? true : false;

  }
   getFavotites(){ 

     return this.favorites;

  }
   saveFavoriteHero(character:Character){
    
      return new Promise<any>((reject) =>{
        this.afs
            .collection(this.auth.getUid())
            .add(character)
            .then(res => {console.log("saved");}, err => reject(err));
      }); 

   }
   deleteFavorite(character: Character){

     return this.afs.collection(this.auth.getUid())
      .doc(this.getIdFavorite(character)).delete();
      
   }
}
