import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DetailsModalComponent } from './details/details-modal/details-modal.component';
import { FavoritesService } from 'src/app/favorites/service/favorites.service';
import { Character } from 'src/app/models/character.model';



@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit{
  @Input()character: Character;


  constructor(private favoritesSvc : FavoritesService,
    private dialog: MatDialog) { }

  ngOnInit(){
    // this.isFavorite();
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      name: this.character.name,
      biography: this.character.biography,
      appearance:this.character.appearance,
      work: this.character.work,
      connections: this.character.connections,
      
    };

    this.dialog.open(DetailsModalComponent, dialogConfig);
  }
  isFavorite(){
    // console.log("checked: ",this.favoritesSvc.isFavorite(this.character));
    return this.favoritesSvc.isFavorite(this.character);
    
  }
  saveCharacter(){
    console.log("try save");
    this.favoritesSvc.saveFavoriteHero(this.character);
  }
}
