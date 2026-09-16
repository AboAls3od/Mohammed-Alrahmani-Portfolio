import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  template: `
    <section class="section" id="about">
      <div class="shell">

        <!-- Section Head -->
        <div class="section-head" appReveal>
          <div>
            <span class="section-kicker">٠١ / عن الشراكة</span>
            <h2 class="section-title">التسويق الجيد يبدأ بسؤال تجاري واضح.</h2>
          </div>
          <p class="section-desc">قبل أن نبحث عن المزيد من الظهور، نفهم ما الذي يجب أن ينمو فعلاً.</p>
        </div>

        <!-- Intro Grid -->
        <div class="intro-grid">
          <div class="intro-copy" appReveal [appReveal]="0">
            <p>أنا محمد الرحماني، مستشار تسويق وتطوير أعمال.</p>
            <p>أعمل مع أصحاب المشاريع والفرق الطموحة على تحويل التسويق من نشاط متفرق إلى نظام يخدم المبيعات، ويصنع ثقة حقيقية مع العملاء.</p>
            <p>أؤمن أن أفضل خطة هي التي تفهم طبيعة السوق السعودي، وتحترم عقل العميل، وتمنح صاحب المشروع خطوات يعرف لماذا يقوم بها وماذا ينتظر منها.</p>
          </div>

          <aside class="intro-aside" appReveal [appReveal]="200">
            <div class="portrait-card">
              <img src="assets/portrait.png" alt="محمد الرحماني — مستشار تسويق وتطوير أعمال" loading="lazy" />
              <div class="portrait-badge">
                <strong>محمد الرحماني</strong>
                <span>تسويق | تطوير أعمال</span>
              </div>
            </div>
            <div class="aside-label">
              <span>فلسفة العمل</span>
              <span>٠٠١</span>
            </div>
            <p class="aside-quote">«وضوح أكثر.<br />حركة أذكى.<br />نتيجة تُقاس.»</p>
            <div class="signature">
              <span class="signature-line"></span>
              محمد الرحماني
            </div>
          </aside>
        </div>

      </div>
    </section>
  `,
})
export class AboutComponent {}
