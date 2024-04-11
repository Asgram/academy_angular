import { Component } from '@angular/core';
import { CarouselCardComponent } from '../carousel-card/carousel-card.component';
import { CarouselListComponent } from '../carousel-list/carousel-list.component';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  listaElementi: Array<any> = [
    {
      component: CarouselCardComponent,
      input: {
        title: '1 - Lorem',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, totam.'
      }
    },
    {
      component: CarouselCardComponent,
      input: {
        title: '2 - Dolet',
        content: 'Voluptatum expedita dicta architecto iure unde alias maxime a illo dolores!'
      }
    },
    {
      component: CarouselCardComponent,
      input: {
        title: '3 - Amo',
        content: 'Recusandae excepturi aperiam cumque nulla molestias ipsam quasi error, voluptate sunt voluptas quos autem aspernatur optio?'
      }
    },
    {
      component: CarouselListComponent,
      input: {
        title: '4 - Volet',
        items: ['Lorem', 'Ipsum', 'Sit', 'Dolet']
      }
    }
  ];

  currentIndex: number = 0;

  get currentElement() {
    return this.listaElementi[this.currentIndex];
  }

  onNext(): void {
    this.currentIndex++;
    if (this.currentIndex == this.listaElementi.length)
      this.currentIndex = 0;
  }
  onPrev(): void {
    this.currentIndex--;
    if (this.currentIndex < 0)
      this.currentIndex = this.listaElementi.length - 1;
  }
}
