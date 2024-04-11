import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-list',
  template: `
    <div class="bg-dark text-white p-3 mx-3">
      <h3>{{ title }}</h3>
      <ul>
        @for (item of items; track $index) {
          <li>{{ item }}</li>
        }
      </ul>
    </div>
  `
})
export class CarouselListComponent {
  @Input() title!: string;
  @Input() items!: Array<string>;

}
