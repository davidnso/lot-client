import { AppComponent } from 'src/app/app.component';
import { Component, HostListener, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-options',
  templateUrl: './account-options.component.html',
  styleUrls: ['./account-options.component.scss']
})
export class AccountOptionsComponent implements OnInit {

  dropdownActive = false;

  constructor(private eRef: ElementRef) { }

  ngOnInit() {
  }

  signOut() {
    localStorage.removeItem('user');
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.dropdownActive = false;
    }
  }

  @HostListener('window:scroll', ['event'])
  onScroll(event){
    this.dropdownActive = false;
  }
  toggleDropdown() {
    this.dropdownActive = !this.dropdownActive;
  }

}
