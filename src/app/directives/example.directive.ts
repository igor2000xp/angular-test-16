// import { Directive } from '@angular/core';

// @Directive({
//   selector: '[appExample]'
// })
// export class ExampleDirective {

//   constructor() { }

// }

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class ExampleDirective {
  @Input() highlightColor: string = 'yellow'; // Default color

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

