import {
  Directive,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Input,
  numberAttribute,
} from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input({ alias: 'appReveal', transform: numberAttribute }) delay: number = 0;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const native = this.el.nativeElement;
    native.classList.add('reveal');
    if (this.delay > 0) {
      native.style.transitionDelay = `${this.delay}ms`;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    this.observer.observe(native);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
