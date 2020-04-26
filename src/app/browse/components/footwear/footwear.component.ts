import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {faSearch,} from '@fortawesome/free-solid-svg-icons'
import { SearchService } from '../../search.service';


@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.scss']
})
export class FootwearComponent implements OnInit {

  constructor(private search:SearchService) { }
  searchIcon = faSearch;

   footwearBrands = {
    athletic: [
      {
        selector: 'airJordan',
        name: 'Air Jordan'
      },
      {
        selector: 'nike',
        name: 'Nike'
      },
      {
        selector: 'adidas',
        name: 'Adidas'
      },
      {
        selector: 'puma',
        name: 'Puma'
      },
      {
        selector: 'reebok',
        name: 'Reebok'
      },
      {
        selector: 'underArmour',
        name: 'Under Armour'
      },
      {
        selector: 'newBalance',
        name: 'New Balance'
      },
    ],
    lux: [
      'Burberry',
      'Chanel',
      'Dior',
      'Louis Vuitton',
      'Off-white'
    ],
    casual: [
      'Vans',
      'Asics',
    ],
    highEndStreet: [
      'Bape',
      'Supreme',
    ]
  }
  
  resultSet: any[];

  ngOnInit() {
    this.submitSearch('');
  }

  toggle(event){
    console.log(event.source.value);
  }


  submitSearch(query: string){ 
    try {
      console.log(query);
      this.search.submitSearchQuerybyCategory({
        text: query,
        category: 'footwear'
      }).subscribe((dataset: any[]) => {
        this.resultSet = dataset;
        console.log(this.resultSet);
      });
    } catch (error) {
      throw error;
    }
  }
}
