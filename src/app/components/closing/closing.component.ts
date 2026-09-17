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
        <span class="section-kicker">مشروعك يحتاج خطة .. وليس مجرد إعلان</span>
        <h2>إذا كنت تريد تطوير تسويق مشروعك .. الوصول إلى عملاء جدد .. أو اكتشاف الفرص التي يمكن أن تزيد <span>مبيعاتك</span> .. تواصل معي</h2>
        <p>لا تنتظر الإذن لتحقيق النجاح. ابدأ الآن بخطوة صغيرة — استشارة مجانية.</p>
        <button class="btn btn-primary" (click)="nav('contact')">
          ابدأ من هنا — اطلب استشارة
          <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </button>
        <div class="closing-author">
          <span>محمد الرحماني</span>
          <span class="closing-sep">|</span>
          <span>تسويق | تطوير أعمال | استشارات</span>
        </div>
      </div>
    </section>
  `,
})
export class ClosingComponent {
  private scroll = inject(ScrollService);
  protected nav(id: string): void { this.scroll.scrollToId(id); }
}
