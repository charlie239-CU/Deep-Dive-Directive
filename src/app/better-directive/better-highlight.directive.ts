import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input('appBetterHighlight') inputColor:string="transparent"
  @HostBinding('style.backgroundColor') backgroundColor:string="transparent"

  constructor(private elementRef:ElementRef,private render:Renderer2) { }

  ngOnInit(){
    this.render.setStyle(this.elementRef.nativeElement,"background-color","blue")
  }

  @HostListener('mouseenter') mouseenter(eveentData:Event){
    this.backgroundColor=this.inputColor
    //this.render.setStyle(this.elementRef.nativeElement,"background-color","blue")
  }
   @HostListener('mouseleave') mouseleave(eveentData:Event){
     this.backgroundColor="transparent"
    //this.render.setStyle(this.elementRef.nativeElement,"background-color","transparent")
  }
}
