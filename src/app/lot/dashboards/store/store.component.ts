import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/data.service";
import { UserService } from "src/app/shared/utils/user.service";
import { IOutlet } from "src/app/shared/types";
import { ChartDataSets, ChartOptions, ChartType } from "chart.js";
import { Color, Label } from "ng2-charts";
import {
  faStoreAltSlash,
  faShippingFast,
  faStoreAlt,
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"],
})
export class StoreComponent implements OnInit {
  outlets: IOutlet[] = null;
  activeOutlet: IOutlet = null;
  listingTotal;
  storeIcon = faStoreAltSlash;
  shippingIcon = faShippingFast;
  storeIconMain = faStoreAlt;
  activeListings: any[];

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Auhust",
    "September",
    "October",
    "November",
    "December",
  ];
  barChartType: ChartType = "bar";
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      data: [120, 400, 200, 800, 1293, 2912, 1282, 900, 673, 499, 374, 281],
      label: "Profit",
    },
  ];

  constructor(
    private dataService: DataService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.fetchUserOutlets();
    this.fetchUserOutletAndListings();
  }

  private fetchUserOutlets() {
    try {
      let user = this.userService.fetchUserDetails();
      this.dataService
      .fetchUserOutlets({ requester: "", owner: user.username })
      .subscribe((res: { outlets: IOutlet[] }) => {
        this.outlets = res.outlets;
        console.log(res);
        this.activeOutlet = res.outlets[0];

        // TODO: FIGURE OUT A CLEANER WAY TO DO THIS WITHOUT CHAINING
        this.dataService
        .fetchUserOutletandListings({
          owner: user.username,
          requester: user.username,
          outletId: this.outlets[0]._id,
        })
        .subscribe((res: { outlet: IOutlet; listings: any[] }) => {
          // this.activeOutlet = res.outlet;
          this.activeListings = res.listings;
          this.calculateListingStats(res.listings);
        });
      });

      
    } catch (error) {
      throw error;
    }

    
  }

  private fetchUserOutletAndListings() {
    const user = this.userService.fetchUserDetails();

    try {
      this.dataService
        .fetchUserOutletandListings({
          owner: user.username,
          requester: user.username,
          outletId: this.outlets[0]._id,
        })
        .subscribe((res: { outlet: IOutlet; listings: any[] }) => {
          // this.activeOutlet = res.outlet;
          this.activeListings = res.listings;
          console.log(res);

        });
    } catch (error) {}
  }

  calculateListingStats(listings:any[]){ 
    let active = 0;
    let sold = 0;
    let unsold = 0;
    let total = 0;
     listings.forEach(listing=>{
     total += +listing.price.substring(1);
    })
    this.listingTotal = total;
  }
}
