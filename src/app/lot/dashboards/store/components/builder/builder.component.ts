import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent implements OnInit {
  brands = [''];
  index = 0;
  listingForm = new FormGroup({
    itemName: new FormControl(''),
  });
  @Output() searchEvent = new EventEmitter();

  indexItems = [];
  constructor() {}

  ngOnInit() {
    this.listingForm
      .get('itemName')
      .valueChanges.subscribe((searchVal: string) => {
        if (searchVal.length > 4) {
          this.submitSearchQuery();
        }
      });
  }

  swapIndex(selectedIndex) {
    this.index = selectedIndex;
  }

  submitSearchQuery() {
    this.indexItems = [
      {
        "_id": "5e84efb3b6670131d42c5bf1",
        "name": "Nike Air Max 90 Reverse Duck Camo",
        "price": "$240",
        "description": "",
        "imageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Reverse-Duck-Camo-2020.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&trim=color&updated_at=1584067533&w=1000",
        "brand": "nike",
        "category": "footwear"
    },
    ];

    console.log(this.indexItems);
  }
  refresh() {
    this.indexItems = [
      {
        name: 'item 1',
      },
      {
        name: 'item 3',
      },
    ];

    console.log(this.indexItems);
  }
}
