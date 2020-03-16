import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LOTRoutingModule } from './lot-routing.module';
import { PlugComponent } from './plug/plug.component';
import { StoreComponent } from './dashboards/store/store.component';
import { CustomerComponent } from './dashboards/customer/customer.component';
import { StatsComponent } from './dashboards/store/components/stats/stats.component';
import { OrdersComponent } from './dashboards/store/components/orders/orders.component';
import { ListingsComponent } from './dashboards/store/components/listings/listings.component';
import { BuilderComponent } from './dashboards/store/components/builder/builder.component';
import { BuyOrderDetailsComponent } from './dashboards/store/components/buy-orders/components/buy-order-details/buy-order-details.component';


@NgModule({
  declarations: [PlugComponent, StoreComponent, CustomerComponent, StatsComponent, OrdersComponent, ListingsComponent,BuilderComponent, BuyOrderDetailsComponent],
  imports: [
    CommonModule,
    LOTRoutingModule
  ]
})
export class LOTModule { }
