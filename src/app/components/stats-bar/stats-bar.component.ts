import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-bar',
  standalone: true,
  template: `
    <div class="signal-bar" aria-label="ملخص الخبرة">
      <div class="shell signal-inner">
        <div class="signal-intro">خبرة مبنية على السوق<br />لا على الافتراضات</div>
        <div class="signal-item">
          <strong>+٢٠٩</strong>
          <span>مشروعاً وعملاً</span>
        </div>
        <div class="signal-item">
          <strong>٥</strong>
          <span>قطاعات متنوعة</span>
        </div>
        <div class="signal-item">
          <strong>١</strong>
          <span>هدف: نموّك</span>
        </div>
      </div>
    </div>
  `,
})
export class StatsBarComponent {}
