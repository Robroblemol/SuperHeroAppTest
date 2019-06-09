import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DetailsModalComponent } from './details/details-modal/details-modal.component';
import Character from 'src/app/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent{
  @Input()character: Character;

  constructor(private dialog: MatDialog) { }
  
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
      
      //title: 'Angular For Beginners',
  };
 

    this.dialog.open(DetailsModalComponent, dialogConfig);
}
 
}
