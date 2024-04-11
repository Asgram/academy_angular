import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { StoreComponent } from './components/store/store.component';

const routesStore: Routes = [
  { path: '', component: StoreComponent, 
    children: [
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesStore)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
