import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="section section-tint" id="journal">
      <div class="shell">

        <div class="journal-head" appReveal>
          <span class="section-kicker">٠٥ / المعرفة</span>
          <h2 class="section-title">المحتوى والمعرفة</h2>
          <p style="color: var(--fg-muted); font-size: 15px; line-height: 2; max-width: 600px; margin-top: 14px;">أشارك خبرتي في التسويق وتطوير الأعمال من خلال محتوى عملي يساعد أصحاب المشاريع على اتخاذ قرارات أفضل</p>
          <div style="font-weight: 600; font-size: 14px; color: var(--red); margin-top: 22px;">مواضيع أكتب وأتحدث عنها :</div>
        </div>

        <div class="topics" appReveal [appReveal]="100">
          @for (topic of data.topics; track topic; let i = $index) {
            <span class="topic">{{ topic }}</span>
          }
        </div>

        <div class="journal-note" appReveal [appReveal]="200">
          <strong>التسويق ليس أن تقول أكثر، بل أن تعني شيئاً للعميل.</strong>
          <a href="https://www.linkedin.com/in/gh17mr" target="_blank" rel="noreferrer noopener" class="btn btn-primary" style="white-space: nowrap;">
            شاهد مقالاتي ( لينكد ان )
            <svg class="icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </a>
        </div>

      </div>
    </section>
  `,
})
export class JournalComponent {
  protected data = inject(PortfolioDataService);
}
