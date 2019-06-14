import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public authService: Auth,
    public router: Router,
  ) { }

  ngOnInit() {
  }

}
