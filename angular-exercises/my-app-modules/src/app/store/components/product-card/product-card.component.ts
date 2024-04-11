import { Component, Input } from '@angular/core';
import { Product } from '../../constants/products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Input() even!: boolean;

  share(productName: string): void {
    window.alert('The product ' + productName + ' has been shared!');
  }

  onNotify(productName: string): void {
    window.alert('You will be notified when the product ' + productName + ' goes on sale');
  }
}
