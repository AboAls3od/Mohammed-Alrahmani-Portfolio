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
            <span class="section-kicker">٠١ / عنّي</span>
            <h2 class="section-title">من أنا ؟</h2>
          </div>
          <p class="section-desc">أعمل على ربط التسويق بالمبيعات لتحقيق نتائج حقيقية وقابلة للقياس.</p>
        </div>

        <!-- Intro Grid -->
        <div class="intro-grid">
          <div class="intro-copy" appReveal [appReveal]="0">
            <p>أنا محمد الرحماني .. خبير ومتخصص في التسويق وتطوير الأعمال .. لدي خبرة في العمل مع المشاريع والشركات والمتاجر في مجالات التسويق الرقمي .. صناعة المحتوى .. الإعلانات .. توليد العملاء .. المبيعات .. وتطوير الأعمال</p>
            <p>أؤمن أن التسويق الناجح لا يعتمد فقط على الإعلان .. بل يبدأ من فهم العميل .. ومعرفة احتياجه .. وتقديم العرض المناسب له في الوقت والمكان المناسب</p>
            <p>أعمل على ربط التسويق بالمبيعات .. بحيث لا يكون الهدف مجرد زيادة المشاهدات أو المتابعين .. وإنما الوصول إلى عملاء وفرص ومبيعات حقيقية</p>
          </div>

          <aside class="intro-aside" appReveal [appReveal]="200">
            <div class="portrait-card">
              <img src="assets/portrait.png" alt="محمد الرحماني — خبير تسويق وتطوير أعمال" loading="lazy" />
              <div class="portrait-badge">
                <strong>محمد الرحماني</strong>
                <span>تسويق | تطوير أعمال | استشارات</span>
              </div>
            </div>
            <div class="aside-label">
              <span>فلسفة العمل</span>
              <span>٠٠١</span>
            </div>
            <p class="aside-quote">«لا تنتظر الاذن<br />لتحقيق النجاح»</p>
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
