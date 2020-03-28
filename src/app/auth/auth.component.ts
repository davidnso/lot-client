import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/dialog/dialog.component';

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
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    streetAddress: new FormControl(''),
    apartment: new FormControl(''),
    city: new FormControl(''),
    zipCode: new FormControl(''),
    state: new FormControl(''),
    phoneNumber: new FormControl('')
    // Create remaining form controls....
  });
  selectedIndex = '0';
  
  registrationComplete = false;

  continueClicked = false;

  constructor(
    private router: Router,
    private auth: AuthService,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // tslint:disable-next-line: no-string-literal
      const isRegistering = params['register']=='true' ? params['register'] : false;
      isRegistering ? this.selectedIndex = '1' : this.selectedIndex = '0';

    });
  }

  continue() {
    this.continueClicked = true;
  }

  authenticateUser() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    // if(username !== undefined && username !== null){
    const user = this.auth
      .login({ username, password })
      .subscribe((response: any) => {
        console.log(response);
        const parsedUser = JSON.stringify(response.user);
        localStorage.setItem('user', parsedUser);
      });
    console.log(user);
    // }
    if (true) {
      // localStorage.setItem('user', {

      // })
      this.route.queryParams.subscribe(params => {
        if (params['redirectTo']) {
          this.router.navigate([params['redirectTo']]);
        }else{
          this.router.navigate(['']);
        }
      });
    }
  }

  registerUser() {
    const registrationParams = {
      name: this.registerForm.value.name,
      username: this.registerForm.value.username as string,
      password: this.registerForm.value.password as string,
      email: this.registerForm.value.email as string,
      addresses: [
        {
          streetAddress: this.registerForm.value.streetAddress as string,
          streetAddress2: this.registerForm.value.apartment as string,
          city: this.registerForm.value.city as string,
          state: this.registerForm.value.state as string,
          zipCode: this.registerForm.value.zipCode as string,
          country: 'USA'
        }
      ],

      phoneNumber: this.registerForm.value.phoneNumber as string
    };

    this.auth.register(registrationParams).subscribe((response: any) => {
      console.log(response);
      const confirmationDialog = this.dialog.open(DialogComponent, {
        width: '620px',
        data: {
          name: response.user.name.split(' ')[0]
        }
      });
      const parsedUser = JSON.stringify(response.user);
      localStorage.setItem('user', parsedUser);

      this.dialog.afterAllClosed.subscribe(() => {
        this.router.navigate(['']);
      });
    });
  }
}
