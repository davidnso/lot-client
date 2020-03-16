import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-orders',
  templateUrl: './buy-orders.component.html',
  styleUrls: ['./buy-orders.component.scss']
})
export class BuyOrdersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToDetails(){
    this.router.navigate(['buy-details']);
  }

}
