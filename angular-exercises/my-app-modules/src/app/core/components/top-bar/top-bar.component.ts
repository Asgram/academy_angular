import { Component } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  showCheckoutBtn: boolean = true;

  toggleCheckoutBtn(): void {
    // if (this.showCheckoutBtn) {
    //   this.showCheckoutBtn = false;
    // } else {
    //   this.showCheckoutBtn = true;
    // }

    // this.showCheckoutBtn = this.showCheckoutBtn ? false : true;

    this.showCheckoutBtn = !this.showCheckoutBtn;
  }

}
