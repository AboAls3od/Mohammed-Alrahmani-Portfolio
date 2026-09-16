import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  signal,
  inject,
  HostListener,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from './services/scroll.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { StatsBarComponent } from './components/stats-bar/stats-bar.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ExpertiseComponent } from './components/expertise/expertise.component';
import { MethodComponent } from './components/method/method.component';
import { JournalComponent } from './components/journal/journal.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClosingComponent } from './components/closing/closing.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    StatsBarComponent,
    AboutComponent,
    ServicesComponent,
    ExpertiseComponent,
    MethodComponent,
    JournalComponent,
    ContactComponent,
    ClosingComponent,
    FooterComponent,
  ],
  template: `
    <div class="portfolio-page" dir="rtl">
      <a class="skip-link" href="#about">تخطى إلى المحتوى</a>
      <app-navbar />
      <app-hero />
      <app-stats-bar />
      <app-about />
      <app-services />
      <app-expertise />
      <app-method />
      <app-journal />
      <app-contact />
      <app-closing />
      <app-footer />
    </div>
  `,
  styles: [`
    .portfolio-page { overflow-x: hidden; min-height: 100dvh; }
  `],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  private scroll = inject(ScrollService);
  private sectionObserver!: IntersectionObserver;
  private readonly sectionIds = ['about', 'services', 'expertise', 'method', 'journal', 'contact'];

  @HostListener('document:keydown.escape')
  onEscape() {
    // Propagated to navbar via service if needed
  }

  ngOnInit(): void {
    this.scroll.init();
  }

  ngAfterViewInit(): void {
    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) this.scroll.setActiveSection(visible.target.id);
      },
      { rootMargin: '-18% 0px -68% 0px', threshold: [0, 0.15, 0.35] }
    );

    this.sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.sectionObserver.observe(el);
    });
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }
}
