import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/types';
import { UserService } from 'src/app/shared/utils/user.service';
import {faShoppingCart, faFileAlt, faShippingFast} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  user: IUser;
  orders = null;
  fileIcon = faFileAlt;
  shoppingCartIcon = faShoppingCart;
  shippingIcon = faShippingFast;
  initials: string;
  constructor(private userService: UserService) {
   }

  ngOnInit() {
    this.fetchUserDetails();
  }

  private fetchUserDetails(){
    const user = this.userService.fetchUserDetails();
    let str = user.name;
    console.log(str)
    var matches = str.match(/\b(\w)/g);
    var initials = matches.join('');
    console.log(initials);
    this.initials = initials
    this.user = user;

  }


}
