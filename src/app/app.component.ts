import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lot-client';

  user = {
    name: 'David',
    username: 'Dnsoes1',
    role: 'customer'
  };

  dropdownActive = false;
  constructor() {}


  toggleDropdown(){
    this.dropdownActive = !this.dropdownActive;
    console.log(this.dropdownActive);
  }

}
