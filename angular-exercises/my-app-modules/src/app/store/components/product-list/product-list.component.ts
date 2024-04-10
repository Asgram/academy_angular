import { Component } from '@angular/core';

import { Product, products } from '../../constants/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Array<Product> = [...products];

  propertyPadre: string = "Lorem ipsum";

  share(productName: string): void {
    window.alert('The product ' + productName + ' has been shared!');
  }

  onNotify(productName: string): void {
    window.alert('You will be notified when the product ' + productName + ' goes on sale');
  }
}
