/* ============================================================
   ORTO-CARE — Landing page interactions
   ============================================================ */

/* ── Nav: scroll state ── */
const nav = document.getElementById('nav');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 12);
};
window.addEventListener('scroll', onScroll, { passive: true });

/* ── Nav: mobile burger ── */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  const isOpen = burger.classList.toggle('open');
  burger.setAttribute('aria-expanded', isOpen);
  mobileMenu.classList.toggle('open', isOpen);
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', false);
    mobileMenu.classList.remove('open');
  });
});

/* ── FAQ accordion ── */
document.querySelectorAll('[data-faq]').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');

    // Close all
    document.querySelectorAll('[data-faq]').forEach(b => {
      b.classList.remove('open');
      b.nextElementSibling.classList.remove('open');
    });

    // Toggle clicked
    if (!isOpen) {
      btn.classList.add('open');
      answer.classList.add('open');
    }
  });
});

/* ── Reveal animation on scroll ── */
const revealEls = document.querySelectorAll(
  '.tl-step, .seg-card, .zone-item, .heatmap-card, .loc-item, .faq-item'
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = `opacity 0.45s cubic-bezier(.22,.61,.36,1) ${i * 40}ms,
                          transform 0.45s cubic-bezier(.22,.61,.36,1) ${i * 40}ms`;
  observer.observe(el);
});
