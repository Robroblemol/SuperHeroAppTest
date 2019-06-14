import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public authService: Auth,
    public router: Router
    ){ }
  
  canActivate(){
    console.log(`is logged: ${this.authService.isLoggedIn}`);
    if(this.authService.isLoggedIn){
      
      return true;
    }else{
      this.router.navigate(['login'])
      return false;
    }
  }

  
}
