// Nav toggle using event delegation so injected header works reliably

// Toggle/open menu when hamburger is clicked; works even if header was injected later
document.addEventListener('click', function (e) {
  const toggle = e.target.closest('.menu-toggle');
  if (toggle) {
    const navMenu = document.querySelector('.nav-menu');
    if (!navMenu) return;
    const willOpen = !navMenu.classList.contains('active');
    navMenu.classList.toggle('active', willOpen);
    toggle.classList.toggle('active', willOpen);
    toggle.setAttribute('aria-expanded', String(willOpen));
    navMenu.setAttribute('aria-hidden', String(!willOpen));
    document.body.classList.toggle('nav-open', willOpen);
    e.stopPropagation();
    return;
  }

  // If menu open and click outside hero-nav, close
  if (document.body.classList.contains('nav-open')) {
    if (!e.target.closest('.hero-nav')) {
      const menuToggle = document.querySelector('.menu-toggle');
      const navMenu = document.querySelector('.nav-menu');
      if (navMenu) navMenu.classList.remove('active');
      if (menuToggle) {
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
      document.body.classList.remove('nav-open');
    }
  }
}, false);

// Close on Escape
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) navMenu.classList.remove('active');
    if (menuToggle) {
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('nav-open');
  }
});

// Close when resizing to larger widths
window.addEventListener('resize', function () {
  if (window.innerWidth > 1000 && document.body.classList.contains('nav-open')) {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) navMenu.classList.remove('active');
    if (menuToggle) {
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('nav-open');
  }
});