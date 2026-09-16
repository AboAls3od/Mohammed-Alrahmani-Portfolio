import { Injectable } from '@angular/core';

export interface Service {
  number: string;
  icon: 'target' | 'trending-up' | 'shopping-bag';
  title: string;
  description: string;
}

export interface ExpertiseItem {
  index: string;
  title: string;
  count: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly services: Service[] = [
    {
      number: '٠١',
      icon: 'target',
      title: 'الاستراتيجية التسويقية',
      description: 'نحوّل أهداف المشروع إلى خريطة تسويق واضحة، بأولويات قابلة للتنفيذ والقياس.',
    },
    {
      number: '٠٢',
      icon: 'trending-up',
      title: 'تطوير الأعمال',
      description: 'نكتشف الفرص، نبني الشراكات، ونصمم مسارات نمو تفتح أبواباً جديدة للمبيعات.',
    },
    {
      number: '٠٣',
      icon: 'shopping-bag',
      title: 'النمو التجاري',
      description: 'نربط العرض بالعميل المناسب ونحسّن رحلة الشراء من أول انتباه حتى قرار العميل.',
    },
  ];

  readonly expertise: ExpertiseItem[] = [
    { index: '٠١', title: 'العقار والتطوير العقاري', count: '+١٥ مشروعاً' },
    { index: '٠٢', title: 'التجارة الإلكترونية', count: '+١٠٤ متاجر' },
    { index: '٠٣', title: 'خدمات المياه', count: '+٢١ مشروعاً' },
    { index: '٠٤', title: 'الخدمات المحلية', count: '+٥٦ منشأة' },
    { index: '٠٥', title: 'تطوير الأعمال', count: '+١٣ فرصة' },
  ];

  readonly processSteps: ProcessStep[] = [
    { number: '٠١', title: 'نستمع', description: 'نفهم مشروعك، عميلك، وما الذي يعيق النمو الآن.' },
    { number: '٠٢', title: 'نشخّص', description: 'نقرأ السوق والعرض والرسالة لنرى الفرصة الحقيقية.' },
    { number: '٠٣', title: 'نصمّم', description: 'نحوّل الرؤية إلى خطة أولويات ومبادرات قابلة للقياس.' },
    { number: '٠٤', title: 'نحرّك', description: 'نختبر، نتعلم، ونبني على ما يصنع أثراً تجارياً.' },
  ];

  readonly topics: string[] = [
    'التسويق في السوق السعودي',
    'قراءة سلوك العميل',
    'من الفكرة إلى أول عملية بيع',
    'بناء العروض التجارية',
    'نمو المتاجر الإلكترونية',
    'الشراكات وفرص التوسع',
  ];

  readonly socialLinks = [
    { label: 'TikTok',    url: 'https://www.tiktok.com/@gh17mr' },
    { label: 'LinkedIn',  url: 'https://www.linkedin.com/in/gh17mr' },
    { label: 'X',         url: 'https://x.com/gh17mr' },
    { label: 'Facebook',  url: 'https://www.facebook.com/gh17mr' },
    { label: 'Instagram', url: 'https://www.instagram.com/gh17mr' },
    { label: 'Threads',   url: 'https://www.threads.net/@gh17mr' },
    { label: 'Kwai',      url: 'https://k.kwai.com/u/@gh17mr' },
    { label: 'Snapchat',  url: 'https://www.snapchat.com/add/gh17mr' },
    { label: 'Jaco',      url: 'https://l.jaco.live/PvxjRCH39l' },
    { label: 'YouTube',   url: 'https://youtube.com/@gh17mr' },
    { label: 'Telegram',  url: 'https://t.me/gh17mrcom' },
  ];
}
