import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight!: string;
  @Input() defaultColor: string = '';
  @Input() fontSize: string = '';
  @Input() fontStyle: string = '';
  @Input() fontColor: string = '';

  defaultHighlight: string = 'yellow';

  constructor(private el: ElementRef) {
    // console.log(this.el.nativeElement);
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight ? this.appHighlight : this.defaultColor;
    this.el.nativeElement.style.color = this.fontColor ? this.fontColor : 'black';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }

}
