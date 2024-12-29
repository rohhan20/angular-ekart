import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[setBackground]',
})

export class setBackground implements OnInit{
    constructor(private element: ElementRef, private renderer: Renderer2){}

    ngOnInit(): void {
        // this.element.nativeElement.style.color = 'white';
        // this.element.nativeElement.style.backgroundColor = '#36454f'
        this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', '#36454F');
        this.renderer.setAttribute(this.element.nativeElement, 'title', 'An example');
    }
}

