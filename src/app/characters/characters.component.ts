import { Component, OnInit } from '@angular/core';
import { CharactersApiService } from './character/shared/characters-api.service';
import { Observable } from 'rxjs';
import { Characters } from "../models/characters.model";
import { FormControl, FormGroup, Form, Validators } from '@angular/forms';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  
  allCharacters : Observable<Characters>;
  showSpiner : boolean = true;
  succefull: boolean = false;

  searchForm = new FormGroup(
    {
      search: new FormControl('',[Validators.required,Validators.minLength(4)]), 
    }
  );
   
  

  constructor(private  characterSvc: CharactersApiService) {}

  ngOnInit() {
    this.getCharacters();
  
  }

  getCharacters(){
    this.allCharacters = this.characterSvc.getByName();
    this.allCharacters.subscribe(()=>this.showSpiner=false);
  }
  searchHero(){
    if(this.searchForm.valid){
      console.log('a buscar: ',this.searchForm.value.search);
      this.showSpiner = true;
      this.allCharacters = 
        this.characterSvc.
        searchHero(this.searchForm.value.search);
      this.allCharacters.subscribe(()=>this.showSpiner=false);
      this.onResetForm();  
    }else{
      console.log("no pasé la validación");
      
    }
    
  }
  get search(){//para poder commnicarse con el html
    return this.searchForm.get('search');
  }
  onResetForm(){
    this.searchForm.reset();
  }
}
