/* ── STABLEFORD SOLUTIONS — MAIN JS ── */

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
