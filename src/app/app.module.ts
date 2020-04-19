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
import { PlugComponent } from './lot/plug/plug.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { CreateStoreComponent } from './create-store/create-store.component';
import { LotComponent } from './lot/lot.component';
import { StoreComponent } from './lot/dashboards/store/store.component';
import { BuilderComponent } from './lot/dashboards/store/components/builder/builder.component';
import { LOTModule } from './lot/lot.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoaderService } from './services/loader.service';


import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import { CategoryFilterComponent } from './shared/category-filter/category-filter.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FooterComponent } from './shared/footer/footer.component';
import { BuyOrdersComponent } from './lot/dashboards/store/components/buy-orders/buy-orders.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list'; 
import {MatMenuModule} from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


// tslint:disable-next-line: max-line-length
import { BuyOrderDetailsComponent } from './lot/dashboards/store/components/buy-orders/components/buy-order-details/buy-order-details.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmationComponent } from './create-store/components/confirmation/confirmation.component';
import { LoginDialogComponent } from './shared/login-dialog/login-dialog.component';
import { AccountOptionsComponent } from './shared/menus/account-options/account-options.component';
import { CustomerComponent } from './lot/dashboards/customer/customer.component';
import { ListingsComponent } from './lot/dashboards/store/components/listings/listings.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { LoaderInterceptor } from './interceptors/loader.interceptor';


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
    BuilderComponent,
    StoreComponent,
    PlugComponent,
    BrowseComponent,
    LikeComponent,
    FeedbackComponent,
    RequestModalComponent,
    DetailsComponent,
    CartComponent,
    CheckoutComponent,
    FormComponent,
    OrderSummaryComponent,
    CreateStoreComponent,
    LotComponent,
    ListingsComponent,

    CustomerComponent,

    CategoryFilterComponent,

    FooterComponent,

    BuyOrdersComponent,

    BuyOrderDetailsComponent,

    DialogComponent,

    ConfirmationComponent,
    
    LoginDialogComponent,
    
    AccountOptionsComponent,
    
    LoaderComponent
  ],
  entryComponents: [
    DialogComponent,
    ConfirmationComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatRadioModule,
    MatTabsModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDialogModule,
    HttpClientModule,
    FontAwesomeModule,
    ChartsModule,
    MatListModule,
    MatSidenavModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  providers: [LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
