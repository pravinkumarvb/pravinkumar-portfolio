export type LanguageCode = 'en' | 'hi';

export interface SocialLinks {
  linkedin: string;
  github: string;
  whatsappNumber: string; // Format: 91XXXXXXXXXX (country code + 10 digits, no + sign)
  email: string;
}

export const SOCIAL_LINKS: SocialLinks = {
  linkedin: 'https://www.linkedin.com/in/pravinkumar-birajdar-57a941bb/', // <-- Replace with your exact LinkedIn URL
  github: 'https://github.com/pravinkumarvb',              // <-- Replace with your exact GitHub URL
  whatsappNumber: '919960700958',                              // <-- Replace with your 10-digit WhatsApp number prefixed with 91
  email: 'pvbirajdar85@gmail.com'                              // <-- Replace with your email
};

export interface PortfolioContent {
  nav: {
    brand: string;
    whyMe: string;
    services: string;
    projects: string;
    contact: string;
    linkedinLabel: string;
    toggleBtn: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    linkedinCta: string;
    trustStats: { value: string; label: string }[];
  };
  whyMe: {
    heading: string;
    subheading: string;
    localDevTitle: string;
    localDevPoints: string[];
    myStandardTitle: string;
    myStandardPoints: string[];
  };
  services: {
    heading: string;
    subheading: string;
    items: {
      icon: string;
      title: string;
      desc: string;
      tech: string;
    }[];
  };
  projects: {
    heading: string;
    subheading: string;
    items: {
      title: string;
      category: string;
      problem: string;
      solution: string;
      impact: string;
      stack: string[];
    }[];
  };
  contact: {
    heading: string;
    subheading: string;
    nameLabel: string;
    phoneLabel: string;
    typeLabel: string;
    typeOptions: string[];
    budgetLabel: string;
    budgetOptions: string[];
    messageLabel: string;
    submitEmailBtn: string;
    submitWhatsAppBtn: string;
    successMsg: string;
  };
  footer: {
    tagline: string;
    linkedinText: string;
    rights: string;
  };
}

export const PORTFOLIO_CONTENT: Record<LanguageCode, PortfolioContent> = {
  en: {
    nav: {
      brand: 'Pravinkumar Birajdar',
      whyMe: 'Why Industry Standard?',
      services: 'Services',
      projects: 'Proven Work',
      contact: 'Get a Quote',
      linkedinLabel: 'LinkedIn',
      toggleBtn: 'हिंदी में पढ़ें'
    },
    hero: {
      badge: '18+ Years Enterprise Software Experience • Solapur & Remote',
      title: 'Enterprise-Grade Software Without Agency Overhead.',
      subtitle:
        'Tired of buggy, half-finished software from inexperienced local developers? Get fast, secure, and scalable Websites, Desktop Applications, and Custom Web Systems built with strict industry architecture—at honest, cost-effective pricing.',
      primaryCta: 'Discuss Your Project',
      secondaryCta: 'See Proven Systems',
      linkedinCta: 'Verify Profile on LinkedIn',
      trustStats: [
        { value: '18+', label: 'Years Coding Experience' },
        { value: '100%', label: 'Direct Architect Access' },
        { value: 'Zero', label: 'Agency Middleman Markup' }
      ]
    },
    whyMe: {
      heading: 'Why Clients Switch to Industry-Standard Engineering',
      subheading: 'Cheap, poorly structured code costs you 3x more when your business grows or data corrupts.',
      localDevTitle: 'Typical Local Freelancer / Cheap Agency',
      localDevPoints: [
        'Copy-paste code with zero architecture—breaks when new features are added',
        'Slow databases and unencrypted data with no automated backup strategy',
        'Disappears after delivery; no documentation or maintainable codebase',
        'Hidden maintenance charges or overpriced agency middlemen'
      ],
      myStandardTitle: 'My Engineering Guarantee (.NET 9 & Angular)',
      myStandardPoints: [
        'Clean Architecture & SOLID principles—built to scale for years without rewrites',
        'High-speed SQL Server optimization, role-based security & automated backups',
        'Direct 1-on-1 communication with the Senior Architect writing your code',
        'Transparent, fixed-milestone pricing that respects your business budget'
      ]
    },
    services: {
      heading: 'What I Build For Your Business',
      subheading: 'End-to-end software engineered for speed, reliability, and daily ease of use.',
      items: [
        {
          icon: 'fa-solid fa-desktop',
          title: 'Windows Desktop Applications',
          desc: 'Ultra-fast offline-first billing, POS, inventory, and ERP software with thermal/barcode printing that runs smoothly even without internet.',
          tech: '.NET 9 • C# • WinForms • SQL Server'
        },
        {
          icon: 'fa-solid fa-layer-group',
          title: 'Custom Web Applications & ERPs',
          desc: 'Cloud-ready business portals, school management systems, HRMS, and multi-branch dashboards accessible from anywhere securely.',
          tech: 'ASP.NET Core 9 • Angular 18 • REST APIs'
        },
        {
          icon: 'fa-solid fa-globe',
          title: 'High-Speed Business Websites',
          desc: 'Modern, mobile-first corporate and product websites engineered for fast loading, SEO visibility, and direct lead conversion.',
          tech: 'Angular 18 • TypeScript • Bootstrap 5'
        }
      ]
    },
    projects: {
      heading: 'Proven Production Systems',
      subheading: 'Real software solving daily operational headaches across schools, retail, and enterprises.',
      items: [
        {
          title: 'SmartSchool ERP Suite',
          category: 'Education Management (Web & Desktop)',
          problem: 'Schools struggled with manual fee registers, delayed certificate generation, and fragmented attendance records.',
          solution: 'Engineered a modular ERP with automated fee receipts, UDISE/Bonafide generation, role-based staff access, and real-time reporting.',
          impact: 'Trusted in production across multiple schools with zero data loss and 70% faster admin workflows.',
          stack: ['.NET 8/9', 'Angular 18', 'SQL Server', 'Clean Architecture']
        },
        {
          title: 'Supermarket & Retail POS Engine',
          category: 'Offline-First Desktop & Inventory',
          problem: 'Internet drops and slow web billing caused long customer queues at checkout counters during peak hours.',
          solution: 'Built a high-speed Windows desktop POS with instant barcode scanning, GST billing, batch stock tracking, and supplier ledgers.',
          impact: 'Sub-second invoice printing and 100% uptime regardless of internet connectivity.',
          stack: ['C# .NET', 'WinForms', 'Dapper', 'SQL Server']
        },
        {
          title: 'HRX Nexus — HRMS & Operations Portal',
          category: 'Enterprise Web Application',
          problem: 'Growing businesses relied on error-prone Excel sheets for employee attendance, payroll, and daily operations.',
          solution: 'Developed a secure browser-based portal with automated payroll rules, audit logs, and exportable management reports.',
          impact: 'Eliminated monthly payroll calculation errors and gave owners live business visibility.',
          stack: ['ASP.NET Core', 'Entity Framework Core', 'Angular 18', 'Bootstrap 5']
        }
      ]
    },
    contact: {
      heading: 'Start Your Project the Right Way',
      subheading: 'Share your requirement below. Get a clear technical plan and honest cost estimate within 24 hours.',
      nameLabel: 'Your Name / Business Name',
      phoneLabel: 'WhatsApp / Mobile Number',
      typeLabel: 'What do you want to build?',
      typeOptions: [
        'Desktop Software (Billing / POS / ERP)',
        'Custom Web Application / Portal',
        'Business Website',
        'Fix / Upgrade Existing Software'
      ],
      budgetLabel: 'Estimated Budget Range',
      budgetOptions: [
        '₹15,000 – ₹35,000',
        '₹35,000 – ₹75,000',
        '₹75,000 – ₹1,50,000+',
        'Not sure yet — Need consultation'
      ],
      messageLabel: 'Briefly describe your requirement',
      submitEmailBtn: 'Send Enquiry via Email',
      submitWhatsAppBtn: 'Send Directly on WhatsApp',
      successMsg: 'Thank you! Your enquiry has been sent. I will contact you shortly.'
    },
    footer: {
      tagline: 'Senior .NET & Angular Software Consultant • Building Reliable Business Systems Since 2007.',
      linkedinText: 'Connect on LinkedIn',
      rights: '© 2026-2027 Pravinkumar Birajdar. All rights reserved.'
    }
  },
  hi: {
    nav: {
      brand: 'प्रविणकुमार बिराजदार',
      whyMe: 'मेरा काम अलग क्यों?',
      services: 'सेवाएं',
      projects: 'प्रोजेक्ट्स',
      contact: 'संपर्क करें',
      linkedinLabel: 'LinkedIn',
      toggleBtn: 'Read in English'
    },
    hero: {
      badge: '18+ वर्षों का इंडस्ट्री सॉफ्टवेयर अनुभव • सोलापुर और रिमोट',
      title: 'बड़ी कंपनियों जैसा मजबूत सॉफ्टवेयर, अब आपके बजट में।',
      subtitle:
        'क्या आप लोकल डेवलपर्स के अधूरे और बार-बार बंद पड़ने वाले सॉफ्टवेयर से परेशान हैं? 18+ वर्षों के इंडस्ट्री अनुभव के साथ अपनी कंपनी के लिए तेज, सुरक्षित और भरोसेमंद Website, Desktop Software या Web Application बनवाएं—बिना किसी एजेंसी कमीशन के।',
      primaryCta: 'अपने प्रोजेक्ट पर बात करें',
      secondaryCta: 'पुराने प्रोजेक्ट्स देखें',
      linkedinCta: 'LinkedIn प्रोफाइल देखें',
      trustStats: [
        { value: '18+', label: 'वर्षों का कोडिंग अनुभव' },
        { value: '100%', label: 'सीधा सीनियर डेवलपर से संपर्क' },
        { value: 'Zero', label: 'एजेंसी का एक्स्ट्रा खर्च' }
      ]
    },
    whyMe: {
      heading: 'बिजनेस मालिक इंडस्ट्री-स्टैंडर्ड सॉफ्टवेयर क्यों चुनते हैं?',
      subheading: 'सस्ता और खराब कोडिंग वाला सॉफ्टवेयर आगे चलकर डेटा लॉस और बिजनेस रुकने का कारण बनता है।',
      localDevTitle: 'सामान्य लोकल डेवलपर / सस्ती एजेंसी',
      localDevPoints: [
        'बिना प्लानिंग का कॉपी-पेस्ट कोड — नया फीचर जोड़ते ही सॉफ्टवेयर क्रैश हो जाता है',
        'धीमा डेटाबेस और डेटा बैकअप की कोई सुरक्षित व्यवस्था नहीं',
        'डिलीवरी के बाद सपोर्ट गायब — कोई डॉक्यूमेंटेशन नहीं मिलता',
        'बड़ी एजेंसियों में सेल्स टीम और ऑफिस खर्च का बोझ ग्राहक पर पड़ता है'
      ],
      myStandardTitle: 'मेरी इंजीनियरिंग गारंटी (.NET 9 और Angular)',
      myStandardPoints: [
        'Clean Architecture — ऐसा मजबूत कोड जो सालों तक बिना रुकावट चलता है',
        'तेज SQL Server डेटाबेस, यूजर सिक्योरिटी और ऑटोमैटिक डेटा बैकअप',
        'कोड लिखने वाले सीनियर आर्किटेक्ट से सीधा 1-on-1 संपर्क',
        'पूरी तरह पारदर्शी और किफायती कीमत — सिर्फ काम के पैसे दें'
      ]
    },
    services: {
      heading: 'मैं आपके बिजनेस के लिए क्या बना सकता हूँ',
      subheading: 'तेज रफ्तार, डेटा सुरक्षा और आसान उपयोग के लिए तैयार किए गए सॉफ्टवेयर समाधान।',
      items: [
        {
          icon: 'fa-solid fa-desktop',
          title: 'Windows Desktop सॉफ्टवेयर',
          desc: 'सुपरमार्केट और दुकानों के लिए तेज Billing, POS, बारकोड और स्टॉक मैनेजमेंट सॉफ्टवेयर जो बिना इंटरनेट के भी 100% चलता है।',
          tech: '.NET 9 • C# • WinForms • SQL Server'
        },
        {
          icon: 'fa-solid fa-layer-group',
          title: 'कस्टम Web Applications और ERP',
          desc: 'स्कूल मैनेजमेंट (ERP), HRMS और मल्टी-ब्रांच बिजनेस पोर्टल जिन्हें आप मोबाइल या कंप्यूटर से कहीं भी सुरक्षित चला सकते हैं।',
          tech: 'ASP.NET Core 9 • Angular 18 • REST APIs'
        },
        {
          icon: 'fa-solid fa-globe',
          title: 'प्रोफेशनल बिजनेस वेबसाइट',
          desc: 'तेज लोड होने वाली, मोबाइल-फ्रेंडली कंपनी और प्रोडक्ट वेबसाइट जो Google पर दिखे और नए ग्राहक लेकर आए।',
          tech: 'Angular 18 • TypeScript • Bootstrap 5'
        }
      ]
    },
    projects: {
      heading: 'सफलतापूर्वक चल रहे प्रोजेक्ट्स',
      subheading: 'असली बिजनेस समस्याओं को हल करने वाले भरोसेमंद सॉफ्टवेयर सिस्टम।',
      items: [
        {
          title: 'SmartSchool ERP सिस्टम',
          category: 'स्कूल मैनेजमेंट (Web और Desktop)',
          problem: 'स्कूलों में फीस रजिस्टर, बोनाफाइड/UDISE सर्टिफिकेट और अटेंडेंस का काम मैनुअल होने से बहुत समय बर्बाद होता था।',
          solution: 'ऑटोमैटिक फीस रसीद, तुरंत सर्टिफिकेट प्रिंटिंग और स्टाफ रोल-सिक्योरिटी के साथ पूरा ERP तैयार किया।',
          impact: 'कई स्कूलों में सफलतापूर्वक कार्यरत — एडमिन के काम में 70% समय की बचत।',
          stack: ['.NET 8/9', 'Angular 18', 'SQL Server', 'Clean Architecture']
        },
        {
          title: 'Supermarket और Retail POS सॉफ्टवेयर',
          category: 'ऑफलाइन-फर्स्ट डेस्कटॉप और स्टॉक सिस्टम',
          problem: 'इंटरनेट धीमा होने पर वेब बिलिंग रुक जाती थी और काउंटर पर ग्राहकों की लंबी लाइन लग जाती थी।',
          solution: 'तुरंत बारकोड स्कैनिंग, GST बिलिंग, स्टॉक ट्रैकिंग और सप्लायर खाता मैनेजमेंट वाला तेज Windows POS बनाया।',
          impact: '1 सेकंड से कम में बिल प्रिंटिंग और बिना इंटरनेट के भी 100% नॉन-स्टॉप काम।',
          stack: ['C# .NET', 'WinForms', 'Dapper', 'SQL Server']
        },
        {
          title: 'HRX Nexus — HRMS और बिजनेस पोर्टल',
          category: 'एंटरप्राइज वेब एप्लिकेशन',
          problem: 'बढ़ते बिजनेस में कर्मचारियों की हाजिरी, सैलरी और रोजमर्रा के हिसाब के लिए Excel शीट्स में गलतियां हो रही थीं।',
          solution: 'ऑटोमैटिक सैलरी कैलकुलेशन, ऑडिट लॉग और मैनेजमेंट रिपोर्ट्स के साथ सुरक्षित वेब पोर्टल बनाया।',
          impact: 'सैलरी की गलतियां पूरी तरह खत्म हुईं और मालिक को लाइव बिजनेस रिपोर्ट मिलने लगी।',
          stack: ['ASP.NET Core', 'Entity Framework Core', 'Angular 18', 'Bootstrap 5']
        }
      ]
    },
    contact: {
      heading: 'अपने प्रोजेक्ट की सही शुरुआत करें',
      subheading: 'नीचे अपनी जरूरत लिखें। 24 घंटे के अंदर सही तकनीकी सलाह और किफायती कोटेशन प्राप्त करें।',
      nameLabel: 'आपका नाम / कंपनी का नाम',
      phoneLabel: 'WhatsApp / मोबाइल नंबर',
      typeLabel: 'आप क्या बनवाना चाहते हैं?',
      typeOptions: [
        'Desktop Software (Billing / POS / ERP)',
        'Custom Web Application / Portal',
        'Business Website',
        'पुराने सॉफ्टवेयर को सुधारना / अपग्रेड करना'
      ],
      budgetLabel: 'अनुमानित बजट (Estimated Budget)',
      budgetOptions: [
        '₹15,000 – ₹35,000',
        '₹35,000 – ₹75,000',
        '₹75,000 – ₹1,50,000+',
        'अभी तय नहीं — सलाह चाहिए'
      ],
      messageLabel: 'अपने प्रोजेक्ट के बारे में संक्षेप में लिखें',
      submitEmailBtn: 'Email पर जानकारी भेजें',
      submitWhatsAppBtn: 'सीधा WhatsApp पर भेजें',
      successMsg: 'धन्यवाद! आपकी जानकारी मिल गई है। मैं जल्द ही आपसे संपर्क करूंगा।'
    },
    footer: {
      tagline: 'सीनियर .NET और Angular सॉफ्टवेयर कंसल्टेंट • 2007 से भरोसेमंद बिजनेस सिस्टम्स का निर्माण।',
      linkedinText: 'LinkedIn पर जुड़ें',
      rights: '© 2026-2027 प्रविणकुमार बिराजदार। सर्वाधिकार सुरक्षित।'
    }
  }
};