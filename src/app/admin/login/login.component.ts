import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  createFormGroup (){
    return new FormGroup(
      {
        email: new FormControl(''),
        password: new FormControl(''),
      }
    )
  }
  loginForm: FormGroup;
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
