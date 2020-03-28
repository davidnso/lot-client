import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { LoginDialogComponent } from '../shared/login-dialog/login-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.scss']
})
export class CreateStoreComponent implements OnInit {
  createStoreForm = new FormGroup({
    name: new FormControl(''),
    streetAddress: new FormControl(''),
    apartment: new FormControl(''),
    city: new FormControl(''),
    zipCode: new FormControl(''),
    state: new FormControl(''),
    phoneNumber: new FormControl('')
  });

  userIsLoggedIn = false;
  constructor(
    private dataService: DataService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.checkLoginStatus();
  }

  registerNewStore() {
    const storeRegistrationParams = {
      name: this.createStoreForm.value.name,
      bannerImgUrl: 'https://',
      addresses: [
        {
          streetAddress: this.createStoreForm.value.streetAddress as string,
          streetAddress2: this.createStoreForm.value.apartment as string,
          city: this.createStoreForm.value.city as string,
          state: this.createStoreForm.value.state as string,
          zipCode: this.createStoreForm.value.zipCode as string,
          country: 'USA'
        }
      ],
      phoneNumber: this.createStoreForm.value.phoneNumber as string,
      tier: 'first'
    };

  

    this.dataService
      .createStore({ requester: JSON.parse(localStorage.getItem('user')).username, storeRegistrationParams })
      .subscribe((res: any) => {
        console.log(res)
        this.dialog.open(ConfirmationComponent, {
          width: '600px',
          data: {
            owner: JSON.parse(localStorage.getItem('user')).name || 'name',
            name: res.outlet.name,
            addresses: res.outlet.addresses[0]
          }
        });
    
        this.dialog.afterAllClosed.subscribe(() => {
          this.router.navigate(['']);
        });

      });
  }

  private checkLoginStatus() {
    try {
      const isLoggedIn = localStorage.getItem('user');
      if (isLoggedIn) {
        this.userIsLoggedIn = true;
      } else {
        this.dialog.open(LoginDialogComponent, { disableClose: true });
      }
    } catch (error) {
      throw error;
      // TODO: Create component that shows errors...
    }
  }
}
