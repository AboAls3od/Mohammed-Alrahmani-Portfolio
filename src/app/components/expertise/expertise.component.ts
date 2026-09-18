import { Component, inject } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioDataService } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="section section-dark" id="expertise">
      <div class="shell">

        <!-- مجالات الخبرة -->
        <div class="expertise-skills-section" appReveal>
          <span class="section-kicker">٠٤ / التخصص</span>
          <h2 class="section-title">مجالات الخبرة</h2>
          <div class="skills-tags-grid">
            @for (skill of data.expertiseSkills; track skill) {
              <div class="skill-tag">
                <span class="skill-dot"></span>
                <span>{{ skill }}</span>
              </div>
            }
          </div>
        </div>

        <div class="expertise-divider"></div>

        <!-- المشاريع والتجارب -->
        <div class="expertise-layout">
          <div class="expertise-intro" appReveal>
            <span class="section-kicker">السجل العملي</span>
            <h2 class="section-title">المشاريع والتجارب</h2>
            <strong class="expertise-lead">خبرتي لا تقتصر على مجال واحد</strong>
            <p>عملت وشاركت في مشاريع وتجارب متنوعة في مجالات متعددة، منها :</p>
          </div>

          <div class="expertise-list" appReveal [appReveal]="200">
            @for (item of data.projects; track item.title) {
              <div class="project-experience-row">
                <div class="project-head">
                  <h3>{{ item.title }}</h3>
                  <span class="project-count">{{ item.count }}</span>
                </div>
                <p class="project-desc">{{ item.description }}</p>
              </div>
            }
          </div>
        </div>

      </div>
    </section>
  `,
})
export class ExpertiseComponent {
  protected data = inject(PortfolioDataService);
}
