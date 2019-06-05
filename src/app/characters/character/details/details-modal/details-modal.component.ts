import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";



@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.css']
})
export class DetailsModalComponent implements OnInit {
  
  name: string;
  biography: {};

  constructor(
    //private fb: FormBuilder,
    private dialogRef: MatDialogRef<DetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.name = data.name;
    this.biography=data.biography;
}


  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
