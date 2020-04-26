import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
import { BehaviorSubject } from "rxjs";
import { CartService } from '../cart/cart.service';

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"],
})
export class DetailsComponent implements OnInit {
  itemDetails:any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private carts: CartService
  ) {}
  private itemId;
  highlightedColors;
  ngOnInit() {
    const itemId = this.route.snapshot.paramMap.get("id");

    this.fetchItemDetails(itemId);
    console.log(this.itemDetails);
  }

  fetchItemDetails(id) {
    this.dataService.fetchItemDetails(id).subscribe((details) => {
      console.log(details);
      this.itemDetails = details;
    });
  }
  highlightSize(size: string) {
    try {
      const filteredStock = (this.itemDetails[0].details.stock as []).filter(
        (item: any) => item.size === size
      );

      const colors = filteredStock.map((stock: any) => {
        return stock.color;
      });
      this.highlightedColors = colors;
    } catch (error) {
      throw error;
    }
  }

  addtoCart(){
    this.carts.addItemtoCart(
      {cartItem: {
        name: this.itemDetails[0].name,
        image: this.itemDetails[0].indexItem.imageUrl,
        size: '10',
        itemId: this.itemDetails[0]._id,
        price: this.itemDetails[0].price,
        quantity: '1',
        color: 'black',
        link: window.location.href,
      }}
    )
    console.log('adding item')
  }
}
