import {
  Directive,
  ElementRef,
  Renderer,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appAppDemo]',
})
export class AppDemoDirective {
  @HostBinding('style.border') border: string;
  changeColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
  }

  @HostListener('click') onclick() {
    this.changeColor('red');
    this.border = '20px solid green';
  }

  constructor(private el: ElementRef, private renderer: Renderer) {
    debugger;
    // this.changeColor('red');
  }
}
