/* ── STABLEFORD SOLUTIONS — MAIN JS ── */

/* Mobile navigation toggle */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav    = document.querySelector('nav');
  if (!toggle || !nav) return;
 
  function openMenu() {
    nav.classList.add('nav-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation menu');
  }
 
  function closeMenu() {
    nav.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
  }
 
  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    nav.classList.contains('nav-open') ? closeMenu() : openMenu();
  });
 
  /* Close when a nav link is tapped */
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
 
  /* Close when tapping outside the nav */
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('nav-open') && !nav.contains(e.target)) {
      closeMenu();
    }
  });
 
  /* Close on Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('nav-open')) {
      closeMenu();
      toggle.focus();
    }
  });
})();

/* Contact form AJAX submission */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const success = document.getElementById('formSuccess');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });

      if (res.ok) {
        form.style.display = 'none';
        success.style.display = 'block';
        success.focus();
      } else {
        btn.textContent = 'Send Message →';
        btn.disabled = false;
        alert('Something went wrong. Please try again or reach out via LinkedIn.');
      }
    } catch (err) {
      btn.textContent = 'Send Message →';
      btn.disabled = false;
      alert('Something went wrong. Please try again or reach out via LinkedIn.');
    }
  });
})();
