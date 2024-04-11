import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreRoutingModule } from './store-routing.module';
import { MaterialModule } from '../core/material/material.module';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { StoreComponent } from './components/store/store.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    StoreComponent,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class StoreModule { }
