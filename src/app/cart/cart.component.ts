import { Component, OnInit } from "@angular/core";
import { CartService } from "./cart.service";
import { ICartItem } from "../shared/types";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  trashIcon = faTrash;
  editI = faEdit;
  cart: ICartItem[];
  fullPrice = 0;
  constructor(private carts: CartService) {}

  ngOnInit() {
    this.cart = this.carts.fetchCart();
    this.calculateSubtotal();
    console.log(this.cart);
  }

  removeItem(index: number) {
    this.carts.removeItem(index);
    window.location.reload();
  }

  calculateSubtotal() {
    if (this.cart) {
      this.cart.forEach((item) => {
        if (item.price.startsWith("$")) {
          let price = item.price.substring(1);
          this.fullPrice += +price;
        } else {
          this.fullPrice += +item.price;
        }
      });
    } else {
      this.fullPrice = 0;
    }
  }
}
