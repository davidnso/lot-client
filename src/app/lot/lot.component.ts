import { Component, OnInit } from '@angular/core';
import {faStoreAlt,} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-lot',
  templateUrl: './lot.component.html',
  styleUrls: ['./lot.component.scss']
})
export class LotComponent implements OnInit {

  storeIcon = faStoreAlt;
  constructor() { }

  ngOnInit() {
  }

}