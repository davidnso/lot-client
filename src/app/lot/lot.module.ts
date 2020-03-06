import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LOTRoutingModule } from './lot-routing.module';
import { PlugComponent } from './plug/plug.component';
import { StoreComponent } from './dashboards/store/store.component';
import { CustomerComponent } from './dashboards/customer/customer.component';
import { StatsComponent } from './dashboards/store/stats/stats.component';
import { OrdersComponent } from './dashboards/store/orders/orders.component';
import { ListingsComponent } from './dashboards/store/listings/listings.component';
import { BuilderComponent } from './dashboards/store/components/builder/builder.component';
import { BuyOrdersComponent } from './dashboards/store/components/buy-orders/buy-orders.component';
import { CustomerOrderComponent } from './dashboards/store/components/buy-orders/customer-order/customer-order.component';


@NgModule({
  declarations: [PlugComponent, StoreComponent, CustomerComponent, StatsComponent, OrdersComponent, ListingsComponent, BuilderComponent, BuyOrdersComponent, CustomerOrderComponent],
  imports: [
    CommonModule,
    LOTRoutingModule
  ]
})
export class LOTModule { }
