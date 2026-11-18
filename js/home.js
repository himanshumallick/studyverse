/**
 * STUDYVERSE - Homepage Interactive Engine
 * High-performance, vanilla JavaScript with zero external dependencies.
 * Specially optimized for smooth execution on 4GB RAM & dual-core AMD systems.
 */

import { SUBJECTS_DATA } from './data/subjects.js';
import { FEATURED_RESOURCES, RECENT_RESOURCES, HOMEPAGE_PRACTICE_QUESTION } from './data/resources.js';
import { FAQ_DATA } from './data/faq.js';

// Application State
const state = {
  currentLang: 'en', // 'en' or 'hi'
  activeRevTab: 'formulas',
  searchQuery: '',
  selectedPracticeOption: null,
  activeFaqIndex: 0
};

// SVG Icon Definitions (Optimized, lightweight inline SVGs)
const ICONS = {
  math: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16"/><path d="M4 5h6l4 14 6-14"/></svg>`,
  science: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31L4 19a2 2 0 0 0 1.66 3h12.68A2 2 0 0 0 20 19l-6-9.69V2"/><path d="M8.5 2h7"/><path d="M14 9.3 8.5 18"/></svg>`,
  sst: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  english: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>`,
  hindi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/></svg>`,
  ai: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4Z"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/><path d="M10 17h4"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
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

/* -------------------------------------------------------------------------- */
/* 1. NAVBAR SCROLL & MOBILE MENU                                             */
/* -------------------------------------------------------------------------- */
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

  // Close when clicking a link
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', false);
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 2. RENDER SUBJECTS MATRIX                                                  */
/* -------------------------------------------------------------------------- */
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

  // Attach button triggers
  container.querySelectorAll('.open-subject-hub').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const subId = e.currentTarget.dataset.subjectId;
      const sub = SUBJECTS_DATA.find(s => s.id === subId);
      showToast(`Entering ${sub.name} Hub • CBSE Class 10`);
      
      // Auto open PDF or subject modal demo
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

/* -------------------------------------------------------------------------- */
/* 3. RENDER FEATURED RESOURCES                                               */
/* -------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------- */
/* 4. RENDER RECENT RESOURCES                                                 */
/* -------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------- */
/* 5. QUICK REVISION TABBED SUITE                                             */
/* -------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------- */
/* 6. INTERACTIVE PRACTICE ZONE HOMEPAGE TEASER                               */
/* -------------------------------------------------------------------------- */
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

      // Reset options
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
        // Highlight correct one too
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

/* -------------------------------------------------------------------------- */
/* 7. FAQ ACCORDION                                                           */
/* -------------------------------------------------------------------------- */
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
      
      // Close all
      container.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));

      // If it wasn't active, open it
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* -------------------------------------------------------------------------- */
/* 8. 3D CARD TILT MICRO-INTERACTION (LIGHTWEIGHT CSS TRANSFORM)              */
/* -------------------------------------------------------------------------- */
function init3DCardTilt() {
  const stage = document.querySelector('.showcase-stage');
  const container = document.querySelector('.hero-showcase');
  if (!stage || !container) return;

  // Lightweight mouse tracking with throttling to avoid CPU strain
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

/* -------------------------------------------------------------------------- */
/* 9. UNIVERSAL SEARCH MODAL (CTRL + K)                                       */
/* -------------------------------------------------------------------------- */
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

  // Keyboard shortcut Ctrl+K or /
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
    // Gather all searchable items from subjects & chapters
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

/* -------------------------------------------------------------------------- */
/* 10. REALISTIC PDF PREVIEW MODAL                                            */
/* -------------------------------------------------------------------------- */
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
    <div style="border-bottom: 2px solid var(--accent-cyan-bright); padding-bottom: 16px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-start;">
      <div>
        <span class="badge badge-cyan" style="margin-bottom: 8px;">CBSE CLASS 10 • ${res.subject.toUpperCase()}</span>
        <h2 style="font-size: 1.6rem; color: #ffffff; line-height: 1.2;">${res.title}</h2>
        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 4px;">Verified by Subject Experts • Based on Rationalized NCERT 2024-25</p>
      </div>
      <div style="text-align: right;">
        <span style="font-size: 0.75rem; color: #10b981; font-weight: 700; background: rgba(16, 185, 129, 0.15); padding: 4px 10px; border-radius: 999px; border: 1px solid rgba(16, 185, 129, 0.3);">● EXAM READY</span>
      </div>
    </div>

    <div style="background: rgba(56, 189, 248, 0.05); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
      <h4 style="color: var(--accent-cyan-bright); font-size: 0.95rem; margin-bottom: 6px;">Executive Concept Summary</h4>
      <p style="font-size: 0.925rem; color: var(--text-secondary); line-height: 1.6;">${res.description}</p>
    </div>

    <h4 style="font-size: 1.1rem; color: #ffffff; margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
      <span>Key Board Exam Takeaways & Theorems</span>
    </h4>

    <ul style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px;">
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

/* -------------------------------------------------------------------------- */
/* 11. LANGUAGE SWITCHER (EN / HI)                                            */
/* -------------------------------------------------------------------------- */
function initLanguageSwitcher() {
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === state.currentLang) return;

      state.currentLang = lang;
      buttons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

      // Translate core tags on homepage
      updatePageLanguage(lang);
      renderSubjects(); // Re-render subjects with Hindi names/descriptions
      showToast(lang === 'hi' ? 'भाषा बदलकर हिंदी कर दी गई है' : 'Language switched to English');
    });
  });
}

function updatePageLanguage(lang) {
  const heroBadge = document.querySelector('.hero-badge-pill span');
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

/* -------------------------------------------------------------------------- */
/* 12. TOAST NOTIFICATION UTILITY                                             */
/* -------------------------------------------------------------------------- */
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

  // Trigger animation
  window.requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* -------------------------------------------------------------------------- */
/* 13. SMOOTH SCROLL FOR IN-PAGE ANCHORS                                      */
/* -------------------------------------------------------------------------- */
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

  // Newsletter Form Handler
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
