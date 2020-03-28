import { Component, HostListener, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lot-client';

  user = null;
  
  constructor(private eRef: ElementRef) {}
  ngOnInit(): void {
    this.user =
      localStorage.getItem('user') !== null
        ? localStorage.getItem('user')
        : null;
  }




}
