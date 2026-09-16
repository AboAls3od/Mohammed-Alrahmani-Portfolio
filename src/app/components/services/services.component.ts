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
            <span class="section-kicker">٠٢ / ماذا أفعل</span>
            <h2 class="section-title">أرتّب لك الصورة، ثم نتحرك.</h2>
          </div>
          <p class="section-desc">خدمات عملية تجمع بين التفكير الاستراتيجي والتنفيذ الذي يقترب من السوق.</p>
        </div>

        <!-- Strategy Banner -->
        <div class="strategy-banner" appReveal [appReveal]="100">
          <img src="assets/marketing-strategy.jpg" alt="مكتب عمل واستراتيجية تسويقية" loading="lazy" />
          <div class="strategy-banner-copy">
            <span>استراتيجية قبل الإنفاق</span>
            <strong>كل قرار تسويقي جيد يبدأ من فهم الصورة كاملة.</strong>
          </div>
        </div>

        <!-- Services Grid -->
        <div class="services-grid">
          @for (service of data.services; track service.number; let i = $index) {
            <article class="service-card" appReveal [appReveal]="i * 100">
              <div>
                <div class="service-number">{{ service.number }}</div>
                <div class="service-icon" style="margin: 20px 0 24px;">
                  <ng-container [ngSwitch]="service.icon">
                    <svg *ngSwitchCase="'target'" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                    <svg *ngSwitchCase="'trending-up'" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                    <svg *ngSwitchCase="'shopping-bag'" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
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
