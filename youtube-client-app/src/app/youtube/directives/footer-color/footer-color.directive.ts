import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appFooterColor]',
})
export class FooterColorDirective implements OnInit {
  @Input() appFooterColor = '';

  constructor(private el: ElementRef) {
  }
  
  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.appFooterColor;
  }
  
}
