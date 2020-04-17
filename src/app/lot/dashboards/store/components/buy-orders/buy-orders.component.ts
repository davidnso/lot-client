import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { DataService } from 'src/app/data.service';
import { IUser } from 'src/app/shared/types';

@Component({
  selector: 'app-buy-orders',
  templateUrl: './buy-orders.component.html',
  styleUrls: ['./buy-orders.component.scss']
})
export class BuyOrdersComponent implements OnInit {

  buyOrders = []

  constructor(private router: Router, private auth: AuthService, private dataService: DataService) { }

  ngOnInit() {
    this.fetchBuyOrders();
  }

  navigateToDetails(){
    this.router.navigate(['buy-details']);
  }

  fetchBuyOrders(){
    try {
      const user:IUser = this.auth.currentUserValue;
      this.dataService.fetchBuyOrders({
        requester: user.username,
        query: {
          text: '',
          sortby: '1',
          limit: '20'
        }
      }).subscribe((response)=>{
        this.buyOrders = response as [];
        console.log(response)
      })
    } catch (error) {
      throw error;
    }
  }

}
