import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { UserService } from 'src/app/shared/utils/user.service';
import { IOutlet } from 'src/app/shared/types';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';import {faStoreAltSlash, faShippingFast} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  outlets: IOutlet[] = null;
  activeOutlet: IOutlet = null;
  storeIcon = faStoreAltSlash;
  shippingIcon = faShippingFast;

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auhust', 'September', 'October', 'November', 'December'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [120, 400, 200, 800, 1293, 2912, 1282, 900, 673, 499, 374, 281], label: 'Profit' }
  ];

  constructor(private dataService: DataService, private userService: UserService) { }

  ngOnInit() {
    this.fetchUserOutlets();
    console.log(this.activeOutlet)
  }

  private fetchUserOutlets(){
    try {
      var user = this.userService.fetchUserDetails();
    } catch (error) {
      throw error;
    }

    this.dataService.fetchUserOutlets({requester: '', owner: user.username}).subscribe((res:{outlets: IOutlet[]})=>{
        this.outlets = res.outlets;
        console.log(res)
        this.activeOutlet = res.outlets[0];
    });
  }

}
