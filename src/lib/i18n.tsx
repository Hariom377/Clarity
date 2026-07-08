/**
 * ============================================================
 *  INTERNATIONALIZATION (i18n)
 * ============================================================
 *  - English (en) and Hindi (hi) are fully implemented.
 *  - The dictionary shape is derived from `en`, so adding a new
 *    language is as simple as adding another object that matches.
 *  - Planned: Bengali, Tamil, Telugu, Marathi, Gujarati,
 *    Kannada, Malayalam, Punjabi — add them to `languages` and
 *    provide a matching dictionary.
 * ============================================================
 */

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { brand } from './brand';

/* ----------------------------------------------------------------
 *  English dictionary (source of truth for the type)
 * ---------------------------------------------------------------- */
const en = {
  meta: {
    title: `${brand.name} — Financial App for Irregular Earners`,
    description: brand.description,
  },

  nav: {
    home: 'Home',
    features: 'Features',
    howItWorks: 'How It Works',
    about: 'About',
    faq: 'FAQ',
    contact: 'Contact',
    joinWaitlist: 'Join Waitlist',
    language: 'Language',
    comingSoon: 'Coming Soon',
  },

  hero: {
    label: 'FINANCIAL APP FOR IRREGULAR EARNERS',
    title: 'The Personal Finance App for People with Unstable Income',

    subtitle:
      'Know exactly how much you can safely spend today based on your income pattern and available balance. Built for freelancers, creators, gig workers, and anyone with unpredictable income.',


    ctaPrimary: 'Join Waitlist',
    ctaSecondary: 'See How It Works',
    mockup: {
      title: 'DAILY BRIEF',
      safeSpend: 'Safe spending today',
      balance: 'Balance',
      buffer: 'Emergency Buffer',
      runway: 'Runway',
      goals: 'Goals',
      active: 'active',
      updated: 'Updated 2 min ago · auto-calculated',
      live: 'LIVE',
    },
  },

  problem: {
    label: 'The Reality',
    title: 'Traditional Budgeting Doesnt Work When Your Income Changes Every Month.',
   body1:
      'Most budgeting apps assume you receive the same salary every month.',
    body2:
      '— But Some months are great, others are unpredictable. Without knowing how much you can safely spend today, its easy to overspend, delay savings, or struggle before the next payment arrives.',
    monthLabel: 'Monthly income',
    failLabel: 'Why traditional apps fail',
    failTitle: 'Built for salaries. Not for you.',
    failPoints: [
      'Assume fixed monthly salary.',
      'Ignore changing cash flow.',
      'Dont calculate safe daily spending.',
    ],
  },

  solution: {
    label: 'Meet iRREGO',
    title: 'A personal finance system designed specifically for irregular income.',
    body1:
      'iRREGO reads your income history, calculates your volatility, and tells you exactly how much is safe to spend today — protecting your rent, your goals, and your future in the process.',
    body2:
      '- To help you to understand your finance and staying on track toward your goals.',
    points: [
      { t: 'Income-aware', d: 'Built around your actual income pattern, not a assumed monthly average.' },
      { t: 'Daily safe spend', d: 'One recalculated number every morning so you never overspend by accident.' },
      { t: 'Forward-looking', d: 'Tells you if you can afford something today without hurting next month.' },
      { t: 'Goal-linked', d: 'Your savings goals slow down or speed up automatically based on what you earn.' },
    ],
  },

  trust: {
    label: 'Why You Can Trust This',
    title: 'Your money data stays yours. Period.',
    items: [
      { t: 'Your data, your control', d: 'We never sell, share, or monetize your financial information. Ever.' },
      { t: 'Built on secure infrastructure', d: 'iRREGO runs on Supabase — industry-standard secure cloud infrastructure used by thousands of apps globally.' },
      { t: 'No hidden tracking', d: 'We collect only what the app needs to work. Nothing else runs in the background.' },
      { t: 'You can delete everything', d: 'One tap clears your entire account and data permanently from our servers.' },
    ],
  },

  cta: {
    label: 'Early Access',
    title: 'iRREGO launches soon. Get in early.',
    body: 'Join the waitlist and be the first to know when we go live. No spam. Just one email when we launch.',
    button: 'Join the Waitlist →',
  },

  features: {
    label: 'Features',
    title: 'Features Built for People with Irregular Income.',
    subtitle:
      'Explore the powerful features that help freelancers, creators, gig workers, self-employed professionals, and small business owners confidently manage irregular income, track expenses, plan savings, and know exactly how much they can safely spend today.',
    items: [
      { n: '01', t: 'Safe Spending Today', d: 'Every morning, iRREGO calculates one number based on your actual balance, your upcoming bills, and your income history. That number is what you can spend today without risking tomorrow.', spec: 'OUTPUT  · DAILY  · AUTO-CALCULATED' },
      { n: '02', t: 'Income Tracking', d: 'Log every payment you receive — client transfers, freelance invoices, UPI payments. iRREGO learns your earning pattern over time and uses it to protect you in slow months.', spec: 'Supports irregular payments · Learns your pattern' },
      { n: '03', t: 'Expense Tracking', d: 'iRREGO separates your fixed costs — rent, EMI, subscriptions — from your flexible spending. It protects the fixed ones first, so you never accidentally spend money that was already committed.', spec: 'Fixed costs protected first · Flexible spending tracked' },
      { n: '04', t: 'Goal Planning', d: 'Set a goal — emergency fund, new phone, vacation. iRREGO automatically decides how much to put toward it each month based on what you actually earned. Good month? Faster progress. Slow month? The goal adjusts, not your stress.', spec: 'Auto-adjusts to your income · No manual budgeting' },
      { n: '05', t: 'Emergency Fund Planning', d: 'iRREGO tracks how many months you can survive if income stops completely. It shows you your runway in plain numbers and builds your emergency buffer into every calculation automatically.', spec: 'Shown in months of runway · Built into daily calculation' },
      { n: '06', t: 'Smart Insights', d: 'iRREGO quietly notices things you would never track manually — which months are always low, which clients pay late, where your money actually goes. It shows you patterns, not just numbers.', spec: 'Pattern detection · low-noise' },
      { n: '07', t: 'Financial Health Score', d: 'One score from 0 to 100 that tells you how healthy your finances actually are right now — combining your buffer, your runway, your income stability, and your goal progress into a single honest number.', spec: 'Single score · Updates as your situation changes' },
    ],
  },

  howItWorks: {
    label: 'How iRREGO Works',
    title: 'How iRREGO Helps You Manage Irregular Income in 5 Simple Steps',
    subtitle:
      'You just log your income and expenses. iRREGO does everything else — automatically, every single day.',
    steps: [
      { n: '01', t: 'Track Income', d: 'Every time money comes in — a client payment, a freelance invoice, a UPI transfer — log it in iRREGO. No categories to fill. No forms to complete. Just the amount and who paid you.' },
      { n: '02', t: 'Track Expenses', d: 'Log what you spend. Floww automatically separates your fixed costs — rent, EMI, recharge — from your flexible spending like food and shopping. Your committed bills are always protected first.' },
      { n: '03', t: 'iRREGO Learns Your Pattern', d: 'After a few weeks, iRREGO understands your money pattern. It knows your slow months, your strong months, and your fixed commitments. This is what makes the daily number accurate instead of generic.' },
      { n: '04', t: 'You Get One Number Every Morning', d: 'Every morning, iRREGO shows you exactly how much you can spend today without putting tomorrow at risk. Your rent is safe. Your emergency fund is building. Your goals are on track. One number. No stress.' },
      { n: '05', t: 'You Stop Guessing. You Start Knowing.', d: 'Most freelancers and gig workers spend their whole life anxious about money — not because they earn too little, but because they never know where they stand. iRREGO fixes that. After 30 days, most users report feeling in control of their finances for the first time.' },
    ],
  },

  about: {
    label: 'Our Story',
    title: 'Built by Two Founders Who Faced the Same Problem as Millions of Irregular Earners.',
    founderLabel: 'The Founders Story',
    founderStory: [
      'It started with Two Irregular Income Guy — Hariom And Amit with a simple question: "How much can I safely spend today?"',
      'As freelancers and builders, we experienced the uncertainty of irregular income firsthand. Some months were great, while others were unpredictable. Traditional budgeting apps expected a fixed monthly salary, but our reality was completely different.',
      'The problem was never how much We earned. The problem was never knowing how much we could safely spend today. A good month would feel like freedom. Then rent and subscriptions would hit together, and suddenly the math did not add up.',
      'After trying budgeting apps, spreadsheets, and manual calculations, we found none were designed for freelancers, creators, gig workers, or self-employed professionals with unpredictable income.',
      'Thats why we started building iRREGO—a personal finance companion that helps people with irregular income understand their daily spending limit, manage cash flow, achieve financial goals, and build long-term financial stability.',
    ],
    whyLabel: 'Why We Exist',
    whyTitle: 'Financial tools should work for everyone—not just salaried employees.',
    whyBody:
      'India has over 15 million freelancers and more than 7 million registered gig workers on platforms like Swiggy, Zomato, Urban Company, and Fiverr. That number is growing every year. Yet every personal finance app in the Indian market still assumes a fixed monthly salary. iRREGO is built specifically for people whose income arrives in bursts — and who deserve the same financial iRREGO as everyone else.',
    missionLabel: 'Mission',
    mission:
      'Help millions of people with irregular income make smarter financial decisions every day.',
    visionLabel: 'Vision',
    vision:
      'Become the worlds most trusted personal finance platform for freelancers, creators, gig workers, and self-employed professionals.',
    valuesLabel: 'Values',
    values: [
      { t: 'Simplicity', d: 'Personal finance should be simple enough that anyone can understand it in seconds.' },
      { t: 'Trust', d: 'We earn trust by protecting user privacy, being transparent, and always putting users first.' },
      { t: 'Transparency', d: 'We explain exactly how iRREGO calculates your daily number. No black box.' },
      { t: 'Privacy', d: 'Your income, your expenses, your data. We never sell it, share it, or use it for ads.' },
      { t: 'Long-term thinking', d: 'We are building iRREGO to serve the next generation of freelancers and irregular earners for decades to come.' },
    ],
  },

  waitlist: {
    label: 'JOIN THE WAITLIST',
    title: 'iRREGO is launching soon. Get your spot now.',
    body: 'We are two founders from Varanasi building the finance app Indian freelancers and gig workers actually need. Join the waitlist and we will notify you the moment iRREGO goes live.',
    benefitsLabel: 'What you get',
    benefits: [
      { t: 'Early Access', d: 'You get the app before the public launch.' },
      { t: 'Beta Testing', d: 'Help us improve the app before it goes live. Your feedback shapes the product.' },
      { t: 'Product Notification ', d: 'One email when iRREGO is live. No spam before that.' },
      { t: 'Founder Updates', d: ' Occasional notes from Amit and Hariom on what we are building and why.' },
      { t: 'Free Premium Trial ', d: 'Early waitlist members get 3 months of iRREGO premium free at launch.' },
    ],
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      profession: 'Profession (optional)',
      professionPlaceholder: 'Select your profession',
      submit: 'Join the waitlist',
      loading: 'Joining…',
      successTitle: "You're on the list.",
      successBody: "We'll keep you updated as we build the future of financial iRREGO.",
      again: '← Add another',
      countLabel: 'people on the list',
      errName: 'Please enter your name.',
      errEmail: 'Please enter a valid email.',
      dup: 'You are already on the list.',
      netError: 'Network error. Please try again.',
    },
    professions: [
      'Freelancer',
      'Content Creator',
      'Designer',
      'Developer',
      'Digital Marketer',
      'Consultant',
      'Agency Owner',
      'Gig Worker',
      'Delivery Partner',
      'Self-employed',
      'Student with side income',
      'Other',
    ],
  },

  faq: {
    label: 'FAQ',
    title: 'Questions, answered plainly.',
    items: [

      { q: 'Who is it built for?', a: 'For Unstable Income Users, Freelancers, creators, designers, developers, consultants, agency owners, gig workers, delivery partners, self-employed professionals and students with side income — anyone whose income does not arrive on a fixed schedule.' },
      { q: 'Why not use spreadsheets?', a: 'Spreadsheets are manual and backward-looking. They record what happened, but they do not compute what is safe to do next. For an irregular earner, the question is never "what did I spend last month" — it is "how much can I spend today without breaking my runway." That requires a system, not a grid.' },
      { q: 'How is this different from expense trackers?', a: 'Expense trackers tell you what you already spent. That is looking backward. iRREGO tells you what you can safely spend today — that is looking forward. The difference is the same as a rear-view mirror versus a windshield. Both matter, but only one helps you avoid the crash.' },
      { q: 'Is my data secure?', a: 'Yes. iRREGO is built on Supabase, an industry-standard secure cloud platform. Your data is encrypted and stored safely. We do not sell it, share it, or use it for advertising. You can delete your entire account and all your data permanently at any time from the app settings.' },
      { q: 'When is the launch?', a: 'Early access is opening soon. The core engine is in private testing now. Join the waitlist to be notified the moment it opens.' },
      { q: 'Will there be a mobile app?', a: 'Yes. The system is being built cross-platform from day one — a native mobile app for daily use and a web dashboard for the deeper view.' },
      { q: 'Will there be a web dashboard?', a: 'Yes. A web dashboard is planned so you can check your finances from any browser, not just your phone. The website you are reading right now is the beginning of that. Full dashboard access will be available after launch.' },
      { q: 'Will it remain free?', a: 'iRREGO will launch as a free app with core features available to everyone. A premium plan with advanced insights, goal tracking, and financial health scoring will be available at a small monthly fee. Everyone on the waitlist gets 3 months of premium free when we launch.' },
      { q: ' Is this app only for English speakers?', a: 'iRREGO currently supports English. Hindi and regional language support is on our roadmap. If you want Hindi support prioritized, tell us when you join the waitlist.' },
      { q: '  I am a student with a part-time income. Is Floww for me', a: 'Yes. If you earn from freelancing, tutoring, YouTube, Instagram, or any irregular source — iRREGO is built for you. You do not need a fixed salary to use it. You just need income that varies, which is exactly the problem Floww solves.' },
    ],
  },

  contact: {
    label: 'Contact',
    title: 'Let’s talk.',
    body: 'Whether you have a question, a partnership idea, or need support — we read every message.',
    categories: [
      { t: 'General Inquiries', d: 'Anything you want to know about the platform.' },
      { t: 'Partnerships', d: 'Integrations, media, and collaboration opportunities.' },
      { t: 'Support', d: 'Help with your account or the waitlist.' },
    ],
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      category: 'Category',
      message: 'Message',
      messagePlaceholder: 'Tell us what’s on your mind…',
      send: 'Send message',
      sending: 'Sending…',
      successTitle: 'Message sent.',
      successBody: 'We’ll get back to you shortly. Check your inbox for a reply.',
      again: '← Send another',
      errName: 'Please enter your name.',
      errEmail: 'Please enter a valid email.',
      errMessage: 'Please enter a message.',
      netError: 'Network error. Please try again.',
    },
  },

  comingSoon: {
    label: 'Coming Soon',
    title: 'This is part of the roadmap.',
    body: 'This page is being built. It is part of the platform’s future-ready architecture — wired in and ready to ship when the time comes.',
    back: '← Back to home',
  },

  footer: {
    tagline: 'A financial operating system for people whose income is unpredictable.',
    product: 'Product',
    company: 'Company',
    resources: 'Future',
    contact: 'Contact',
    comingSoon: 'Coming soon',
    rights: 'All rights reserved.',
    builtFor: 'Built for irregular earners.',
  },

  common: {
    loading: 'Loading…',
  },
};

/* ----------------------------------------------------------------
 *  Hindi dictionary — same shape as `en`
 * ---------------------------------------------------------------- */
const hi: typeof en = {
  meta: {
    title: `${brand.name} — अनियमित आय वालों के लिए वित्तीय ऑपरेटिंग सिस्टम`,
    description: brand.description,
  },

  nav: {
    home: 'होम',
    features: 'फ़ीचर्स',
    howItWorks: 'यह कैसे काम करता है',
    about: 'हमारे बारे में',
    faq: 'सामान्य प्रश्न',
    contact: 'संपर्क',
    joinWaitlist: 'वेटलिस्ट जॉइन करें',
    language: 'भाषा',
    comingSoon: 'जल्द आ रहा है',
  },

  hero: {
    label: 'वित्तीय ऑपरेटिंग सिस्टम',
    title: 'आज आप कितना सुरक्षित खर्च कर सकते हैं, बिल्कुल जानें।',
    subtitle:
      'फ्रीलांसर्स, क्रिएटर्स और अनियमित आय वाले लोगों के लिए एक वित्तीय ऑपरेटिंग सिस्टम जिन्हें अपने पैसे पर स्पष्टता, आत्मविश्वास और नियंत्रण चाहिए।',
    ctaPrimary: 'वेटलिस्ट जॉइन करें',
    ctaSecondary: 'यह कैसे काम करता है',
    mockup: {
      title: 'दैनिक सारांश',
      safeSpend: 'आज सुरक्षित खर्च',
      balance: 'बैलेंस',
      buffer: 'बफ़र',
      runway: 'रनवे',
      goals: 'लक्ष्य',
      active: 'सक्रिय',
      updated: '2 मिनट पहले अपडेट · स्वतः-गणना',
      live: 'लाइव',
    },
  },

  problem: {
    label: 'असलियत',
    title: 'आपकी आय एक तय समय पर नहीं आती।',
    body1:
      'ज़्यादातर फ़ाइनेंस ऐप्स एक नियमित मासिक वेतन मानते हैं। फ्रीलांसर्स, क्रिएटर्स और स्वतंत्र कामगार एक अलग असलियत में जीते हैं — आय बहुत बदलती है, जबकि खर्च तय रहते हैं।',
    body2:
      'पारंपरिक बजटिंग टूल्स तब टूट जाते हैं जब आपकी आय गिरती है। वे किसी ऐसी दुनिया के लिए बने ही नहीं थे जहाँ एक महीने ₹65,000 आते हैं और अगले महीने सिर्फ़ ₹18,000।',
    monthLabel: 'मासिक आय',
    failLabel: 'पारंपरिक ऐप क्यों विफल होते हैं',
    failTitle: 'वेतन के लिए बने। आपके लिए नहीं।',
    failPoints: [
      'एक तय मासिक आय मानते हैं जो मौजूद ही नहीं है।',
      'तय राशियाँ बाँटते हैं जो आय गिरने पर टूट जाती हैं।',
      'पीछे की रिपोर्ट देखते हैं, आगे की सुरक्षा नहीं बताते।',
    ],
  },

  solution: {
    label: 'समाधान',
    title: 'अनियमित आय को संभालने का एक स्मार्ट तरीका।',
    body1:
      'आपकी अनियमित आय को एक मासिक बजट में घुसाने के बजाय, सिस्टम आपकी असली आय के पैटर्न सीखता है और हर दिन एक भरोसेमंद अंक देता है।',
    body2:
      'कोई कैटेगरी भरनी नहीं। कोई लिफ़ाफ़ा बैलेंस नहीं। बस एक जवाब उस एक सवाल का जो सबसे ज़रूरी है: आज मैं कितना सुरक्षित खर्च कर सकता हूँ?',
    points: [
      { t: 'आय-जागरूक', d: 'मासिक औसत नहीं, आय के उतार-चढ़ाव पर बना।' },
      { t: 'दैनिक स्पष्टता', d: 'हर दिन फिर से गणना होने वाला सुरक्षित-खर्च अंक।' },
      { t: 'आगे की सोच', d: 'क्या हुआ नहीं, क्या सुरक्षित है वह बताता है।' },
      { t: 'अनुकूल', d: 'धीमा महीना लक्ष्य धीमा करता है। तेज़ महीना तेज़।' },
    ],
  },

  trust: {
    label: 'भरोसा क्यों करें',
    title: 'प्राइवेसी पहले। डिज़ाइन से सुरक्षित। आपके लिए बना।',
    items: [
      { t: 'प्राइवेसी पहले', d: 'आपका डेटा आपका है। हम उसे कभी नहीं बेचते, बाँटते या आपके खिलाफ़ इस्तेमाल करते।' },
      { t: 'सुरक्षित ढाँचा', d: 'ट्रांज़िट और रेस्ट में बैंक-स्तरीय एन्क्रिप्शन। आपका सिग्नल शुरू से अंत तक सुरक्षित।' },
      { t: 'पारदर्शी नीतियाँ', d: 'साफ़, सीधी भाषा। कोई छुपा हुआ ट्रैकिंग नहीं, कोई धोखा नहीं।' },
      { t: 'उपयोगकर्ता-प्रथम', d: 'हर निर्णय एक सवाल पर परखा जाता है: क्या यह उपयोगकर्ता के लिए अच्छा है? नहीं, तो नहीं भेजते।' },
    ],
  },

  cta: {
    label: 'अर्ली एक्सेस',
    title: 'अंदाज़ा लेना बंद करें। जानना शुरू करें।',
    body: 'वेटलिस्ट जॉइन करें और अनियमित आय वालों के लिए बनी वित्तीय स्पष्टता को सबसे पहले अनुभव करें।',
    button: 'वेटलिस्ट जॉइन करें →',
  },

  features: {
    label: 'फ़ीचर्स',
    title: 'सात मॉड्यूल। एक ऑपरेटिंग सिस्टम।',
    subtitle:
      'हर मॉड्यूल सिस्टम का एक अलग हिस्सा है। वे मिलकर हर दिन एक ही नतीजा देते हैं: यह जानना कि कितना खर्च सुरक्षित है।',
    items: [
      { n: '01', t: 'आज सुरक्षित खर्च', d: 'आपकी असली वित्तीय स्थिति से हर दिन गणना होने वाला एक खर्च करने लायक अंक। उसी सवाल का जवाब जो सबसे ज़रूरी है।', spec: 'आउटपुट · दैनिक · स्वतः-गणना' },
      { n: '02', t: 'आय ट्रैकिंग', d: 'हर जमा, इनवॉइस और भुगतान कैप्चर और वर्गीकृत। अनियमित आय एक भरोसेमंद सिग्नल में बदलती है।', spec: 'स्वतः-वर्गीकरण · 90-दिन सिग्नल' },
      { n: '03', t: 'खर्च ट्रैकिंग', d: 'आवर्ती और परिवर्तनीय खर्च अलग। सिस्टम सीखता है क्या तय है और क्या लचीला, और तय को पहले सुरक्षित रखता है।', spec: 'तय बनाम लचीला · सीखा हुआ' },
      { n: '04', t: 'लक्ष्य योजना', d: 'लक्ष्य आय के अनुपात में फंड होते हैं। धीमा महीना लक्ष्य धीमा करता है। तेज़ महीना तेज़। प्रगति असलियत के साथ चलती है।', spec: 'अनुपातिक फंडिंग · अनुकूल' },
      { n: '05', t: 'आपातकालीन फंड योजना', d: 'रनवे के महीनों में मापा गया एक जीवंत बफ़र लक्ष्य। सिस्टम आपकी सेहत पर नज़र रखता है और हर गणना में गैप शामिल करता है।', spec: 'लक्ष्य · महीने · सेहत-स्कोर' },
      { n: '06', t: 'स्मार्ट इनसाइट्स', d: 'पैटर्न चुपचाप सामने आते हैं: कौन-सा क्लाइंट देर से देता है, कौन-सा महीना खाली करता है, पैसे का असली रास्ता। सिग्नल, शोर नहीं।', spec: 'पैटर्न पहचान · कम-शोर' },
      { n: '07', t: 'वित्तीय सेहत स्कोर', d: 'एक स्कोर जो पूरी वित्तीय स्थिति दिखाता है — बफ़र, रनवे, आय स्थिरता और लक्ष्य प्रगति एक अंक में।', spec: 'कंपोज़िट · 0–100' },
    ],
  },

  howItWorks: {
    label: 'यह कैसे काम करता है',
    title: 'अव्यवस्था से स्पष्टता तक, पाँच कदम में।',
    subtitle:
      'सिस्टम एक लगातार लूप चलाता है — ट्रैक करें, विश्लेषण करें, सुझाएं, सुधारें — ताकि हर दिन एक साफ़, भरोसेमंद अंक से शुरू हो।',
    steps: [
      { n: '01', t: 'आय ट्रैक करें', d: 'हर जमा, इनवॉइस और भुगतान स्वतः कैप्चर और वर्गीकृत होता है। अनियमित आय एक स्थिर, भरोसेमंद सिग्नल बन जाती है।' },
      { n: '02', t: 'खर्च ट्रैक करें', d: 'आवर्ती और परिवर्तनीय खर्च अलग होते हैं। सिस्टम सीखता है क्या ज़रूरी है और क्या लचीला, ज़रूरी को पहले सुरक्षित रखता है।' },
      { n: '03', t: 'सिस्टम पैटर्न विश्लेषण करता है', d: 'इंजन आपकी आय और खर्च का एक रोलिंग मॉडल बनाता है, हाल का इतिहास ज़्यादा भार देता है और उतार-चढ़ाव को छुपाने के बजाय सम्मान देता है।' },
      { n: '04', t: 'स्मार्ट सुझाव पाएं', d: 'हर दिन आपको एक सुरक्षित-खर्च अंक मिलता है, साथ में लक्ष्य, बफ़र और रनवे पर मार्गदर्शन — सब आपके असली अंकों पर।' },
      { n: '05', t: 'वित्तीय आत्मविश्वास बढ़ाएं', d: 'धीरे-धीरे अनिश्चितता खत्म होती है। अंदाज़ा लेना बंद। बिल्कुल जानना शुरू कि आप कहाँ हैं और आगे क्या सुरक्षित है।' },
    ],
  },

  about: {
    label: 'हमारे बारे में',
    title: 'पेचेक के बीच जीने वालों ने बनाया।',
    founderLabel: 'संस्थापक की कहानी',
    founderStory: [
      'शुरुआत वैसे ही हुई जैसे ज़्यादातर चीज़ें — एक समस्या से जो जाने का नाम नहीं लेती थी।',
      'सालों तक संस्थापक एक स्वतंत्र सलाहकार के रूप में काम करता रहा। कुछ महीनों में इतना पैसा आता कि समझ नहीं आता क्या करें। और कुछ में कुछ नहीं, और एक चुप डर जो तीसरे हफ़्ते के आस-पास बैठ जाता।',
      'स्प्रेडशीट आज़माई। बजटिंग ऐप आज़माए। लिफ़ाफ़ा तरीका, 50/30/20 नियम, ज़ीरो-बेस्ड बजट — सब आज़माए। हर एक पहला सवाल एक ही था: आपकी मासिक आय क्या है?',
      'उनके पास कोई मासिक आय नहीं थी। और लाखों फ्रीलांसर्स, क्रिएटर्स, सलाहकारों, गिग वर्कर्स और साइड-इनकम वालों के पास भी नहीं — जिन्हें ऐसे टूल्स से पैसे संभालने को कहा जाता है जो उनके लिए बने ही नहीं।',
      'तो सवाल बदला — बजट कैसे बनाएँ से यह कि: आज मैं कितना सुरक्षित खर्च कर सकता हूँ? एक सवाल जिसका असली, गणनीय जवाब है — बशर्ते सही सिस्टम हो।',
      'यह वही सिस्टम है।',
    ],
    whyLabel: 'हम क्यों मौजूद हैं',
    whyTitle: 'अनियमित आय वालों को बेहतर वित्तीय टूल्स मिलने चाहिए।',
    whyBody:
      'आज की कार्यशक्ति बदल रही है। ज़्यादा लोग इनवॉइस पर, गिग पर, ऐसी शर्तों पर कमाते हैं जिन्हें कोई वेतन नहीं नाप सकता। फिर भी उनके टूल्स वेतन वाली दुनिया से आए हैं। हम इसी गैप को भरने आए हैं।',
    missionLabel: 'मिशन',
 mission: 'अनिश्चित आय के बावजूद लाखों लोगों को वित्तीय स्थिरता तक पहुँचाना।',
    visionLabel: 'विज़न',
    vision:
      'एक वित्तीय ऑपरेटिंग सिस्टम जो स्वतंत्र काम का डिफ़ॉल्ट तल बन जाए — उतना ही अदृश्य और ज़रूरी जितना वह ऑपरेटिंग सिस्टम जिस पर वह चलता है।',
    valuesLabel: 'मूल्य',
    values: [
      { t: 'सरलता', d: 'एक अंक, स्प्रेडशीट नहीं। हमेशा स्पष्टता, जटिलता से ऊपर।' },
      { t: 'भरोसा', d: 'पारदर्शिता से कमाया, कभी माना या माँगा नहीं।' },
      { t: 'पारदर्शिता', d: 'सीधी भाषा। खुला लॉजिक। कोई छुपा हुआ तंतर नहीं।' },
      { t: 'प्राइवेसी', d: 'आपका डेटा आपका है। हम उसे अपनी तरह सुरक्षित रखते हैं।' },
      { t: 'दीर्घकालिक सोच', d: 'हम दशकों के लिए बनते हैं, अगले फंडिंग राउंड के लिए नहीं।' },
    ],
  },

  waitlist: {
    label: 'अर्ली एक्सेस',
    title: 'वित्तीय स्पष्टता अनुभव करने वालों में पहले रहें।',
    body: 'हम खुले में बना रहे हैं। वेटलिस्ट जॉइन करें और हम आपको अपडेट रखेंगे जैसे-जैसे सिस्टम आकार लेता है।',
    benefitsLabel: 'आपको क्या मिलेगा',
    benefits: [
      { t: 'अर्ली एक्सेस', d: 'प्रोडक्ट खुलने पर सबसे पहले कतार में।' },
      { t: 'बीटा टेस्टिंग', d: 'लॉन्च से पहले टेस्ट करके प्रोडक्ट को आकार दें।' },
      { t: 'प्रोडक्ट अपडेट्स', d: 'बिल्ड को चलते देखें।' },
      { t: 'संस्थापक अपडेट्स', d: 'संस्थापक के नोट्स, सीधे आपके इनबॉक्स में।' },
      { t: 'फ़ीचर प्रीव्यू', d: 'नए मॉड्यूल सबसे पहले देखें।' },
    ],
    form: {
      name: 'नाम',
      namePlaceholder: 'आपका नाम',
      email: 'ईमेल',
      emailPlaceholder: 'you@email.com',
      profession: 'पेशा (वैकल्पिक)',
      professionPlaceholder: 'अपना पेशा चुनें',
      submit: 'वेटलिस्ट जॉइन करें',
      loading: 'जॉइन हो रहा है…',
      successTitle: 'आप सूची में हैं।',
      successBody: 'जैसे-जैसे हम वित्तीय स्पष्टता का भविष्य बनाते हैं, आपको अपडेट रखेंगे।',
      again: '← एक और जोड़ें',
      countLabel: 'लोग सूची में हैं',
      errName: 'कृपया अपना नाम दर्ज करें।',
      errEmail: 'कृपया एक मान्य ईमेल दर्ज करें।',
      dup: 'आप पहले से सूची में हैं।',
      netError: 'नेटवर्क त्रुटि। कृपया पुनः प्रयास करें।',
    },
    professions: [
      'फ्रीलांसर',
      'कंटेंट क्रिएटर',
      'डिज़ाइनर',
      'डेवलपर',
      'डिजिटल मार्केटर',
      'सलाहकार',
      'एजेंसी ओनर',
      'गिग वर्कर',
      'डिलीवरी पार्टनर',
      'स्वरोजगार',
      'साइड इनकम वाला छात्र',
      'अन्य',
    ],
  },

  faq: {
    label: 'सामान्य प्रश्न',
    title: 'सवाल, साफ़-साफ़ जवाब।',
    items: [
      { q: 'स्प्रेडशीट क्यों नहीं?', a: 'स्प्रेडशीट मैनुअल और पीछे की ओर होती हैं। वे रिकॉर्ड करती हैं क्या हुआ, लेकिन यह नहीं बताती कि आगे क्या सुरक्षित है। अनियमित आय वाले का सवाल कभी यह नहीं कि पिछले महीने क्या खर्च हुआ — बल्कि यह कि आज कितना खर्च करूँ जिससे रनवे न टूटे। इसके लिए सिस्टम चाहिए, ग्रिड नहीं।' },
      { q: 'खर्च ट्रैकर से यह अलग कैसे?', a: 'खर्च ट्रैकर रिकॉर्ड करते हैं क्या खर्च हुआ। वे नहीं बताते आगे क्या सुरक्षित है। यह प्लेटफ़ॉर्म आपकी असली, अनियमित आय से एक दैनिक सुरक्षित-खर्च अंक गणना करता है — कोई मासिक औसत नहीं। यह आगे की सोच वाली इंटेलिजेंस है, पीछे की लॉग नहीं।' },
      { q: 'क्या मेरा डेटा सुरक्षित है?', a: 'आपका डेटा ट्रांज़िट और रेस्ट में एन्क्रिप्टेड है। सिस्टम आपका वित्तीय सिग्नल पढ़ता है सुरक्षित खर्च गणना के लिए — वह डेटा नहीं बेचता, बाँटता या उजागर करता। आप कभी भी डेटा डिलीट कर सकते हैं।' },
      { q: 'लॉन्च कब होगा?', a: 'अर्ली एक्सेस जल्द खुल रहा है। कोर इंजन अभी प्राइवेट टेस्टिंग में है। जॉइन करें और जैसे ही खुले, सूचित करेंगे।' },
      { q: 'क्या मोबाइल ऐप होगा?', a: 'हाँ। सिस्टम पहले दिन से क्रॉस-प्लेटफ़ॉर्म बन रहा है — दैनिक उपयोग के लिए नेटिव मोबाइल ऐप और गहरे नज़रिए के लिए वेब डैशबोर्ड।' },
      { q: 'क्या वेब डैशबोर्ड होगा?', a: 'हाँ। मोबाइल ऐप के साथ एक पूरा वेब डैशबोर्ड होगा जो फ़ोरकास्टिंग, इनसाइट्स और लक्ष्य योजना एक नज़र में देगा।' },
      { q: 'क्या यह मुफ़्त रहेगा?', a: 'कोर सुरक्षित-खर्च इंजन व्यक्तिगत अनियमित आय वालों के लिए मुफ़्त रहेगा। एडवांस्ड फ़ोरकास्टिंग और इनसाइट्स भविष्य के प्रीमियम टियर का हिस्सा हो सकते हैं, लेकिन वह दैनिक स्पष्टता जो सबसे ज़रूरी है वह हमेशा उपलब्ध रहेगी।' },
      { q: 'यह किसके लिए बना है?', a: 'फ्रीलांसर्स, क्रिएटर्स, डिज़ाइनर्स, डेवलपर्स, सलाहकारों, एजेंसी ओनर्स, गिग वर्कर्स, डिलीवरी पार्टनर्स, स्वरोजगार पेशेवरों और साइड इनकम वाले छात्रों के लिए — जिस किसी की आय तय समय पर नहीं आती।' },
    ],
  },

  contact: {
    label: 'संपर्क',
    title: 'बात करते हैं।',
    body: 'चाहे आपका सवाल हो, साझेदारी का विचार हो, या सहायता चाहिए — हम हर संदेश पढ़ते हैं।',
    categories: [
      { t: 'सामान्य पूछताछ', d: 'प्लेटफ़ॉर्म के बारे में कुछ भी जानना चाहें।' },
      { t: 'साझेदारी', d: 'इंटीग्रेशन, मीडिया और सहयोग के मौके।' },
      { t: 'सहायता', d: 'आपके अकाउंट या वेटलिस्ट में मदद।' },
    ],
    form: {
      name: 'नाम',
      namePlaceholder: 'आपका नाम',
      email: 'ईमेल',
      emailPlaceholder: 'you@email.com',
      category: 'श्रेणी',
      message: 'संदेश',
      messagePlaceholder: 'बताइए आपके मन में क्या है…',
      send: 'संदेश भेजें',
      sending: 'भेजा जा रहा है…',
      successTitle: 'संदेश भेज दिया।',
      successBody: 'हम जल्द जवाब देंगे। अपने इनबॉक्स देखते रहें।',
      again: '← एक और भेजें',
      errName: 'कृपया अपना नाम दर्ज करें।',
      errEmail: 'कृपया एक मान्य ईमेल दर्ज करें।',
      errMessage: 'कृपया एक संदेश दर्ज करें।',
      netError: 'नेटवर्क त्रुटि। कृपया पुनः प्रयास करें।',
    },
  },

  comingSoon: {
    label: 'जल्द आ रहा है',
    title: 'यह रोडमैप का हिस्सा है।',
    body: 'यह पेज बनाया जा रहा है। यह प्लेटफ़ॉर्म के फ़्यूचर-रेडी ढाँचे का हिस्सा है — जुड़ा हुआ और समय आने पर भेजने के लिए तैयार।',
    back: '← होम पर वापस',
  },

  footer: {
    tagline: 'अनियमित आय वाले लोगों के लिए एक वित्तीय ऑपरेटिंग सिस्टम।',
    product: 'प्रोडक्ट',
    company: 'कंपनी',
    resources: 'भविष्य',
    contact: 'संपर्क',
    comingSoon: 'जल्द आ रहा है',
    rights: 'सर्वाधिकार सुरक्षित।',
    builtFor: 'अनियमित आय वालों के लिए बना।',
  },

  common: {
    loading: 'लोड हो रहा है…',
  },
};

/* ----------------------------------------------------------------
 *  Supported languages.
 *  To add a language: add its code + label here and provide a
 *  matching dictionary above (same shape as `en`).
 * ---------------------------------------------------------------- */
export const languages = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'hi', label: 'हिन्दी', short: 'HI' },
  // Planned — dictionaries not yet implemented:
  // { code: 'bn', label: 'বাংলা', short: 'BN' },
  // { code: 'ta', label: 'தமிழ்', short: 'TA' },
  // { code: 'te', label: 'తెలుగు', short: 'TE' },
  // { code: 'mr', label: 'मराठी', short: 'MR' },
  // { code: 'gu', label: 'ગુજરાતી', short: 'GU' },
  // { code: 'kn', label: 'ಕನ್ನಡ', short: 'KN' },
  // { code: 'ml', label: 'മലയാളം', short: 'ML' },
  // { code: 'pa', label: 'ਪੰਜਾਬੀ', short: 'PA' },
] as const;

export type LangCode = (typeof languages)[number]['code'];
export type Dictionary = typeof en;

const dictionaries: Record<string, Dictionary> = { en, hi };

/* ----------------------------------------------------------------
 *  Context + hook
 * ---------------------------------------------------------------- */
type I18nContextValue = {
  lang: string;
  setLang: (l: string) => void;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue>({
  lang: brand.defaultLang,
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<string>(() => {
    if (typeof window === 'undefined') return brand.defaultLang;
    return localStorage.getItem('iRREGO-lang') || brand.defaultLang;
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('iRREGO-lang', lang);
  }, [lang]);

  const setLang = (l: string) => setLangState(l);
  const t = dictionaries[lang] || en;

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
