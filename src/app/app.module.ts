import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
   MatToolbarModule, 
   MatButtonModule, 
   MatSidenavModule, 
   MatIconModule, 
   MatListModule,
   MatCardModule,
   MatFormFieldModule,
   MatDialogModule,
   MatInputModule,
   MatTabsModule,
   MatProgressSpinnerModule,
   } from '@angular/material';

   import { AngularFireAuthModule } from '@angular/fire/auth';
   import { AngularFireModule } from '@angular/fire';   
   import { AngularFirestore } from '@angular/fire/firestore';
   import { AngularFirestoreModule } from '@angular/fire/firestore';
   import { FavoritesService } from './favorites/service/favorites.service'
   import { ReactiveFormsModule } from '@angular/forms'
   
   import { CharacterComponent } from './characters/character/character.component';
   import { CharactersComponent } from './characters/characters.component';
   import { DetailsModalComponent } from './characters/character/details/details-modal/details-modal.component'
   import { RegisterComponent } from './admin/register/register.component';
   import { HttpClientModule } from '@angular/common/http'
   import { FlexLayoutModule } from '@angular/flex-layout';
   import { LoginComponent } from './admin/login/login.component';
   import { FavoritesComponent } from './favorites/favorites/favorites.component';
   import { firebaseConfig } from './auth/configFirebase';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharacterComponent,
    CharactersComponent,
    DetailsModalComponent,
    LoginComponent,
    RegisterComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig.firebaseConfig,'superHeeroApp'),
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFirestoreModule,

  ],
  providers: [
    AngularFirestore,
    FavoritesService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [DetailsModalComponent],
})
export class AppModule { }
