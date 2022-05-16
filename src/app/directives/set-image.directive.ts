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
    this.image.class = "leftPhoto";
    this.image.style = "width: 90%;border-radius: 20px; box-shadow: 0px 0px 10px black;";
    this.renderer.appendChild(this.el.nativeElement, this.image);
   }

}
