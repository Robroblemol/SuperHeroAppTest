import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore,
         AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { User } from './shared/services/user';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  userData:any;
  constructor(
      public afs: AngularFirestore,   // Inject Firestore service
      public afAuth: AngularFireAuth, // Inject Firebase auth service
      public router: Router,  
      public ngZone: NgZone // NgZone service to remove outside scope warning) 
  ){
      /* Saving user data in localstorage when 
      logged in and setting up null when logged out */
  this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
      })
    }
    SetUserData(user) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
      const userData: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified,
      }
      return userRef.set(userData, {
       merge: true
      })
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.emailVerified) ? true : false;
        }
    async signIn(email, password) {
      //console.log(`email: ${email} pass: ${password}`);
      
      try {
        const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.ngZone.run(() => {
          this.router.navigate(['characters']);
        });
        this.SetUserData(result.user);
      }
      catch (error) {
        window.alert(error.message);
      }
      }
      // Sign up with email/password
  async SignUp(email, password) {
  try {
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    /* Call the SendVerificaitonMail() function when new user sign
    up and returns promise */
    this.SendVerificationMail();
    this.SetUserData(result.user);
  }
  catch (error) {
    window.alert(error.message);
  }
  }
  async SendVerificationMail() {
    await this.afAuth.auth.currentUser.sendEmailVerification();
    this.router.navigate(['login']);
    }
    logOut(){
      console.log("logout!");
      
      return this.afAuth.auth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['login']);
        })
    }
    
  }
