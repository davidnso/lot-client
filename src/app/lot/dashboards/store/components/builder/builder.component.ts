import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { DataService } from 'src/app/data.service';
import { IndexItem } from 'src/app/shared/types';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ 'margin-left': 50, opacity: 0 }),
            animate('1s ease-out',
                    style({ 'margin-left': 10, opacity: 1 }))
          ]
        ),
        // transition(
        //   ':leave',
        //   [
        //     style({ height: 300, opacity: 1 }),
        //     animate('1s ease-in',
        //             style({ height: 0, opacity: 0 }))
        //   ]
        // )
      ]
    ),
    trigger(
      'fadeInOut',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('1s ease-out',
                    style({  opacity: 1 }))
          ]
        ),
        // transition(
        //   ':leave',
        //   [
        //     style({ opacity: 1 }),
        //     animate('1s ease-in',
        //             style({  opacity: 0 }))
        //   ]
        // )
      ]
    )
  ]
})
export class BuilderComponent implements OnInit {
  brands = [''];
  index = 0;
  listingForm = new FormGroup({
    itemName: new FormControl(''),
    condition: new FormControl(''),
    gender: new FormControl(''),
    originalPackaging: new FormControl(''),
  });

  highlightedItem: IndexItem;
  selectedSizes: {size: string, quantity?: string}[] = [];
  @Output() searchEvent = new EventEmitter();

  indexItems = [];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.listingForm
      .get('itemName')
      .valueChanges.subscribe((searchVal: string) => {
        if (searchVal.length >= 4) {
          this.submitSearchQuery(searchVal);
        }
      });
  }

  swapIndex(selectedIndex) {
    this.index = selectedIndex;
  }

  submitSearchQuery(query: string) {
    this.dataService.searchItemIndex({text: query}).subscribe((items: any) => {
      this.indexItems = items;
      console.log(this.indexItems);

    });

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

  setHighlightedItem(item: IndexItem) {
    try {
      this.highlightedItem = item;
    } catch (error) {
      throw error;
    }
  }

  updateHighlightedSizes(size: string) {
    const sizeFound = this.selectedSizes.findIndex(item => item.size === size);
    if (sizeFound === -1) {
      this.selectedSizes.push({size});
    } else {
      this.selectedSizes.splice(sizeFound, 1);
    }
  }

  updateQuantity(value, index) {
    try {
      this.selectedSizes[index].quantity = value;
      console.log(this.selectedSizes);
      const fullListingData = { 
        item: this.highlightedItem,
        formData : this.listingForm,
        sizes: this.selectedSizes,
      }
      console.log(fullListingData)
    } catch (error) {
      throw error;
    }
  }
}
