import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThumbnailItemComponent } from './shared/thumbnail-item/thumbnail-item.component';
import { ThumbnailItemSummaryComponent } from './shared/thumbnail-item-summary/thumbnail-item-summary.component';
import { DashboardListItemSmComponent } from './shared/dashboard-list-item-sm/dashboard-list-item-sm.component';
import { DashboardListItemComponent } from './shared/dashboard-list-item/dashboard-list-item.component';
import { AuthComponent } from './auth/auth.component';
import { LandingComponent } from './landing/landing.component';
import { StoreBuilderComponent } from './auth/components/store-builder/store-builder.component';
import { BrowseComponent } from './browse/browse.component';
import { LikeComponent } from './shared/suggestions/like/like.component';
import { FeedbackComponent } from './shared/forms/feedback/feedback.component';
import { RequestModalComponent } from './shared/forms/request-modal/request-modal.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormComponent } from './checkout/components/form/form.component';
import { OrderSummaryComponent } from './checkout/components/order-summary/order-summary.component';
import { PlugComponent } from './LOT/plug/plug.component';

@NgModule({
  declarations: [
    AppComponent,
    ThumbnailItemComponent,
    ThumbnailItemSummaryComponent,
    DashboardListItemSmComponent,
    DashboardListItemComponent,
    AuthComponent,
    LandingComponent,
    StoreBuilderComponent,
    BrowseComponent,
    LikeComponent,
    FeedbackComponent,
    RequestModalComponent,
    DetailsComponent,
    CartComponent,
    CheckoutComponent,
    FormComponent,
    OrderSummaryComponent,
    PlugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
