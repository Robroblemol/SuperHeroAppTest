import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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

   import { CharacterComponent } from './characters/character/character.component';
   import { CharactersComponent } from './characters/characters.component';
   import { DetailsModalComponent } from './characters/character/details/details-modal/details-modal.component'
   import { HttpClientModule } from '@angular/common/http'
   import { FlexLayoutModule } from '@angular/flex-layout';
   import { LoginComponent } from './admin/login/login.component';
   import { firebaseConfig } from './auth/configFirebase';
   import { AngularFireAuthModule } from '@angular/fire/auth';
   import { AngularFireModule } from '@angular/fire';   
   import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharacterComponent,
    CharactersComponent,
    DetailsModalComponent,
    LoginComponent,
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
    AngularFireModule.initializeApp(firebaseConfig.firebaseConfig),
    AngularFireAuthModule,
  

  ],
  providers: [
    AngularFirestore,
  ],
  bootstrap: [AppComponent],
  entryComponents: [DetailsModalComponent],
})
export class AppModule { }
