import { Component, inject, signal, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';
import { PortfolioDataService } from '../../services/portfolio-data.service';

interface FormValues {
  name: string;
  email: string;
  company: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective],
  template: `
    <section class="section contact-section" id="contact">
      <div class="shell contact-grid">

        <!-- Left: Info -->
        <div class="contact-copy" appReveal>
          <span class="section-kicker">٠٦ / لنتحدث</span>
          <h2 class="section-title">هل هناك فرصة تستحق أن ندرسها؟</h2>
          <p>احجز استشارة أولية مجانية. أخبرني عن مشروعك، وسأعود إليك بفكرة أولية عن المسار الأنسب.</p>

          <div class="contact-details">
            <div class="contact-detail">
              <span>البريد الإلكتروني</span>
              <strong>hello&#64;mohammed-alrahmani.com</strong>
            </div>
            <div class="contact-detail">
              <span>الموقع</span>
              <strong>الرياض، المملكة العربية السعودية</strong>
            </div>
          </div>

          <div class="social-links">
            @for (link of data.socialLinks; track link.label) {
              <a [href]="link.url" target="_blank" rel="noreferrer noopener">{{ link.label }}</a>
            }
          </div>
        </div>

        <!-- Right: Form -->
        <div class="contact-form" appReveal [appReveal]="200">

          @if (submitted()) {
            <!-- Success State -->
            <div class="form-success" role="status" tabindex="-1" #successEl>
              <div class="check-icon">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <strong>وصلت رسالتك، شكراً.</strong>
              <p>سأراجع التفاصيل وأتواصل معك قريباً. متحمس للتعرف على مشروعك.</p>
              <button type="button" class="btn btn-ghost" style="color: var(--fg); border-color: var(--border);" (click)="resetForm()">
                إرسال رسالة أخرى
              </button>
            </div>

          } @else {
            <!-- Form -->
            <form (ngSubmit)="submitForm()" novalidate aria-label="نموذج حجز الاستشارة">
              <div class="form-grid">

                <!-- Name -->
                <div class="field">
                  <label for="name">الاسم الكريم</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autocomplete="name"
                    [(ngModel)]="form.name"
                    (ngModelChange)="clearError('name')"
                    placeholder="مثال: خالد العتيبي"
                    [attr.aria-invalid]="!!errors()['name'] || null"
                    [attr.aria-describedby]="errors()['name'] ? 'name-error' : null"
                  />
                  @if (errors()['name']) {
                    <span class="error-msg" id="name-error" role="alert">{{ errors()['name'] }}</span>
                  }
                </div>

                <!-- Email -->
                <div class="field">
                  <label for="email">البريد الإلكتروني</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    inputmode="email"
                    dir="ltr"
                    [(ngModel)]="form.email"
                    (ngModelChange)="clearError('email')"
                    placeholder="name@company.com"
                    [attr.aria-invalid]="!!errors()['email'] || null"
                    [attr.aria-describedby]="errors()['email'] ? 'email-error' : null"
                  />
                  @if (errors()['email']) {
                    <span class="error-msg" id="email-error" role="alert">{{ errors()['email'] }}</span>
                  }
                </div>

                <!-- Company (optional) -->
                <div class="field full">
                  <label for="company">
                    اسم المشروع أو الشركة
                    <span style="color: var(--muted); font-weight: 400;">(اختياري)</span>
                  </label>
                  <input
                    id="company"
                    name="organization"
                    type="text"
                    autocomplete="organization"
                    [(ngModel)]="form.company"
                    placeholder="ما اسم المشروع الذي تعمل عليه؟"
                  />
                </div>

                <!-- Message -->
                <div class="field full">
                  <label for="message">كيف يمكنني مساعدتك؟</label>
                  <textarea
                    id="message"
                    name="message"
                    [(ngModel)]="form.message"
                    (ngModelChange)="clearError('message')"
                    placeholder="حدثني عن التحدي أو الفرصة التي أمامك..."
                    [attr.aria-invalid]="!!errors()['message'] || null"
                    [attr.aria-describedby]="errors()['message'] ? 'message-error' : null"
                  ></textarea>
                  @if (errors()['message']) {
                    <span class="error-msg" id="message-error" role="alert">{{ errors()['message'] }}</span>
                  }
                </div>

              </div>

              <div class="form-footer">
                <span class="form-hint" id="form-hint">لن تستخدم بياناتك إلا للتواصل بخصوص رسالتك.</span>
                <button type="submit" class="btn btn-primary" aria-describedby="form-hint">
                  أرسل الرسالة
                  <svg class="icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </div>
            </form>
          }

        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  protected data = inject(PortfolioDataService);

  @ViewChild('successEl') successEl!: ElementRef<HTMLDivElement>;

  protected form: FormValues = { name: '', email: '', company: '', message: '' };
  protected errors = signal<FormErrors>({});
  protected submitted = signal(false);

  protected clearError(field: keyof FormValues): void {
    const current = this.errors();
    if (current[field]) {
      this.errors.update((e) => ({ ...e, [field]: undefined }));
    }
  }

  protected submitForm(): void {
    const next: FormErrors = {};
    if (this.form.name.trim().length < 2) next['name'] = 'اكتب اسمك الكريم';
    if (!this.form.email.trim() || !/^\S+@\S+\.\S+$/.test(this.form.email)) next['email'] = 'تحقق من البريد الإلكتروني';
    if (this.form.message.trim().length < 10) next['message'] = 'أخبرني قليلاً عن مشروعك (١٠ أحرف على الأقل)';

    this.errors.set(next);

    if (Object.keys(next).length > 0) {
      const firstKey = Object.keys(next)[0] as keyof FormValues;
      requestAnimationFrame(() => document.getElementById(firstKey)?.focus());
      return;
    }

    this.submitted.set(true);
    this.form = { name: '', email: '', company: '', message: '' };
    requestAnimationFrame(() => this.successEl?.nativeElement?.focus());
  }

  protected resetForm(): void {
    this.submitted.set(false);
    this.errors.set({});
  }
}
