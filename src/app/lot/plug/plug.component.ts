import { Component, OnInit } from '@angular/core';
import {faCommentAlt} from '@fortawesome/free-solid-svg-icons'
import { DataService } from 'src/app/data.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IUser } from 'src/app/shared/types';

@Component({
  selector: 'app-plug',
  templateUrl: './plug.component.html',
  styleUrls: ['./plug.component.scss']
})
export class PlugComponent implements OnInit {

  brands = [''];

  buyOrders = [
    {
      "price": "100.00",
      "username": "dnsoes1",
      "indexItem": {
        "name": "Jordan 5 Laney"
      },
      "pending": 9,
    }
  ];
  commentIcon = faCommentAlt;
  index = 0;
  constructor(private dataService: DataService, private auth: AuthService) {}

  ngOnInit() {
    this.fetchBuyOrders();
  }
  
  swapIndex(selectedIndex) {
    this.index = selectedIndex;
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
