import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-card',
  template: `
    <div class="bg-dark text-white p-3 mx-3">
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
    </div>
  `
})
export class CarouselCardComponent {
  @Input() title!: string;
  @Input() content!: string;
}
