import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="hero" id="top" aria-label="القسم الرئيسي">
      <div class="shell hero-grid">

        <!-- Copy -->
        <div class="hero-copy" appReveal [appReveal]="0">
          <div class="eyebrow">
            <span class="eyebrow-line"></span>
            خبير تسويق وتطوير أعمال
          </div>
          <h1>محمد الرحماني | <em>خبير تسويق</em> وتطوير أعمال</h1>
          <p class="hero-description">
            أساعد المشاريع والمتاجر على الوصول إلى عملائها وزيادة مبيعاتها
          </p>
          <p class="hero-subtext">
            متخصص في التسويق وتطوير الأعمال .. أعمل على مساعدة أصحاب المشاريع والمتاجر والشركات في بناء استراتيجيات تسويقية عملية .. جذب العملاء .. تطوير المبيعات .. وتحويل الفرص التسويقية إلى نتائج قابلة للقياس
          </p>
          <div class="hero-actions">
            <button class="btn btn-primary" (click)="nav('contact')">
              اطلب استشارة
              <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </button>
            <button class="btn btn-ghost" (click)="nav('services')">
              تعرف على خدماتي
              <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
          </div>
        </div>

        <!-- Orbit Art -->
        <div class="hero-art" appReveal [appReveal]="180" aria-label="بوصلة استراتيجية للنمو">
          <div class="orbit-wrapper">
            <div class="orbit">
              <span class="orbit-dot"></span>
              <span class="orbit-dot two"></span>
              <div class="compass">
                <div class="compass-core">م</div>
              </div>
            </div>
          </div>
          <span class="art-label">MARKET / MOMENTUM / MEANING</span>
          <div class="hero-note">
            <span class="dot"></span>
            تسويق يصنع نتائج حقيقية
          </div>
        </div>

      </div>
    </section>
  `,
})
export class HeroComponent {
  private scroll = inject(ScrollService);
  protected nav(id: string): void { this.scroll.scrollToId(id); }
}
