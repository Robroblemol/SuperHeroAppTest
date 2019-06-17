import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup(
    {
      email: new FormControl(''),
        password: new FormControl(''),
    }
  );
  
  constructor(
    public authService: Auth,
    public router: Router,
  ) { }

  ngOnInit() {
  }

}
