import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[hover-class]'
})
export class HoverClassDirective {

  @Input('hover-class') hoverClass: string = '';

  constructor(public elementRef: ElementRef<HTMLElement>) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.hoverClass) {
      this.elementRef.nativeElement.classList.add(this.hoverClass);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.hoverClass) {
      this.elementRef.nativeElement.classList.remove(this.hoverClass);
    }
  }
}