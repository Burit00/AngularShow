import { Directive, Input, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFavIcon]'
})
export class FavIconDirective implements OnInit {

  @Input()
  public fav!: boolean;
  private svg:any;


  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.svg = renderer.createElement('button');
  }

  ngOnInit(): void {
    if(this.fav == true){
      this.svg.innerHTML = `<img src="assets/heartFill.svg">`;
    }else{
      this.svg.innerHTML = `<img src="assets/heartNoFill.svg">`;
    }
    this.renderer.appendChild(this.el.nativeElement, this.svg);
  }

}
