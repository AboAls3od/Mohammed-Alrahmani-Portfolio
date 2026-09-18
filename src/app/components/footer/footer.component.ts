import { Component, inject } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="shell footer-inner">
        <button class="brand" (click)="nav('top')" aria-label="العودة للأعلى">
          <span class="brand-mark">م</span>
          <span>محمد الرحماني</span>
        </button>
        <small>تسويق | تطوير أعمال | استشارات</small>
        <small>لا تنتظر الاذن لتحقيق النجاح</small>
        <small>© {{ year }} جميع الحقوق محفوظة</small>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  private scroll = inject(ScrollService);
  protected year = new Date().getFullYear();
  protected nav(id: string): void { this.scroll.scrollToId(id); }
}
