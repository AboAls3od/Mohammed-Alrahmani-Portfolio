import { Injectable } from '@angular/core';

export interface Service {
  number: string;
  icon: 'target' | 'trending-up' | 'shopping-bag' | 'users' | 'edit' | 'bar-chart';
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
      title: 'استشارات التسويق',
      description: 'تحليل وضع مشروعك الحالي وتحديد الفرص والمشكلات التسويقية .. ثم وضع توصيات عملية تساعدك على اتخاذ قرارات أفضل.',
    },
    {
      number: '٠٢',
      icon: 'trending-up',
      title: 'التسويق الرقمي',
      description: 'بناء وتطوير الحملات التسويقية عبر المنصات الرقمية المناسبة لجمهورك .. مع التركيز على النتائج وليس مجرد الإنفاق الإعلاني.',
    },
    {
      number: '٠٣',
      icon: 'shopping-bag',
      title: 'تطوير الأعمال',
      description: 'البحث عن فرص جديدة للنمو .. تطوير الشراكات .. الوصول إلى العملاء المحتملين .. وتحويل الفرص إلى أعمال.',
    },
    {
      number: '٠٤',
      icon: 'users',
      title: 'توليد العملاء المحتملين',
      description: 'تصميم أساليب عملية للوصول إلى العملاء المهتمين وتحويل الاهتمام إلى طلبات واستفسارات وفرص بيع.',
    },
    {
      number: '٠٥',
      icon: 'edit',
      title: 'إدارة المحتوى',
      description: 'تطوير أفكار ومحتوى يساعد علامتك التجارية على بناء حضور مستمر وزيادة ثقة العملاء بك.',
    },
    {
      number: '٠٦',
      icon: 'bar-chart',
      title: 'تطوير المبيعات',
      description: 'مراجعة رحلة العميل والعرض وطريقة البيع .. واكتشاف نقاط الضعف التي تمنع تحويل المهتمين إلى مشترين.',
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
    'كيف تحصل على عملاء جدد؟',
    'كيف تختار المسوق المناسب؟',
    'متى تبدأ بالإعلانات؟',
    'كيف تختبر حملتك الإعلانية؟',
    'كيف ترفع قيمة السلة؟',
    'لماذا يفشل الإعلان؟',
    'كيف تبني ثقة العميل؟',
    'التسويق بالمحتوى',
    'المبيعات',
    'التجارة الإلكترونية',
    'تطوير الأعمال',
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
