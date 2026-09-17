import { Component, inject, signal, ViewChild, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { ScrollService } from '../../services/scroll.service';

interface ConsultForm {
  name: string;
  phone: string;
  email: string;
  projectName: string;
  projectField: string;
  city: string;
  website: string;
  problem: string;
  goal: string;
  captchaAnswer: string;
}

type FormErrors = Partial<Record<keyof ConsultForm, string>>;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective],
  template: `
    <!-- Consultation Section -->
    <section class="section consult-section" id="contact">
      <div class="shell">

        <!-- Section Head -->
        <div class="section-head" appReveal>
          <div>
            <span class="section-kicker">٠٦ / الاستشارة</span>
            <h2 class="section-title">لديك مشروع وتحتاج رأياً تسويقياً؟</h2>
          </div>
          <p class="section-desc">
            إذا كنت محتاراً في طريقة التسويق، أو لا تعرف من أين تبدأ، أو تنفق على الإعلانات دون نتائج واضحة — يمكنني مساعدتك.
          </p>
        </div>

        <!-- CTA Card -->
        <div class="consult-cta-card" appReveal [appReveal]="100">
          <div class="consult-cta-text">
            <h3>احجز استشارتك الآن مجاناً</h3>
            <p>أحلل وضعك وأحدد الخطوات التي تحتاجها</p>
          </div>
          <button class="btn btn-primary btn-lg" id="open-consult-btn" (click)="openModal()">
            احجز استشارتك الآن مجاناً
            <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
          </button>
        </div>

        <!-- Contact Details -->
        <div class="contact-details-row" appReveal [appReveal]="200">
          <div class="social-links-grid">
            @for (link of data.socialLinks; track link.label) {
              <a [href]="link.url" target="_blank" rel="noreferrer noopener" class="social-chip">
                <span class="social-dot"></span>
                {{ link.label }}
              </a>
            }
          </div>
        </div>

      </div>
    </section>

    <!-- Modal Overlay -->
    @if (modalOpen()) {
      <div class="modal-overlay" role="dialog" aria-modal="true" aria-label="نموذج حجز الاستشارة" (click)="onOverlayClick($event)" #overlayEl>
        <div class="modal-card" #modalCard>

          <!-- Modal Header -->
          <div class="modal-header">
            <div>
              <h2 class="modal-title">احجز استشارتك المجانية</h2>
              <p class="modal-subtitle">أحتاج بعض المعلومات عن مشروعك لأتمكن من مساعدتك</p>
            </div>
            <button class="modal-close" (click)="closeModal()" aria-label="إغلاق النموذج">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <!-- Success State -->
          @if (submitted()) {
            <div class="modal-success" role="status" tabindex="-1" #successEl>
              <div class="success-icon-wrap">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <strong>تم إرسال طلبك بنجاح!</strong>
              <p>وصل طلب الاستشارة، سأراجع تفاصيل مشروعك وأتواصل معك قريباً.</p>
              <button type="button" class="btn btn-primary" (click)="closeModal()">إغلاق</button>
            </div>

          } @else {
            <!-- Form -->
            <form class="modal-form" (ngSubmit)="submitForm()" novalidate aria-label="نموذج حجز الاستشارة">
              <div class="form-grid">

                <!-- Name -->
                <div class="field">
                  <label for="c-name">الاسم <span class="req">*</span></label>
                  <input
                    id="c-name" name="name" type="text" autocomplete="name"
                    [(ngModel)]="form.name" (ngModelChange)="clearError('name')"
                    placeholder="محمد أحمد"
                    [attr.aria-invalid]="!!errors()['name'] || null"
                  />
                  @if (errors()['name']) {
                    <span class="error-msg" role="alert">{{ errors()['name'] }}</span>
                  }
                </div>

                <!-- Phone -->
                <div class="field">
                  <label for="c-phone">رقم الجوال <span class="req">*</span></label>
                  <input
                    id="c-phone" name="phone" type="tel" autocomplete="tel"
                    inputmode="tel" dir="ltr"
                    [(ngModel)]="form.phone" (ngModelChange)="clearError('phone')"
                    placeholder="05xxxxxxxx"
                    [attr.aria-invalid]="!!errors()['phone'] || null"
                  />
                  @if (errors()['phone']) {
                    <span class="error-msg" role="alert">{{ errors()['phone'] }}</span>
                  }
                </div>

                <!-- Email -->
                <div class="field">
                  <label for="c-email">البريد الإلكتروني <span class="req">*</span></label>
                  <input
                    id="c-email" name="email" type="email" autocomplete="email"
                    inputmode="email" dir="ltr"
                    [(ngModel)]="form.email" (ngModelChange)="clearError('email')"
                    placeholder="name@example.com"
                    [attr.aria-invalid]="!!errors()['email'] || null"
                  />
                  @if (errors()['email']) {
                    <span class="error-msg" role="alert">{{ errors()['email'] }}</span>
                  }
                </div>

                <!-- Project Name -->
                <div class="field">
                  <label for="c-project">اسم المشروع <span class="req">*</span></label>
                  <input
                    id="c-project" name="projectName" type="text"
                    [(ngModel)]="form.projectName" (ngModelChange)="clearError('projectName')"
                    placeholder="متجر إلكتروني / شركة / ..."
                    [attr.aria-invalid]="!!errors()['projectName'] || null"
                  />
                  @if (errors()['projectName']) {
                    <span class="error-msg" role="alert">{{ errors()['projectName'] }}</span>
                  }
                </div>

                <!-- Project Field -->
                <div class="field">
                  <label for="c-field">مجال المشروع <span class="req">*</span></label>
                  <input
                    id="c-field" name="projectField" type="text"
                    [(ngModel)]="form.projectField" (ngModelChange)="clearError('projectField')"
                    placeholder="عقار / تجارة إلكترونية / خدمات / ..."
                    [attr.aria-invalid]="!!errors()['projectField'] || null"
                  />
                  @if (errors()['projectField']) {
                    <span class="error-msg" role="alert">{{ errors()['projectField'] }}</span>
                  }
                </div>

                <!-- City -->
                <div class="field">
                  <label for="c-city">المدينة <span class="req">*</span></label>
                  <input
                    id="c-city" name="city" type="text" autocomplete="address-level2"
                    [(ngModel)]="form.city" (ngModelChange)="clearError('city')"
                    placeholder="الرياض / جدة / ..."
                    [attr.aria-invalid]="!!errors()['city'] || null"
                  />
                  @if (errors()['city']) {
                    <span class="error-msg" role="alert">{{ errors()['city'] }}</span>
                  }
                </div>

                <!-- Website (optional) -->
                <div class="field full">
                  <label for="c-website">
                    رابط الموقع / المتجر
                    <span class="optional">(اختياري)</span>
                  </label>
                  <input
                    id="c-website" name="website" type="url"
                    inputmode="url" dir="ltr"
                    [(ngModel)]="form.website"
                    placeholder="https://example.com"
                  />
                </div>

                <!-- Problem -->
                <div class="field full">
                  <label for="c-problem">ما المشكلة التي تريد حلها؟ <span class="req">*</span></label>
                  <textarea
                    id="c-problem" name="problem"
                    [(ngModel)]="form.problem" (ngModelChange)="clearError('problem')"
                    placeholder="اشرح التحدي التسويقي الذي تواجهه..."
                    [attr.aria-invalid]="!!errors()['problem'] || null"
                  ></textarea>
                  @if (errors()['problem']) {
                    <span class="error-msg" role="alert">{{ errors()['problem'] }}</span>
                  }
                </div>

                <!-- Goal -->
                <div class="field full">
                  <label for="c-goal">ما الهدف الذي تريد الوصول إليه؟ <span class="req">*</span></label>
                  <textarea
                    id="c-goal" name="goal"
                    [(ngModel)]="form.goal" (ngModelChange)="clearError('goal')"
                    placeholder="حدد الهدف الذي تريد تحقيقه..."
                    [attr.aria-invalid]="!!errors()['goal'] || null"
                  ></textarea>
                  @if (errors()['goal']) {
                    <span class="error-msg" role="alert">{{ errors()['goal'] }}</span>
                  }
                </div>

                <!-- Captcha -->
                <div class="field full captcha-field">
                  <div class="captcha-row">
                    <div class="captcha-box" aria-label="كود التحقق">
                      <span class="captcha-num">{{ captchaA }}</span>
                      <span class="captcha-op">+</span>
                      <span class="captcha-num">{{ captchaB }}</span>
                      <span class="captcha-op">=</span>
                      <span class="captcha-q">؟</span>
                    </div>
                    <div class="captcha-input-wrap">
                      <label for="c-captcha">اكتب الناتج للتحقق <span class="req">*</span></label>
                      <input
                        id="c-captcha" name="captchaAnswer" type="number"
                        inputmode="numeric" dir="ltr"
                        [(ngModel)]="form.captchaAnswer" (ngModelChange)="clearError('captchaAnswer')"
                        placeholder="أدخل الإجابة"
                        [attr.aria-invalid]="!!errors()['captchaAnswer'] || null"
                      />
                    </div>
                  </div>
                  @if (errors()['captchaAnswer']) {
                    <span class="error-msg" role="alert">{{ errors()['captchaAnswer'] }}</span>
                  }
                </div>

              </div>

              <div class="form-footer">
                <span class="form-hint">لن تُستخدم بياناتك إلا للتواصل بخصوص الاستشارة.</span>
                <button type="submit" class="btn btn-primary" id="submit-consult-btn">
                  إرسال الطلب
                  <svg class="icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </div>

            </form>
          }

        </div>
      </div>
    }
  `,
})
export class ContactComponent implements OnInit {
  protected data = inject(PortfolioDataService);
  private scroll = inject(ScrollService);

  @ViewChild('successEl') successEl!: ElementRef<HTMLDivElement>;
  @ViewChild('modalCard') modalCard!: ElementRef<HTMLDivElement>;

  protected modalOpen = signal(false);
  protected submitted = signal(false);
  protected errors = signal<FormErrors>({});

  protected captchaA = 0;
  protected captchaB = 0;
  private captchaAnswer = 0;

  protected form: ConsultForm = this.emptyForm();

  ngOnInit(): void {
    this.generateCaptcha();
  }

  private emptyForm(): ConsultForm {
    return {
      name: '', phone: '', email: '', projectName: '',
      projectField: '', city: '', website: '',
      problem: '', goal: '', captchaAnswer: '',
    };
  }

  private generateCaptcha(): void {
    this.captchaA = Math.floor(Math.random() * 9) + 1;
    this.captchaB = Math.floor(Math.random() * 9) + 1;
    this.captchaAnswer = this.captchaA + this.captchaB;
  }

  protected openModal(): void {
    this.modalOpen.set(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.getElementById('c-name')?.focus();
    }, 100);
  }

  protected closeModal(): void {
    this.modalOpen.set(false);
    document.body.style.overflow = '';
    if (this.submitted()) {
      this.submitted.set(false);
      this.form = this.emptyForm();
      this.errors.set({});
      this.generateCaptcha();
    }
  }

  protected onOverlayClick(e: MouseEvent): void {
    const card = this.modalCard?.nativeElement;
    if (card && !card.contains(e.target as Node)) {
      this.closeModal();
    }
  }

  protected clearError(field: keyof ConsultForm): void {
    const current = this.errors();
    if (current[field]) {
      this.errors.update((e) => ({ ...e, [field]: undefined }));
    }
  }

  protected submitForm(): void {
    const next: FormErrors = {};

    if (this.form.name.trim().length < 2) next['name'] = 'اكتب اسمك الكريم';
    if (!this.form.phone.trim() || !/^05\d{8}$/.test(this.form.phone.trim()))
      next['phone'] = 'أدخل رقم جوال سعودي صحيح (05xxxxxxxx)';
    if (!this.form.email.trim() || !/^\S+@\S+\.\S+$/.test(this.form.email))
      next['email'] = 'تحقق من البريد الإلكتروني';
    if (this.form.projectName.trim().length < 2) next['projectName'] = 'اكتب اسم مشروعك';
    if (this.form.projectField.trim().length < 2) next['projectField'] = 'حدد مجال مشروعك';
    if (this.form.city.trim().length < 2) next['city'] = 'اكتب مدينتك';
    if (this.form.problem.trim().length < 10) next['problem'] = 'اشرح المشكلة بشكل أوضح (١٠ أحرف على الأقل)';
    if (this.form.goal.trim().length < 10) next['goal'] = 'حدد هدفك بشكل أوضح (١٠ أحرف على الأقل)';

    const captchaInput = parseInt(this.form.captchaAnswer, 10);
    if (isNaN(captchaInput) || captchaInput !== this.captchaAnswer)
      next['captchaAnswer'] = 'الإجابة غير صحيحة، تحقق من العملية الحسابية';

    this.errors.set(next);

    if (Object.keys(next).length > 0) {
      const firstKey = Object.keys(next)[0] as keyof ConsultForm;
      const idMap: Record<keyof ConsultForm, string> = {
        name: 'c-name', phone: 'c-phone', email: 'c-email',
        projectName: 'c-project', projectField: 'c-field',
        city: 'c-city', website: 'c-website',
        problem: 'c-problem', goal: 'c-goal', captchaAnswer: 'c-captcha',
      };
      requestAnimationFrame(() => document.getElementById(idMap[firstKey])?.focus());
      return;
    }

    // ✅ 1. حفظ في Google Sheets (في الخلفية)
    this.saveToSheet();

    // ✅ 2. فتح واتساب مع البيانات
    this.openWhatsApp();

    this.submitted.set(true);
    requestAnimationFrame(() => this.successEl?.nativeElement?.focus());
  }

  private saveToSheet(): void {
    // ← ضع رابط الـ Web App من Google Apps Script هنا
    const SHEET_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';

    if (SHEET_URL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL') return; // تخطَّ إذا لم يُضبط بعد

    const payload = {
      name:         this.form.name.trim(),
      phone:        this.form.phone.trim(),
      email:        this.form.email.trim(),
      projectName:  this.form.projectName.trim(),
      projectField: this.form.projectField.trim(),
      city:         this.form.city.trim(),
      website:      this.form.website.trim(),
      problem:      this.form.problem.trim(),
      goal:         this.form.goal.trim(),
    };

    fetch(SHEET_URL, {
      method: 'POST',
      body: JSON.stringify(payload),
    }).catch(() => {
      // خطأ صامت — لا يؤثر على تجربة المستخدم
    });
  }

  private openWhatsApp(): void {
    const f = this.form;
    const lines = [
      `🟥 *طلب استشارة تسويقية*`,
      ``,
      `👤 *الاسم:* ${f.name.trim()}`,
      `📱 *الجوال:* ${f.phone.trim()}`,
      `📧 *البريد:* ${f.email.trim()}`,
      ``,
      `🏢 *اسم المشروع:* ${f.projectName.trim()}`,
      `📂 *المجال:* ${f.projectField.trim()}`,
      `📍 *المدينة:* ${f.city.trim()}`,
      f.website.trim() ? `🔗 *الموقع:* ${f.website.trim()}` : null,
      ``,
      `❓ *المشكلة:*`,
      f.problem.trim(),
      ``,
      `🎯 *الهدف:*`,
      f.goal.trim(),
    ]
    .filter((l) => l !== null)
    .join('\n');

    // ← ضع رقم واتساب محمد الرحماني هنا بدون + (مثال: 966512345678)
    const phone = '966500000000';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(lines)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
