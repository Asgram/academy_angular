import { Component } from '@angular/core';

import { Product, products } from '../../constants/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Array<Product> = [...products];
}
