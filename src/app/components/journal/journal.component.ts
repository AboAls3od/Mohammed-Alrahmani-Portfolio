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
          <span class="section-kicker">٠٥ / المحتوى والمعرفة</span>
          <h2 class="section-title">أشارك خبرتي لمساعدتك على اتخاذ قرارات أفضل.</h2>
          <p style="color: var(--muted); font-size: 14px; line-height: 2; max-width: 560px; margin-top: 16px;">أشارك خبرتي في التسويق وتطوير الأعمال من خلال محتوى عملي يساعد أصحاب المشاريع على اتخاذ قرارات أفضل.</p>
        </div>

        <div class="topics" appReveal [appReveal]="100">
          @for (topic of data.topics; track topic; let i = $index) {
            <span class="topic">{{ topic }}</span>
          }
        </div>

        <div class="journal-note" appReveal [appReveal]="200">
          <strong>التسويق ليس أن تقول أكثر، بل أن تعني شيئاً للعميل.</strong>
          <a href="https://www.linkedin.com/in/gh17mr" target="_blank" rel="noreferrer noopener" class="btn btn-primary" style="white-space: nowrap;">
            شاهد مقالاتي على LinkedIn
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
