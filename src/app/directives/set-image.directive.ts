import { Directive, Renderer2, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetImage]'
})
export class SetImageDirective implements OnInit {
  @Input()
  public link:any;
  private image; //<img>

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.image = this.renderer.createElement('img');
   }

   ngOnInit(): void {
    this.image.src = this.link;
    this.renderer.appendChild(this.el.nativeElement, this.image);
   }

}
