import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    streetAddress: new FormControl(''),
    apartment: new FormControl('')
    // Create remaining form controls....
  });

  registrationComplete = false;

  continueClicked: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {}

  continue() {
    this.continueClicked = true;
  }

  authenticateUser() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    // if(username !== undefined && username !== null){

    // }
    if (true) {
      // localStorage.setItem('user', {

      // })
      this.router.navigate(['']);
    }
  }

  registerUser(){
    
  }
}
