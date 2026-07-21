/* Masafa Publishing House — client-side interactions */
(function () {
  'use strict';

  // ----- Mobile nav toggle -------------------------------------------------
  const navToggle = document.querySelector('.nav-toggle');
  const primaryNav = document.querySelector('.primary-nav');
  if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = primaryNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    primaryNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        primaryNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ----- Sticky header shadow ---------------------------------------------
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ----- Reveal on scroll --------------------------------------------------
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-revealed');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-revealed'));
  }

  // ----- Catalogue filter --------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const books = document.querySelectorAll('[data-series-filter]');
  if (filterBtns.length && books.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.filter;
        filterBtns.forEach(b => b.classList.toggle('is-active', b === btn));
        books.forEach(book => {
          const s = book.dataset.seriesFilter;
          book.style.display = (val === 'all' || s === val) ? '' : 'none';
        });
      });
    });
  }

  // ----- Newsletter form (client-side ack) --------------------------------
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const msg = form.parentElement.querySelector('.newsletter-msg');
      if (!input || !input.value) return;
      const isAr = document.documentElement.lang === 'ar';
      if (msg) {
        msg.textContent = isAr
          ? 'شكرًا لك. تم استلام بريدك. سنراسلك في الشهر القادم.'
          : 'Thank you. Your email is received. We will write to you next month.';
      }
      input.value = '';
    });
  });

  // ----- Submission / contact form (client-side ack) -----------------------
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = form.querySelector('.form-note');
      const isAr = document.documentElement.lang === 'ar';
      if (msg) {
        msg.textContent = isAr
          ? 'شكرًا لك. استلمنا رسالتك، وسنعود إليك خلال أيام العمل التالية.'
          : 'Thank you. Your message has been received. We will reply within the coming working days.';
        msg.style.color = 'var(--ink)';
      }
      form.reset();
    });
  });

  // ----- Set active nav link based on pathname -----------------------------
  const path = window.location.pathname.replace(/\/$/, '').split('/').pop() || 'index';
  document.querySelectorAll('.primary-nav a[data-nav]').forEach(a => {
    if (a.dataset.nav === path.replace('.html', '')) a.classList.add('is-active');
  });
})();
