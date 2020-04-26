import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { LandingComponent } from './landing/landing.component';
import { AuthComponent } from './auth/auth.component';
import { CartComponent } from './cart/cart.component';
import { PlugComponent } from './lot/plug/plug.component';
import { DetailsComponent } from './details/details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CreateStoreComponent } from './create-store/create-store.component';
import { LotComponent } from './lot/lot.component';
import { BuilderComponent } from './lot/dashboards/store/components/builder/builder.component';
import { StoreComponent } from './lot/dashboards/store/store.component';
import { CustomerComponent } from './lot/dashboards/customer/customer.component';
import { BuyOrdersComponent } from './lot/dashboards/store/components/buy-orders/buy-orders.component';
import { BuyOrderDetailsComponent } from './lot/dashboards/store/components/buy-orders/components/buy-order-details/buy-order-details.component';
import { FootwearComponent } from './browse/components/footwear/footwear.component';
import { ApparelComponent } from './browse/components/apparel/apparel.component';
import { AccessoriesComponent } from './browse/components/accessories/accessories.component';


const routes: Routes = [
  {
    path: 'browse',
    component: BrowseComponent,
  },
  {
    path: 'footwear',
    component: FootwearComponent
  },
  {
    path: 'apparel',
    component: ApparelComponent,
  },
  {
    path: 'accessories',
    component: AccessoriesComponent
  },
  {
    path: '',
    component: LandingComponent
  },
  {path: 'auth',
  component: AuthComponent},
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'plug',
    component: PlugComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'create-store',
    component: CreateStoreComponent,
  },
  {
    path: 'dashboard',
    component: LotComponent,
    children: [
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      },
      {
        path: 'store',
        component: StoreComponent,
      },
      {
        path: 'user',
        component: CustomerComponent
      },
      {
        path: 'buy-orders',
        component: BuyOrdersComponent,
        children: [
          {
            path: 'details',
            component: BuyOrderDetailsComponent
          },
        ]
      },
      {
        path: 'buy-details',
        component: BuyOrderDetailsComponent
      }
    ]
  },
  {
    path: 'create-listing',
    component: BuilderComponent
  },
  {
    path: 'plug',
    component: PlugComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
