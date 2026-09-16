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
          <span class="section-kicker">٠٥ / من الأفكار التي أشاركها</span>
          <h2 class="section-title">ملاحظات من أرض السوق.</h2>
        </div>

        <div class="topics" appReveal [appReveal]="100">
          @for (topic of data.topics; track topic; let i = $index) {
            <span class="topic">{{ topic }}</span>
          }
        </div>

        <div class="journal-note" appReveal [appReveal]="200">
          <strong>التسويق ليس أن تقول أكثر، بل أن تعني شيئاً للعميل.</strong>
          <span>تابع المحتوى القادم على منصات التواصل</span>
        </div>

      </div>
    </section>
  `,
})
export class JournalComponent {
  protected data = inject(PortfolioDataService);
}
