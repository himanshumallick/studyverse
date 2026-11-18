/**
 * STUDYVERSE - Main High-Performance Platform Engine
 * Zero external dependencies. Silky 60 FPS performance on 4GB RAM & dual-core systems.
 * Fully compatible with file:/// local double-click and live HTTP servers.
 */

/* ========================================================================== */
/* DATA LAYER (Modular Curriculum & Study Resources)                         */
/* ========================================================================== */

const SUBJECTS_DATA = [
  {
    id: 'mathematics',
    name: 'Mathematics',
    hindiName: 'गणित (Mathematics)',
    code: '041 / 241',
    category: 'Core STEM',
    chaptersCount: 14,
    notesCount: 28,
    formulasCount: 14,
    questionsCount: 150,
    gradient: 'linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)',
    iconColor: '#38bdf8',
    iconBg: 'rgba(56, 189, 248, 0.12)',
    iconBorder: 'rgba(56, 189, 248, 0.3)',
    description: 'Master Real Numbers, Polynomials, Trigonometry, Coordinate Geometry, and Surface Areas with step-by-step theorem proofs and formula sheets.',
    hindiDescription: 'वास्तविक संख्याएँ, बहुपद, त्रिकोणमिति, निर्देशांक ज्यामिति और पृष्ठीय क्षेत्रफल के सम्पूर्ण सूत्र और हल।',
    chapters: [
      { id: 'math-ch1', num: 1, title: 'Real Numbers', highYield: true, marks: '6 Marks' },
      { id: 'math-ch2', num: 2, title: 'Polynomials', highYield: false, marks: '4 Marks' },
      { id: 'math-ch3', num: 3, title: 'Pair of Linear Equations in Two Variables', highYield: true, marks: '6 Marks' },
      { id: 'math-ch4', num: 4, title: 'Quadratic Equations', highYield: true, marks: '6 Marks' },
      { id: 'math-ch5', num: 5, title: 'Arithmetic Progressions', highYield: true, marks: '5 Marks' },
      { id: 'math-ch6', num: 6, title: 'Triangles', highYield: true, marks: '8 Marks' },
      { id: 'math-ch7', num: 7, title: 'Coordinate Geometry', highYield: false, marks: '6 Marks' },
      { id: 'math-ch8', num: 8, title: 'Introduction to Trigonometry', highYield: true, marks: '8 Marks' },
      { id: 'math-ch9', num: 9, title: 'Some Applications of Trigonometry (Heights & Distances)', highYield: true, marks: '4 Marks' },
      { id: 'math-ch10', num: 10, title: 'Circles', highYield: true, marks: '6 Marks' },
      { id: 'math-ch11', num: 11, title: 'Areas Related to Circles', highYield: false, marks: '4 Marks' },
      { id: 'math-ch12', num: 12, title: 'Surface Areas and Volumes', highYield: true, marks: '6 Marks' },
      { id: 'math-ch13', num: 13, title: 'Statistics', highYield: true, marks: '7 Marks' },
      { id: 'math-ch14', num: 14, title: 'Probability', highYield: false, marks: '4 Marks' }
    ]
  },
  {
    id: 'science',
    name: 'Science',
    hindiName: 'विज्ञान (Science)',
    code: '086',
    category: 'Physics, Chemistry, Biology',
    chaptersCount: 13,
    notesCount: 32,
    formulasCount: 10,
    questionsCount: 180,
    gradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    iconColor: '#34d399',
    iconBg: 'rgba(16, 185, 129, 0.12)',
    iconBorder: 'rgba(16, 185, 129, 0.3)',
    description: 'Crisp diagrams for Life Processes, balanced reactions for Chemistry, and ray diagrams + circuit formulas for Physics.',
    hindiDescription: 'जैव प्रक्रम के स्वच्छ चित्र, रासायनिक अभिक्रियाएँ और भौतिक विज्ञान के किरण आरेख व परिपथ सूत्र।',
    chapters: [
      { id: 'sci-ch1', num: 1, title: 'Chemical Reactions and Equations', highYield: true, marks: '5 Marks' },
      { id: 'sci-ch2', num: 2, title: 'Acids, Bases and Salts', highYield: true, marks: '6 Marks' },
      { id: 'sci-ch3', num: 3, title: 'Metals and Non-metals', highYield: true, marks: '7 Marks' },
      { id: 'sci-ch4', num: 4, title: 'Carbon and its Compounds', highYield: true, marks: '7 Marks' },
      { id: 'sci-ch5', num: 5, title: 'Life Processes', highYield: true, marks: '9 Marks' },
      { id: 'sci-ch6', num: 6, title: 'Control and Coordination', highYield: false, marks: '6 Marks' },
      { id: 'sci-ch7', num: 7, title: 'How do Organisms Reproduce?', highYield: true, marks: '7 Marks' },
      { id: 'sci-ch8', num: 8, title: 'Heredity', highYield: false, marks: '4 Marks' },
      { id: 'sci-ch9', num: 9, title: 'Light – Reflection and Refraction', highYield: true, marks: '8 Marks' },
      { id: 'sci-ch10', num: 10, title: 'The Human Eye and the Colourful World', highYield: false, marks: '4 Marks' },
      { id: 'sci-ch11', num: 11, title: 'Electricity', highYield: true, marks: '8 Marks' },
      { id: 'sci-ch12', num: 12, title: 'Magnetic Effects of Electric Current', highYield: true, marks: '5 Marks' },
      { id: 'sci-ch13', num: 13, title: 'Our Environment', highYield: false, marks: '4 Marks' }
    ]
  },
  {
    id: 'social-science',
    name: 'Social Science',
    hindiName: 'सामाजिक विज्ञान (SST)',
    code: '087',
    category: 'History, Geog, Civics, Econ',
    chaptersCount: 21,
    notesCount: 42,
    formulasCount: 0,
    questionsCount: 210,
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
    iconColor: '#fbbf24',
    iconBg: 'rgba(245, 158, 11, 0.12)',
    iconBorder: 'rgba(245, 158, 11, 0.3)',
    description: 'Visual timelines for Nationalism in India, comprehensive map pointers for Geography, and tabular notes for Economics.',
    hindiDescription: 'भारत में राष्ट्रवाद की समयरेखा, भूगोल के निश्चित मानचित्र और अर्थशास्त्र के सरल तुलनात्मक नोट्स।',
    chapters: [
      { id: 'sst-ch1', num: 1, title: 'The Rise of Nationalism in Europe', highYield: true, marks: '6 Marks' },
      { id: 'sst-ch2', num: 2, title: 'Nationalism in India', highYield: true, marks: '8 Marks' },
      { id: 'sst-ch3', num: 3, title: 'Resources and Development', highYield: true, marks: '4 Marks' },
      { id: 'sst-ch4', num: 4, title: 'Power Sharing', highYield: true, marks: '5 Marks' },
      { id: 'sst-ch5', num: 5, title: 'Money and Credit', highYield: true, marks: '6 Marks' }
    ]
  },
  {
    id: 'english',
    name: 'English Language & Lit',
    hindiName: 'अंग्रेज़ी (English 184)',
    code: '184',
    category: 'Language & Literature',
    chaptersCount: 22,
    notesCount: 30,
    formulasCount: 0,
    questionsCount: 120,
    gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    iconColor: '#c084fc',
    iconBg: 'rgba(168, 85, 247, 0.12)',
    iconBorder: 'rgba(168, 85, 247, 0.3)',
    description: 'Character sketches, poetic devices, chapter summaries for First Flight & Footprints, and high-scoring grammar formats.',
    hindiDescription: 'चरित्र चित्रण, काव्य उपकरण (Poetic Devices), अध्याय सारांश और पत्र व निबंध प्रारूप।',
    chapters: [
      { id: 'eng-ch1', num: 1, title: 'A Letter to God', highYield: true, marks: 'Board Essential' },
      { id: 'eng-ch2', num: 2, title: 'Nelson Mandela: Long Walk to Freedom', highYield: true, marks: 'Board Essential' },
      { id: 'eng-ch3', num: 3, title: 'Poetic Devices & Literary Terms Master Deck', highYield: true, marks: '5 Marks' },
      { id: 'eng-ch4', num: 4, title: 'Analytical Paragraph & Formal Letter Formats', highYield: true, marks: '10 Marks' }
    ]
  },
  {
    id: 'hindi',
    name: 'Hindi (Course A & B)',
    hindiName: 'हिंदी (कोर्स अ एवं ब 002/085)',
    code: '002 / 085',
    category: 'साहित्य एवं व्याकरण',
    chaptersCount: 18,
    notesCount: 24,
    formulasCount: 0,
    questionsCount: 110,
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)',
    iconColor: '#fb7185',
    iconBg: 'rgba(244, 63, 94, 0.12)',
    iconBorder: 'rgba(244, 63, 94, 0.3)',
    description: 'क्षितिज, कृतिका, स्पर्श, संचयन के पाठ सारांश, पद व्याख्या, और रचना के आधार पर वाक्य भेद तथा समास व्याकरण गाइड।',
    hindiDescription: 'क्षितिज, कृतिका, स्पर्श, संचयन के भावार्थ, पद परिचय, समास, और औपचारिक पत्र लेखन प्रारूप।',
    chapters: [
      { id: 'hin-ch1', num: 1, title: 'नेताजी का चश्मा (स्वयं प्रकाश)', highYield: true, marks: 'महत्वपूर्ण' },
      { id: 'hin-ch2', num: 2, title: 'सूरदास के पद - सप्रसंग व्याख्या', highYield: true, marks: 'बोर्ड स्पेशल' },
      { id: 'hin-ch3', num: 3, title: 'व्याकरण: रचना के आधार पर वाक्य भेद', highYield: true, marks: '4 अंक' },
      { id: 'hin-ch4', num: 4, title: 'व्याकरण: पद परिचय एवं वाच्य', highYield: true, marks: '4 अंक' }
    ]
  },
  {
    id: 'artificial-intelligence',
    name: 'Artificial Intelligence',
    hindiName: 'आर्टिफिशियल इंटेलिजेंस (AI 417)',
    code: '417',
    category: 'Skill Subject (Future Tech)',
    chaptersCount: 6,
    notesCount: 12,
    formulasCount: 4,
    questionsCount: 75,
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    iconColor: '#38bdf8',
    iconBg: 'rgba(6, 182, 212, 0.12)',
    iconBorder: 'rgba(6, 182, 212, 0.3)',
    description: 'CBSE Skill Elective Code 417: AI Project Cycle, Computer Vision (CV), Natural Language Processing (NLP), and Python fundamentals.',
    hindiDescription: 'सीबीएसई कोड 417: एआई प्रोजेक्ट साइकिल, कंप्यूटर विज़न, एनएलपी एवं पायथन प्रोग्रामिंग के उच्च-अंक नोट्स।',
    chapters: [
      { id: 'ai-ch1', num: 1, title: 'Introduction to Artificial Intelligence', highYield: true, marks: 'Unit 1' },
      { id: 'ai-ch2', num: 2, title: 'AI Project Cycle (Problem Scoping to Evaluation)', highYield: true, marks: 'Unit 2' },
      { id: 'ai-ch3', num: 3, title: 'Advance Python for Data Science', highYield: true, marks: 'Unit 3' },
      { id: 'ai-ch4', num: 4, title: 'Computer Vision (CV) Concepts & OpenCV Basics', highYield: true, marks: 'Unit 4' },
      { id: 'ai-ch5', num: 5, title: 'Natural Language Processing (NLP)', highYield: true, marks: 'Unit 5' },
      { id: 'ai-ch6', num: 6, title: 'Evaluation & Confusion Matrix Metrics', highYield: true, marks: 'Unit 6' }
    ]
  }
];

const FEATURED_RESOURCES = [
  {
    id: 'res-chem-reactions',
    title: 'Chemical Reactions & Equations — Master Visual Blueprint',
    subject: 'Science (Chemistry)',
    subjectId: 'science',
    chapter: 'Chapter 1',
    type: 'Revision Notes',
    badgeClass: 'badge-emerald',
    readTime: '15 min read',
    pages: '12 Pages',
    rating: '4.9 ★',
    downloads: '14.2k',
    description: 'Complete visual breakdowns of Combination, Decomposition, Displacement, Double Displacement and Redox reactions with color-change indicators and balanced equations.',
    keyPoints: [
      'Precipitate colors (Lead iodide yellow precipitate, barium sulphate white)',
      'Rusting of iron & rancidity prevention antioxidant tips',
      'Endothermic vs Exothermic energy diagrams',
      'All 20+ NCERT activity-based board questions with answers'
    ]
  },
  {
    id: 'res-math-formulas',
    title: 'Complete Class 10 Mathematics All-Formulas Cheat Sheet',
    subject: 'Mathematics',
    subjectId: 'mathematics',
    chapter: 'All Chapters (1 to 14)',
    type: 'Formula Sheet',
    badgeClass: 'badge-cyan',
    readTime: '10 min review',
    pages: '6 Pages',
    rating: '5.0 ★',
    downloads: '26.8k',
    description: 'Quadratic formula, Arithmetic Progression nth term & sum, Trigonometry identities, Section formula, and Surface Areas & Volumes quick reference deck.',
    keyPoints: [
      'Discriminant rules (D > 0, D = 0, D < 0 real/imaginary roots)',
      'sin²θ + cos²θ = 1 and reciprocal identity proofs',
      'Frustum, Cone, Cylinder, Sphere volume comparisons',
      'Direct, Assumed Mean & Step Deviation methods for Statistics'
    ]
  },
  {
    id: 'res-life-processes',
    title: 'Life Processes — High-Res NCERT Diagram & Marking Guide',
    subject: 'Science (Biology)',
    subjectId: 'science',
    chapter: 'Chapter 5',
    type: 'Mind Map & Diagrams',
    badgeClass: 'badge-violet',
    readTime: '18 min read',
    pages: '16 Pages',
    rating: '4.9 ★',
    downloads: '18.9k',
    description: 'High-clarity annotated diagrams for Human Alimentary Canal, Respiratory System, Human Heart Double Circulation, and Nephron Filtration.',
    keyPoints: [
      'Step-by-step arrows for pulmonary & systemic double circulation',
      'Nephron ultrafiltration and selective reabsorption table',
      'Aerobic vs Anaerobic respiration glucose breakdown pathway flowchart',
      'Stomata opening and closing guard cell mechanism'
    ]
  },
  {
    id: 'res-ai-handbook',
    title: 'Artificial Intelligence (Code 417) — 1-Shot Board Companion',
    subject: 'Artificial Intelligence',
    subjectId: 'artificial-intelligence',
    chapter: 'Units 1-6',
    type: 'Exam Handbook',
    badgeClass: 'badge-cyan',
    readTime: '20 min read',
    pages: '14 Pages',
    rating: '4.8 ★',
    downloads: '8.4k',
    description: 'AI Project Cycle (Problem Scoping, Data Acquisition, Data Exploration, Modelling, Evaluation) + Computer Vision & NLP essentials.',
    keyPoints: [
      '4Ws Canvas (Who, What, Where, Why) structured framework',
      'Pixel values, RGB channels, and Convolution concepts',
      'Text normalisation, Tokenisation, Stemming, and Lemmatization',
      'Confusion matrix formulas: Accuracy, Precision, Recall, and F1 Score'
    ]
  }
];

const RECENT_RESOURCES = [
  {
    id: 'rec-1',
    title: 'Light: Reflection & Refraction — Ray Diagram Mistakes to Avoid',
    subject: 'Science (Physics)',
    date: 'Updated Yesterday',
    tag: 'Board Trap'
  },
  {
    id: 'rec-2',
    title: 'Social Science 2025: Guaranteed Map Work Locations Deck',
    subject: 'Social Science',
    date: '3 Days Ago',
    tag: 'Guaranteed 5 Marks'
  },
  {
    id: 'rec-3',
    title: 'Top 50 Quadratic Equations & AP Word Problems with Solutions',
    subject: 'Mathematics',
    date: '5 Days Ago',
    tag: 'High Yield'
  },
  {
    id: 'rec-4',
    title: 'English Analytical Paragraph & Formal Letter 2025 Formats',
    subject: 'English',
    date: '1 Week Ago',
    tag: 'Writing Skills'
  }
];

const HOMEPAGE_PRACTICE_QUESTION = {
  subject: 'Science — Physics (Light)',
  chapter: 'Light – Reflection and Refraction',
  difficulty: 'CBSE Board Favorite',
  question: 'Where should an object be placed in front of a concave mirror so that it produces a virtual, erect, and magnified image?',
  options: [
    { id: 'opt-a', letter: 'A', text: 'Between the Focus (F) and Centre of Curvature (C)' },
    { id: 'opt-b', letter: 'B', text: 'Between the Pole (P) and Focus (F)', isCorrect: true },
    { id: 'opt-c', letter: 'C', text: 'Beyond the Centre of Curvature (C)' },
    { id: 'opt-d', letter: 'D', text: 'At the Principal Focus (F)' }
  ],
  explanation: 'When an object is placed between the Pole (P) and the Principal Focus (F) of a concave mirror, the reflected rays diverge. When produced backward behind the mirror, they appear to intersect, forming a virtual, erect, and magnified image behind the mirror (used in shaving mirrors & dental mirrors).'
};

const FAQ_DATA = [
  {
    id: 'faq-1',
    question: 'Is STUDYVERSE completely free for school students?',
    answer: 'Yes! STUDYVERSE is 100% free for all students. There are no paywalls, no forced subscriptions, and no credit card requirements. Every revision note, formula cheat sheet, mind map, and practice question is openly accessible to empower students everywhere.'
  },
  {
    id: 'faq-2',
    question: 'Are the resources strictly aligned with the latest CBSE 2024-25 & 2025-26 syllabus?',
    answer: 'Absolutely. Every chapter map and note is curated specifically according to the latest rationalized NCERT textbooks and CBSE board exam guidelines. Deleted topics have been eliminated so you never waste precious revision time on out-of-syllabus questions.'
  },
  {
    id: 'faq-3',
    question: 'Will this website run smoothly on my budget laptop or low-end mobile phone?',
    answer: 'Yes! STUDYVERSE has been intentionally engineered with lightweight, hardware-accelerated CSS and zero heavy WebGL/Three.js bloat. Even on computers with 4GB RAM or entry-level dual-core processors, page loads take under 50 milliseconds with butter-smooth 60 FPS transitions.'
  },
  {
    id: 'faq-4',
    question: 'Can I study offline or print the notes and formula sheets?',
    answer: 'Yes. All study cards, formula sheets, and chapter summaries feature clean, high-contrast layouts engineered for easy reading on screen as well as clean printing without dark ink waste.'
  },
  {
    id: 'faq-5',
    question: 'When will resources for Class 9, Class 11, and Class 12 be released?',
    answer: 'Class 10 is our flagship launchpad. The foundation tier for Class 9 and the senior secondary wings for Class 11 & 12 (covering Science and Commerce streams) are currently on our active development roadmap and will roll out progressively.'
  },
  {
    id: 'faq-6',
    question: 'Does STUDYVERSE support both English and Hindi medium students?',
    answer: 'Yes! We believe language should never be a barrier to high-grade learning. You can toggle between English and Hindi right from the top navigation bar to view key terminology, chapter names, and concept overviews in Hindi.'
  }
];

/* ========================================================================== */
/* UI CONTROLLERS & INTERACTIVE BEHAVIORS                                     */
/* ========================================================================== */

const state = {
  currentLang: 'en',
  activeRevTab: 'formulas'
};

const ICONS = {
  math: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16"/><path d="M4 5h6l4 14 6-14"/></svg>`,
  science: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31L4 19a2 2 0 0 0 1.66 3h12.68A2 2 0 0 0 20 19l-6-9.69V2"/><path d="M8.5 2h7"/><path d="M14 9.3 8.5 18"/></svg>`,
  sst: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  english: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>`,
  hindi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/></svg>`,
  ai: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4Z"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/><path d="M10 17h4"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
  chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  renderSubjects();
  renderFeaturedResources();
  renderRecentResources();
  initRevisionTabs();
  initPracticeWidget();
  renderFaq();
  init3DCardTilt();
  initSearchModal();
  initPdfModal();
  initLanguageSwitcher();
  initSmoothScroll();
});

function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen 
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', false);
    });
  });
}

function renderSubjects() {
  const container = document.getElementById('subjects-grid');
  if (!container) return;

  const getIcon = (id) => {
    switch (id) {
      case 'mathematics': return ICONS.math;
      case 'science': return ICONS.science;
      case 'social-science': return ICONS.sst;
      case 'english': return ICONS.english;
      case 'hindi': return ICONS.hindi;
      case 'artificial-intelligence': return ICONS.ai;
      default: return ICONS.science;
    }
  };

  container.innerHTML = SUBJECTS_DATA.map(sub => {
    const isHi = state.currentLang === 'hi';
    const name = isHi ? sub.hindiName : sub.name;
    const desc = isHi ? sub.hindiDescription : sub.description;

    return `
      <div class="subject-card shimmer-hover" style="--card-gradient: ${sub.gradient};">
        <div class="subject-icon-box" style="--icon-bg: ${sub.iconBg}; --icon-border: ${sub.iconBorder}; --icon-color: ${sub.iconColor};">
          ${getIcon(sub.id)}
        </div>
        <div class="flex items-center justify-between gap-sm" style="margin-bottom: 6px;">
          <h3 class="subject-name">${name}</h3>
          <span class="badge" style="border-color: ${sub.iconBorder}; color: ${sub.iconColor};">Code ${sub.code}</span>
        </div>
        <p class="subject-desc">${desc}</p>
        
        <div class="subject-pill-group">
          <span class="resource-pill">📚 ${sub.chaptersCount} Chapters</span>
          <span class="resource-pill">📝 ${sub.notesCount} Notes</span>
          <span class="resource-pill">📐 ${sub.formulasCount > 0 ? sub.formulasCount + ' Formulas' : 'Map Work'}</span>
          <span class="resource-pill">🎯 ${sub.questionsCount}+ Qs</span>
        </div>

        <div class="subject-meta">
          <button class="btn btn-sm btn-glass open-subject-hub" data-subject-id="${sub.id}" style="width: 100%; justify-content: space-between;">
            <span>${isHi ? 'अध्याय एवं संसाधन देखें' : 'Explore Subject Hub'}</span>
            ${ICONS.arrowRight}
          </button>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('.open-subject-hub').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const subId = e.currentTarget.dataset.subjectId;
      const sub = SUBJECTS_DATA.find(s => s.id === subId);
      showToast(`Entering ${sub.name} Hub • CBSE Class 10`);
      
      setTimeout(() => {
        openPdfPreview({
          title: `${sub.name} (Class 10) — Complete Syllabus Overview & Chapter Index`,
          subject: sub.name,
          chapter: `All ${sub.chaptersCount} Chapters`,
          type: 'Curriculum & Notes Deck',
          description: sub.description,
          keyPoints: sub.chapters.slice(0, 5).map(c => `Chapter ${c.num}: ${c.title} (${c.marks})`)
        });
      }, 350);
    });
  });
}

function renderFeaturedResources() {
  const container = document.getElementById('featured-resources-grid');
  if (!container) return;

  container.innerHTML = FEATURED_RESOURCES.map(res => `
    <div class="resource-card glass-panel">
      <div class="resource-header">
        <span class="badge ${res.badgeClass}">${res.type}</span>
        <span style="font-size: 0.8rem; color: var(--accent-cyan-bright); font-weight: 600;">${res.rating}</span>
      </div>
      <h3 class="resource-title">${res.title}</h3>
      <p class="resource-subtitle">${res.subject} • ${res.chapter}</p>
      
      <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: var(--space-md); line-height: 1.5;">
        ${res.description}
      </div>

      <div class="resource-footer">
        <div style="display: flex; gap: 8px; align-items: center;">
          <span>📄 ${res.pages}</span>
          <span>•</span>
          <span>⏱️ ${res.readTime}</span>
        </div>
        <button class="btn btn-sm btn-primary view-resource-btn" data-resource-id="${res.id}">
          ${ICONS.eye}
          <span>Preview PDF</span>
        </button>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.view-resource-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const resId = e.currentTarget.dataset.resourceId;
      const res = FEATURED_RESOURCES.find(r => r.id === resId);
      if (res) openPdfPreview(res);
    });
  });
}

function renderRecentResources() {
  const container = document.getElementById('recent-resources-list');
  if (!container) return;

  container.innerHTML = RECENT_RESOURCES.map(item => `
    <div class="glass-panel" style="padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 12px; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.borderColor='rgba(56,189,248,0.4)'" onmouseout="this.style.borderColor='var(--border-subtle)'" onclick="window.previewRecentResource('${item.title}', '${item.subject}', '${item.tag}')">
      <div style="display: flex; align-items: center; gap: 14px;">
        <div style="width: 38px; height: 38px; border-radius: 8px; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); display: flex; align-items: center; justify-content: center; color: var(--accent-cyan-bright);">
          ${ICONS.science}
        </div>
        <div>
          <h4 style="font-size: 0.95rem; margin-bottom: 2px;">${item.title}</h4>
          <span style="font-size: 0.775rem; color: var(--text-muted);">${item.subject} • ${item.date}</span>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 10px;">
        <span class="badge badge-cyan">${item.tag}</span>
        <span style="color: var(--accent-cyan-bright);">${ICONS.arrowRight}</span>
      </div>
    </div>
  `).join('');
}

window.previewRecentResource = (title, subject, tag) => {
  openPdfPreview({
    title,
    subject,
    chapter: tag,
    type: 'Recent Update & Board Capsule',
    description: `High-yield preparation material for ${subject}. Verified against CBSE 2024-25 marking scheme.`,
    keyPoints: [
      'Examiner mark allocation rules',
      'Step-by-step model answer format',
      'High-frequency recurring question patterns'
    ]
  });
};

function initRevisionTabs() {
  const buttons = document.querySelectorAll('.rev-tab-btn');
  const panels = document.querySelectorAll('.rev-tab-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;
      
      buttons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(`tab-${targetTab}`);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
}

function initPracticeWidget() {
  const q = HOMEPAGE_PRACTICE_QUESTION;
  const questionEl = document.getElementById('practice-question');
  const optionsEl = document.getElementById('practice-options');
  const feedbackEl = document.getElementById('practice-feedback');
  if (!questionEl || !optionsEl || !feedbackEl) return;

  questionEl.textContent = q.question;

  optionsEl.innerHTML = q.options.map(opt => `
    <button class="option-btn" data-opt-id="${opt.id}">
      <span class="option-letter">${opt.letter}</span>
      <span class="option-text">${opt.text}</span>
    </button>
  `).join('');

  optionsEl.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const optId = btn.dataset.optId;
      const opt = q.options.find(o => o.id === optId);

      optionsEl.querySelectorAll('.option-btn').forEach(b => {
        b.classList.remove('correct', 'incorrect');
      });

      if (opt.isCorrect) {
        btn.classList.add('correct');
        feedbackEl.className = 'practice-feedback show';
        feedbackEl.innerHTML = `
          <div class="practice-feedback-title" style="color: #34d399; display: flex; align-items: center; gap: 6px;">
            ${ICONS.check} Perfect! Option ${opt.letter} is Correct.
          </div>
          <div class="practice-feedback-explanation">
            ${q.explanation}
          </div>
        `;
        showToast('🎯 Correct Answer! +10 Points in Practice Zone');
      } else {
        btn.classList.add('incorrect');
        const correctBtn = optionsEl.querySelector(`[data-opt-id="opt-b"]`);
        if (correctBtn) correctBtn.classList.add('correct');

        feedbackEl.className = 'practice-feedback show';
        feedbackEl.innerHTML = `
          <div class="practice-feedback-title" style="color: #f87171;">
            Incorrect choice. Review the Ray Diagram rules below:
          </div>
          <div class="practice-feedback-explanation">
            ${q.explanation}
          </div>
        `;
      }
    });
  });
}

function renderFaq() {
  const container = document.getElementById('faq-accordion');
  if (!container) return;

  container.innerHTML = FAQ_DATA.map((item, idx) => `
    <div class="faq-item ${idx === 0 ? 'active' : ''}">
      <button class="faq-question">
        <span>${item.question}</span>
        <span class="faq-icon">${ICONS.chevronDown}</span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">
          ${item.answer}
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const item = e.currentTarget.closest('.faq-item');
      const isActive = item.classList.contains('active');
      
      container.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

function init3DCardTilt() {
  const stage = document.querySelector('.showcase-stage');
  const container = document.querySelector('.hero-showcase');
  if (!stage || !container) return;

  let ticking = false;

  container.addEventListener('mousemove', (e) => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = (-y / rect.height) * 14;
        const rotateY = (x / rect.width) * 14;

        stage.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
        ticking = false;
      });
      ticking = true;
    }
  });

  container.addEventListener('mouseleave', () => {
    stage.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  });
}

function initSearchModal() {
  const backdrop = document.getElementById('search-modal');
  const triggerBtns = document.querySelectorAll('.search-trigger-btn');
  const input = document.getElementById('search-modal-input');
  const resultsContainer = document.getElementById('search-results-list');
  const closeBtn = document.getElementById('search-modal-close');

  if (!backdrop || !input || !resultsContainer) return;

  function openSearch() {
    backdrop.classList.add('open');
    input.value = '';
    input.focus();
    renderSearchResults('');
  }

  function closeSearch() {
    backdrop.classList.remove('open');
  }

  triggerBtns.forEach(btn => btn.addEventListener('click', openSearch));
  if (closeBtn) closeBtn.addEventListener('click', closeSearch);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeSearch();
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      backdrop.classList.contains('open') ? closeSearch() : openSearch();
    }
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeSearch();
    }
  });

  input.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.trim().toLowerCase());
  });

  function renderSearchResults(query) {
    const items = [];
    SUBJECTS_DATA.forEach(sub => {
      items.push({
        type: 'Subject',
        title: `${sub.name} (Code ${sub.code})`,
        subtitle: `${sub.chaptersCount} Chapters • ${sub.category}`,
        badge: 'Subject',
        subject: sub.name,
        action: () => {
          closeSearch();
          showToast(`Opening ${sub.name} Portal`);
        }
      });
      sub.chapters.forEach(ch => {
        items.push({
          type: 'Chapter',
          title: `Ch ${ch.num}: ${ch.title}`,
          subtitle: `${sub.name} • ${ch.marks}`,
          badge: ch.highYield ? 'High Yield' : 'Chapter',
          subject: sub.name,
          action: () => {
            closeSearch();
            openPdfPreview({
              title: `Chapter ${ch.num}: ${ch.title}`,
              subject: sub.name,
              chapter: `Class 10 CBSE • ${ch.marks}`,
              type: 'Chapter Master Notes & Mind Map',
              description: `Comprehensive revision deck for Chapter ${ch.num} of Class 10 ${sub.name}.`,
              keyPoints: [
                'Complete core concept summaries',
                'NCERT in-text & back-exercise solutions',
                'Previous 10-year board questions'
              ]
            });
          }
        });
      });
    });

    const filtered = query === '' 
      ? items.slice(0, 7)
      : items.filter(it => it.title.toLowerCase().includes(query) || it.subtitle.toLowerCase().includes(query)).slice(0, 8);

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 24px; text-align: center; color: var(--text-muted);">
          No chapters or resources found for "<span style="color: var(--text-primary);">${query}</span>".
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = filtered.map((item, idx) => `
      <div class="search-result-item" data-index="${idx}">
        <div class="search-result-info">
          <div style="width: 32px; height: 32px; border-radius: 6px; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.2); display: flex; align-items: center; justify-content: center; color: var(--accent-cyan-bright); font-size: 0.8rem; font-weight: 700;">
            ${item.type[0]}
          </div>
          <div>
            <div class="search-result-title">${item.title}</div>
            <div class="search-result-tag">${item.subtitle}</div>
          </div>
        </div>
        <span class="badge ${item.badge === 'High Yield' ? 'badge-amber' : 'badge-cyan'}">${item.badge}</span>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.search-result-item').forEach((el, idx) => {
      el.addEventListener('click', () => {
        filtered[idx].action();
      });
    });
  }
}

function initPdfModal() {
  const backdrop = document.getElementById('pdf-modal');
  const closeBtn = document.getElementById('pdf-modal-close');
  const downloadBtn = document.getElementById('pdf-download-btn');

  if (!backdrop) return;

  function closePdf() {
    backdrop.classList.remove('open');
  }

  if (closeBtn) closeBtn.addEventListener('click', closePdf);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closePdf();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closePdf();
    }
  });

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      showToast('📥 Downloading Demo PDF (CBSE Class 10 High-Yield Capsule)');
    });
  }
}

function openPdfPreview(res) {
  const backdrop = document.getElementById('pdf-modal');
  const titleEl = document.getElementById('pdf-modal-title-text');
  const contentEl = document.getElementById('pdf-mock-page-content');
  if (!backdrop || !titleEl || !contentEl) return;

  titleEl.textContent = res.title;

  contentEl.innerHTML = `
    <div style="border-bottom: 2px solid var(--accent-cyan-bright); padding-bottom: 16px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
      <div>
        <span class="badge badge-cyan" style="margin-bottom: 8px;">CBSE CLASS 10 • ${res.subject.toUpperCase()}</span>
        <h2 style="font-size: 1.5rem; color: #ffffff; line-height: 1.2;">${res.title}</h2>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 4px;">Verified by Subject Experts • Based on Rationalized NCERT 2024-25</p>
      </div>
      <div>
        <span style="font-size: 0.75rem; color: #10b981; font-weight: 700; background: rgba(16, 185, 129, 0.15); padding: 4px 10px; border-radius: 999px; border: 1px solid rgba(16, 185, 129, 0.3);">● EXAM READY</span>
      </div>
    </div>

    <div style="background: rgba(56, 189, 248, 0.05); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <h4 style="color: var(--accent-cyan-bright); font-size: 0.95rem; margin-bottom: 6px;">Executive Concept Summary</h4>
      <p style="font-size: 0.925rem; color: var(--text-secondary); line-height: 1.6;">${res.description}</p>
    </div>

    <h4 style="font-size: 1.05rem; color: #ffffff; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
      <span>Key Board Exam Takeaways & Theorems</span>
    </h4>

    <ul style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 24px;">
      ${(res.keyPoints || [
        'Fundamental concepts explained with step-by-step logic',
        'Standard formulas and value substitutions',
        'Model question templates frequently tested in past 5 years'
      ]).map((point, i) => `
        <li style="display: flex; align-items: flex-start; gap: 12px; font-size: 0.925rem; color: var(--text-secondary); background: rgba(255,255,255,0.02); padding: 10px 14px; border-radius: 6px; border: 1px solid var(--border-subtle);">
          <span style="color: var(--accent-cyan-bright); font-weight: 700;">#${i+1}</span>
          <span>${point}</span>
        </li>
      `).join('')}
    </ul>

    <div style="background: #080c18; border-radius: 8px; padding: 16px; border: 1px dashed rgba(255, 255, 255, 0.15); text-align: center; color: var(--text-muted); font-size: 0.85rem;">
      <p>⚠️ Demo Resource Preview: Full 12-page high-resolution vector PDF is packaged and ready for student download.</p>
    </div>
  `;

  backdrop.classList.add('open');
}

function initLanguageSwitcher() {
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === state.currentLang) return;

      state.currentLang = lang;
      buttons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

      updatePageLanguage(lang);
      renderSubjects();
      showToast(lang === 'hi' ? 'भाषा बदलकर हिंदी कर दी गई है' : 'Language switched to English');
    });
  });
}

function updatePageLanguage(lang) {
  const heroBadge = document.querySelector('.hero-badge-pill span:last-child');
  const heroTagline = document.querySelector('.hero-title .title-accent');
  const heroDesc = document.querySelector('.hero-description');
  const exploreBtn = document.querySelector('.hero-cta-group .btn-primary span');

  if (lang === 'hi') {
    if (heroBadge) heroBadge.textContent = '⚡ आधुनिक सीबीएसई कक्षा 10 अध्ययन मंच';
    if (heroTagline) heroTagline.textContent = 'कक्षा 10 बोर्ड में सर्वोच्च सफलता';
    if (heroDesc) heroDesc.textContent = 'भारी-भरकम किताबों को छोड़ें। सीबीएसई कक्षा 10 टॉपर्स के लिए विशेष रूप से तैयार विज़ुअल रिवीजन नोट्स, सूत्र पत्रक और महत्वपूर्ण बोर्ड प्रश्नों का लाभ उठाएं।';
    if (exploreBtn) exploreBtn.textContent = 'संसाधन देखें';
  } else {
    if (heroBadge) heroBadge.textContent = '⚡ Next-Gen CBSE Learning Platform • Class 10 Special';
    if (heroTagline) heroTagline.textContent = 'Master Class 10 CBSE';
    if (heroDesc) heroDesc.textContent = 'Ditch 800-page bulky textbooks. Access laser-focused visual revision notes, interactive formula sheets, curated board question banks, and chapter mind maps — engineered for CBSE Class 10 toppers.';
    if (exploreBtn) exploreBtn.textContent = 'Explore Resources';
  }
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span style="color: var(--accent-cyan-bright);">${ICONS.check}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  window.requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  const form = document.querySelector('.orbit-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.orbit-input');
      if (input && input.value) {
        showToast('🚀 Welcome to the STUDYVERSE Orbit! Weekly capsule confirmed.');
        input.value = '';
      }
    });
  }
}
