/**
 * STUDYVERSE - High-Yield Resources & Practice Question Repository
 * Cleanly labelled demo resources with realistic syllabus content
 */

export const FEATURED_RESOURCES = [
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
    isDemo: true,
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
    isDemo: true,
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
    isDemo: true,
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
    isDemo: true,
    description: 'AI Project Cycle (Problem Scoping, Data Acquisition, Data Exploration, Modelling, Evaluation) + Computer Vision & NLP essentials.',
    keyPoints: [
      '4Ws Canvas (Who, What, Where, Why) structured framework',
      'Pixel values, RGB channels, and Convolution concepts',
      'Text normalisation, Tokenisation, Stemming, and Lemmatization',
      'Confusion matrix formulas: Accuracy, Precision, Recall, and F1 Score'
    ]
  }
];

export const RECENT_RESOURCES = [
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

export const HOMEPAGE_PRACTICE_QUESTION = {
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
  explanation: 'When an object is placed between the Pole (P) and the Principal Focus (F) of a concave mirror, the reflected rays diverge. When produced backward behind the mirror, they appear to intersect, forming a virtual, erect, and magnified image behind the mirror (used in shaving & dentist mirrors).'
};
