import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailPattern: any = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

  loginForm = new FormGroup(
    {
      email: new FormControl('',
        [
          Validators.required,
          Validators.pattern(this.emailPattern),
          Validators.minLength(5),
        ]
      ),
      password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(5),
        ]
        ),
    }
  );

  constructor(
    public authService:Auth,
    public router: Router,
  ) { }

  ngOnInit() {

  }
  signIn(){
    if(this.loginForm.valid){
      //console.log("login with",this.loginForm.value);
      this.authService.signIn(
        this.loginForm.value.email, 
        this.loginForm.value.password
      );
    }else{
      console.log("no pasé la validación");
    }
  }
  get email(){//para poder commnicarse con el html
    return this.loginForm.get('email');
  }
  get password(){//para poder commnicarse con el html
    return this.loginForm.get('password');
  }
  onResetForm(){
    this.loginForm.reset();
  }

}
