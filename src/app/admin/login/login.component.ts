import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public authService:Auth,
    public router: Router,
  ) { }

  ngOnInit() {

  }
  goRegister(){
    this.router.navigate['register'];
    return true;
  }

}
