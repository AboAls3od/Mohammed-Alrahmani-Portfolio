import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="section" id="method">
      <div class="shell">

        <div class="section-head" appReveal>
          <div>
            <span class="section-kicker">٠٤ / كيف نعمل معاً</span>
            <h2 class="section-title">من الارتباك إلى قرار واضح.</h2>
          </div>
          <p class="section-desc">رحلة مرنة تناسب حجم مشروعك، لكن لا تتنازل عن وضوح الخطوة القادمة.</p>
        </div>

        <div class="process-grid">
          @for (step of data.processSteps; track step.number; let i = $index) {
            <article class="process-step" appReveal [appReveal]="i * 100">
              <div class="step-number">{{ step.number }}</div>
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
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
