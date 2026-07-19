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

const lightbox = document.querySelector('.template-lightbox');
const lightboxImage = lightbox?.querySelector('.lightbox-frame img');
const lightboxTitle = lightbox?.querySelector('#lightbox-title');
const lightboxClose = lightbox?.querySelector('.lightbox-close');
let lastTemplateTrigger;

document.querySelectorAll('.catalog-cover[data-template]').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const sourceImage = trigger.querySelector('img');
    lastTemplateTrigger = trigger;
    lightboxImage.src = sourceImage.src;
    lightboxImage.alt = sourceImage.alt;
    lightboxTitle.textContent = trigger.dataset.template;
    lightbox.showModal();
    document.body.classList.add('modal-open');
  });
});

const closeLightbox = () => {
  lightbox?.close();
  document.body.classList.remove('modal-open');
  lastTemplateTrigger?.focus();
};

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightbox?.addEventListener('close', () => document.body.classList.remove('modal-open'));
