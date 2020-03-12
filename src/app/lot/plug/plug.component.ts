import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plug',
  templateUrl: './plug.component.html',
  styleUrls: ['./plug.component.scss']
})
export class PlugComponent implements OnInit {

  brands = [''];
  index = 0;
  constructor() {}

  ngOnInit() {}
  
  swapIndex(selectedIndex) {
    this.index = selectedIndex;
  }
}
