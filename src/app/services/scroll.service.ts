import { Injectable, signal } from '@angular/core';
import { fromEvent } from 'rxjs';
import { throttleTime, startWith, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  readonly scrolled = signal(false);
  readonly activeSection = signal('about');

  init(): void {
    fromEvent(window, 'scroll', { passive: true })
      .pipe(
        startWith(null),
        throttleTime(16, undefined, { leading: true, trailing: true }),
        map(() => window.scrollY > 28)
      )
      .subscribe((s) => this.scrolled.set(s));
  }

  scrollToId(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  setActiveSection(id: string): void {
    this.activeSection.set(id);
  }
}
