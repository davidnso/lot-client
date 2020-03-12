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


const routes: Routes = [
  {
    path: 'browse',
    component: BrowseComponent
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
    path: 'details',
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
    component: LotComponent
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
