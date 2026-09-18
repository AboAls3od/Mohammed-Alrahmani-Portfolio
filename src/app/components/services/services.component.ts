import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section class="section section-tint" id="services">
      <div class="shell">

        <div class="section-head" appReveal>
          <div>
            <span class="section-kicker">٠٢ / الخدمات</span>
            <h2 class="section-title">ماذا أقدم ؟</h2>
          </div>
          <p class="section-desc">أعمل على مساعدة أصحاب المشاريع والمتاجر والشركات في بناء استراتيجيات تسويقية عملية وتطوير المبيعات وتحقيق نتائج قابلة للقياس.</p>
        </div>

        <!-- Services Grid (3×2) -->
        <div class="services-grid">
          @for (service of data.services; track service.number; let i = $index) {
            <article class="service-card" appReveal [appReveal]="i * 80">
              <div>
                <div class="service-number">{{ service.number }}</div>
                <div class="service-icon" style="margin: 20px 0 24px;">
                  <ng-container [ngSwitch]="service.icon">
                    <svg *ngSwitchCase="'target'" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                    <svg *ngSwitchCase="'trending-up'" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                    <svg *ngSwitchCase="'shopping-bag'" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
                    <svg *ngSwitchCase="'users'" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                    <svg *ngSwitchCase="'edit'" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                    <svg *ngSwitchCase="'bar-chart'" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                  </ng-container>
                </div>
                <h3>{{ service.title }}</h3>
                <p>{{ service.description }}</p>
              </div>
              <div class="service-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
              </div>
            </article>
          }
        </div>

      </div>
    </section>
  `,
})
export class ServicesComponent {
  protected data = inject(PortfolioDataService);
}
