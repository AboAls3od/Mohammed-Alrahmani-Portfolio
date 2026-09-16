import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="section section-dark" id="expertise">
      <div class="shell expertise-layout">

        <div class="expertise-intro" appReveal>
          <span class="section-kicker">٠٣ / أين أملك الخبرة</span>
          <h2 class="section-title">كل سوق له لغته.</h2>
          <p>المبدأ واحد، لكن الرسالة وطريقة الوصول تتغيران من قطاع إلى آخر. هذه هي الأسواق التي عشت تفاصيلها وتحدياتها.</p>
        </div>

        <div class="expertise-list" appReveal [appReveal]="200">
          @for (item of data.expertise; track item.index) {
            <div class="expertise-row">
              <span class="idx">{{ item.index }}</span>
              <h3>{{ item.title }}</h3>
              <span class="count">{{ item.count }}</span>
            </div>
          }
        </div>

      </div>
    </section>
  `,
})
export class ExpertiseComponent {
  protected data = inject(PortfolioDataService);
}
