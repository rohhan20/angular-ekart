import { Directive, Host, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class AppHoverDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') backgroundColor: string = '#28282B';
  @HostBinding("style.color") color: string = 'white';
  @HostBinding("style.border") border = 'none';

  @HostListener('mouseenter') omMouseEnter(){
    this.backgroundColor = 'white';
    this.color = '#28282B';
    this.border = 'solid 3px #282828'
  }

  @HostListener('mouseout') onMouseOut(){
    this.backgroundColor = '#28282B';
    this.color = "white";
    this.border = 'none';
  }
}
