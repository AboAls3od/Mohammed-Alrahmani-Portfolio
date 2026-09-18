import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header
      class="topbar"
      [class.scrolled]="scroll.scrolled()"
      [class.menu-open]="menuOpen()"
    >
      <div class="shell topbar-inner">
        <!-- Brand -->
        <button class="brand" (click)="navigate('top')" aria-label="العودة للأعلى">
          <span class="brand-mark">م</span>
          <span>محمد الرحماني</span>
        </button>

        <!-- Desktop Nav -->
        <nav class="nav" id="main-navigation" aria-label="التنقل الرئيسي">
          @for (link of navLinks; track link.id) {
            <a
              [href]="'#' + link.id"
              [class.active]="scroll.activeSection() === link.id"
              [attr.aria-current]="scroll.activeSection() === link.id ? 'page' : null"
              (click)="onNavClick($event, link.id)"
            >{{ link.label }}</a>
          }
        </nav>

        <!-- Desktop CTA -->
        <button class="header-cta" (click)="navigate('contact')">
          اطلب استشارة
          <svg class="icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </button>

        <!-- Mobile Toggle -->
        <button
          class="menu-toggle"
          (click)="toggleMenu()"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="main-navigation"
          [attr.aria-label]="menuOpen() ? 'إغلاق القائمة' : 'فتح القائمة'"
        >
          @if (menuOpen()) {
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          } @else {
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </div>
    </header>

    <!-- Mobile Overlay -->
    <div class="mobile-overlay" [class.open]="menuOpen()" role="dialog" aria-modal="true" aria-label="قائمة التنقل">
      <button class="mobile-close" (click)="closeMenu()" aria-label="إغلاق القائمة">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>

      @for (link of navLinks; track link.id) {
        <a
          class="nav-link"
          [href]="'#' + link.id"
          [class.active]="scroll.activeSection() === link.id"
          (click)="onNavClick($event, link.id)"
        >{{ link.label }}</a>
      }

      <button class="btn btn-primary" style="margin-top: 28px; padding: 16px 36px;" (click)="navigate('contact')">
        اطلب استشارة
      </button>
    </div>
  `,
})
export class NavbarComponent {
  protected scroll = inject(ScrollService);
  protected menuOpen = signal(false);

  protected readonly navLinks = [
    { id: 'about',     label: 'من أنا ؟' },
    { id: 'services',  label: 'ماذا أقدم ؟' },
    { id: 'why-me',    label: 'لماذا معي ؟' },
    { id: 'expertise', label: 'الخبرة والمشاريع' },
    { id: 'journal',   label: 'المحتوى' },
    { id: 'contact',   label: 'الاستشارة' },
  ];

  @HostListener('document:keydown.escape')
  onEscape(): void { this.menuOpen.set(false); }

  protected toggleMenu(): void { this.menuOpen.update((v) => !v); }
  protected closeMenu(): void { this.menuOpen.set(false); }

  protected navigate(id: string): void {
    this.menuOpen.set(false);
    this.scroll.scrollToId(id);
  }

  protected onNavClick(event: Event, id: string): void {
    event.preventDefault();
    this.navigate(id);
  }
}
