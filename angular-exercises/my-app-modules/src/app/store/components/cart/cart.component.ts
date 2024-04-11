import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../constants/products';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  items!: Array<Product>;

  checkoutForm!: FormGroup;
  name!: FormControl;
  address!: FormControl;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items = this.cartService.items;

    this.name = new FormControl(null, Validators.required);
    this.address = new FormControl(null, Validators.required);

    this.checkoutForm = this.formBuilder.group({
      name: this.name,
      address: this.address
    });
  }

  ngOnInit(): void {
    this.checkStatusForm();    
  }

  checkStatusForm(): void {
    if (this.items.length == 0) {
      this.name.disable();
      this.address.disable();
    }
  }

  get total(): string {
    let total = '0';
    if (this.items.length > 0) {
      total = this.items?.map(item => item.price)?.reduce((sum, curr) => +sum + +curr).toString();
    }
    return total ? total : '0';
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
    this.checkStatusForm();
  }

}
