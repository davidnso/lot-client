import { Component, HostListener, ElementRef } from '@angular/core';

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
  constructor( private eRef: ElementRef) {}


  toggleDropdown(){
    this.dropdownActive = !this.dropdownActive;
    console.log(this.dropdownActive);
  }

  @HostListener('document:click', ['$event'])
  clickout(event){
    if(!this.eRef.nativeElement.contains(event.target)){
      console.log('clicked outside')
    }
  }

  signOut(){
    this.user = null;
  }

}
