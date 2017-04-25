// Get element widths
this.el.nativeElement.scrollWidth
this.el.nativeElement.offsetWidth
this.el.nativeElement.clientWidth
with:
    private el: ElementRef;
    private renderer: Renderer2;

    constructor(el: ElementRef, renderer: Renderer2)
    {
        this.el = el;
        this.renderer = renderer;
    }
