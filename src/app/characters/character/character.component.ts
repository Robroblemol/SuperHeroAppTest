import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DetailsModalComponent } from './details/details-modal/details-modal.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent{
  @Input()character:any;

  constructor(private dialog: MatDialog) { }
  
  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    

    this.dialog.open(DetailsModalComponent, dialogConfig);
}
 
}
