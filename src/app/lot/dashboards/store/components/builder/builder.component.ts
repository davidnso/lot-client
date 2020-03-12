import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit {
  brands = [''];
  index = 0;
  constructor() {}

  ngOnInit() {}
  
  swapIndex(selectedIndex) {
    this.index = selectedIndex;
  }
}
