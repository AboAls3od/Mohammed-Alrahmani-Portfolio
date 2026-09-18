import { Injectable } from '@angular/core';

export interface Service {
  number: string;
  icon: 'target' | 'trending-up' | 'shopping-bag' | 'users' | 'edit' | 'bar-chart';
  title: string;
  description: string;
}

export interface WhyWorkWithMeItem {
  number: string;
  title: string;
  description: string;
  subText?: string;
}

export interface ProjectExperience {
  title: string;
  count: string;
  description: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly email = 'gh17mr@gmail.com';

  readonly services: Service[] = [
    {
      number: '٠١',
      icon: 'target',
      title: 'استشارات التسويق',
      description: 'تحليل وضع مشروعك الحالي وتحديد الفرص والمشكلات التسويقية .. ثم وضع توصيات عملية تساعدك على اتخاذ قرارات أفضل',
    },
    {
      number: '٠٢',
      icon: 'trending-up',
      title: 'التسويق الرقمي',
      description: 'بناء وتطوير الحملات التسويقية عبر المنصات الرقمية المناسبة لجمهورك .. مع التركيز على النتائج وليس مجرد الإنفاق الإعلاني',
    },
    {
      number: '٠٣',
      icon: 'shopping-bag',
      title: 'تطوير الأعمال',
      description: 'البحث عن فرص جديدة للنمو .. تطوير الشراكات .. الوصول إلى العملاء المحتملين .. وتحويل الفرص إلى أعمال',
    },
    {
      number: '٠٤',
      icon: 'users',
      title: 'توليد العملاء المحتملين',
      description: 'تصميم أساليب عملية للوصول إلى العملاء المهتمين وتحويل الاهتمام إلى طلبات واستفسارات وفرص بيع',
    },
    {
      number: '٠٥',
      icon: 'edit',
      title: 'إدارة المحتوى',
      description: 'تطوير أفكار ومحتوى يساعد علامتك التجارية على بناء حضور مستمر وزيادة ثقة العملاء بك',
    },
    {
      number: '٠٦',
      icon: 'bar-chart',
      title: 'تطوير المبيعات',
      description: 'مراجعة رحلة العميل والعرض وطريقة البيع .. واكتشاف نقاط الضعف التي تمنع تحويل المهتمين إلى مشترين',
    },
  ];

  readonly whyWorkWithMe: WhyWorkWithMeItem[] = [
    {
      number: '٠١',
      title: 'خبرة عملية وليست نظرية فقط',
      description: 'أتعامل مع التسويق من منظور تجاري .. لأن الهدف النهائي لأي مشروع هو النمو وتحقيق الإيرادات',
    },
    {
      number: '٠٢',
      title: 'أفكر في العميل قبل الإعلان',
      description: 'قبل أن تسأل : أين أعلن ؟ الأهم أن تسأل : من عميلي ؟ وماذا يريد ؟ ولماذا سيشتري مني ؟',
    },
    {
      number: '٠٣',
      title: 'أركز على النتائج',
      description: 'المشاهدات والمتابعون مؤشرات مهمة .. لكنها ليست الهدف النهائي .. الأهم هو الوصول إلى العملاء والفرص والمبيعات',
    },
    {
      number: '٠٤',
      title: 'أفهم طبيعة السوق السعودي',
      description: 'أعمل على استراتيجيات تراعي طبيعة العميل والسوق والمنصات المستخدمة في السعودية',
    },
  ];

  readonly expertiseSkills: string[] = [
    'التسويق الرقمي',
    'التسويق بالمحتوى',
    'Snapchat Ads',
    'TikTok Marketing',
    'Google Ads',
    'Social Media Marketing',
    'توليد العملاء',
    'المبيعات',
    'تطوير الأعمال',
    'التجارة الإلكترونية',
    'بناء العلامة التجارية',
    'الاستشارات التسويقية',
    'تحليل الحملات',
    'تطوير المتاجر الإلكترونية',
  ];

  readonly projects: ProjectExperience[] = [
    {
      title: 'العقار والتطوير العقاري',
      count: '+ 15',
      description: 'التسويق .. توليد العملاء .. وتطوير فرص البيع',
    },
    {
      title: 'التجارة الإلكترونية',
      count: '+ 104',
      description: 'تطوير استراتيجيات جذب العملاء وزيادة المبيعات',
    },
    {
      title: 'خدمات المياه',
      count: '+ 21',
      description: 'التسويق الرقمي وتوليد الطلبات والعملاء',
    },
    {
      title: 'الخدمات المحلية',
      count: '+ 56',
      description: 'تسويق الخدمات وربط العملاء بمقدمي الخدمة',
    },
    {
      title: 'تطوير الأعمال',
      count: '+ 13',
      description: 'البحث عن الفرص التجارية وبناء قنوات جديدة للوصول إلى العملاء',
    },
  ];

  readonly topics: string[] = [
    'كيف تحصل على عملاء جدد ؟',
    'كيف تختار المسوق المناسب ؟',
    'متى تبدأ بالإعلانات ؟',
    'كيف تختبر حملتك الإعلانية ؟',
    'كيف ترفع قيمة السلة ؟',
    'لماذا يفشل الإعلان ؟',
    'كيف تبني ثقة العميل ؟',
    'التسويق بالمحتوى',
    'المبيعات',
    'التجارة الإلكترونية',
    'تطوير الأعمال',
  ];

  readonly socialLinks: SocialLink[] = [
    { label: 'TikTok',    url: 'https://www.tiktok.com/@gh17mr' },
    { label: 'LinkedIn',  url: 'https://www.linkedin.com/in/gh17mr' },
    { label: 'X',         url: 'https://x.com/gh17mr' },
    { label: 'Facebook',  url: 'https://www.facebook.com/gh17mr' },
    { label: 'Instagram', url: 'https://www.instagram.com/gh17mr' },
    { label: 'Threads',   url: 'https://www.threads.net/@gh17mr' },
    { label: 'Kwai',      url: 'https://k.kwai.com/u/@gh17mr' },
    { label: 'Snapchat',  url: 'https://www.snapchat.com/add/gh17mr' },
    { label: 'Jaco',      url: 'https://l.jaco.live/PvxjRCH39k' },
    { label: 'YouTube',   url: 'https://youtube.com/@gh17mr' },
    { label: 'Telegram',  url: 'https://t.me/gh17mrcom' },
    { label: 'gh17mr@gmail.com', url: 'mailto:gh17mr@gmail.com' },
  ];
}
