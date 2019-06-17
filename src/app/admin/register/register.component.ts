import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  emailPattern: any = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  registerForm = new FormGroup(
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
    public authService: Auth,
    public router: Router,
  ) { }

  ngOnInit() {
  }
  signUp(){
    if(this.registerForm.valid){
      console.log("register with",this.registerForm.value);
      this.authService.SignUp(
        this.registerForm.value.email, 
        this.registerForm.value.password
      );
    }else{
      console.log("no pasé la validación");
    }
  }
  get email(){//para poder commnicarse con el html
    return this.registerForm.get('email');
  }
  get password(){//para poder commnicarse con el html
    return this.registerForm.get('password');
  }
  onResetForm(){
    this.registerForm.reset();
  }


}
