import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {
  constructor(private elementRef : ElementRef) { 
    this.elementRef.nativeElement.style.backgroundColor='orange'  
    this.elementRef.nativeElement.style.fontWeight='bold' 

  }

}
