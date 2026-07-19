if (!document.querySelector('link[href="/src/pages.css"]')) {
  const pageStyles = document.createElement('link');
  pageStyles.rel = 'stylesheet';
  pageStyles.href = '/src/pages.css';
  document.head.appendChild(pageStyles);
}

const siteNav = document.querySelector('.site-header nav');
if (siteNav && !siteNav.querySelector('a[href="/"]')) {
  const homeLink = document.createElement('a');
  homeLink.href = '/';
  homeLink.textContent = 'Home';
  siteNav.prepend(homeLink);
}

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('header nav');
toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
