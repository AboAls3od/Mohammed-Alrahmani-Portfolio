import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-closing',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="closing">
      <div class="shell" appReveal>
        <span class="section-kicker">جاهز للخطوة التالية؟</span>
        <h2>لنصنع نمواً يراه <span>العميل</span> وتشعر به الأرقام.</h2>
        <p>كل مشروع كبير بدأ بمحادثة صريحة عن أين هو، وإلى أين يريد أن يصل.</p>
        <button class="btn btn-primary" (click)="nav('contact')">
          احجز استشارتك المجانية
          <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </button>
      </div>
    </section>
  `,
})
export class ClosingComponent {
  private scroll = inject(ScrollService);
  protected nav(id: string): void { this.scroll.scrollToId(id); }
}
