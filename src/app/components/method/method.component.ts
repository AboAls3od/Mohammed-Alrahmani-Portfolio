import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="section" id="why-me">
      <div class="shell">

        <div class="section-head" appReveal>
          <div>
            <span class="section-kicker">٠٣ / الرؤية والقيمة</span>
            <h2 class="section-title">لماذا تعمل معي ؟</h2>
          </div>
          <p class="section-desc">أتعامل مع التسويق من منظور تجاري يربط الإعلان بالعميل وبالنتائج الحقيقية.</p>
        </div>

        <div class="process-grid">
          @for (item of data.whyWorkWithMe; track item.number; let i = $index) {
            <article class="process-step" appReveal [appReveal]="i * 100">
              <div class="step-number">{{ item.number }}</div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </article>
          }
        </div>

      </div>
    </section>
  `,
})
export class MethodComponent {
  protected data = inject(PortfolioDataService);
}
