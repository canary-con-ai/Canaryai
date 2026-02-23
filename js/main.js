/* ─────────────────────────────────────────
   Canary AI – Main JavaScript
   js/main.js
───────────────────────────────────────── */

/* ── Dynamic copyright year ── */
document.getElementById('yr').textContent = new Date().getFullYear();

/* ── Mobile hamburger menu ── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

/* ── Scroll reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 70);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── FAQ accordion ── */
function toggleFaq(btn) {
  const item   = btn.parentElement;
  const isOpen = item.classList.contains('open');

  // Close all open items first
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

  // Open clicked one if it wasn't already open
  if (!isOpen) item.classList.add('open');
}

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    link.style.color = (href === '#' + current) ? 'var(--amber)' : '';
  });
}, { passive: true });
