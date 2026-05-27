const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navBackdrop = document.querySelector('[data-nav-backdrop]');

function closeMobileNav() {
  if (!navToggle || !mainNav) return;

  mainNav.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navBackdrop?.classList.remove('open');
  document.body.classList.remove('nav-open');
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navBackdrop?.classList.toggle('open', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
  });

  navBackdrop?.addEventListener('click', closeMobileNav);

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileNav);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1080) closeMobileNav();
  });
}

const siteLoader = document.querySelector('[data-site-loader]');

if (siteLoader) {
  window.addEventListener('load', () => {
    window.setTimeout(() => {
      siteLoader.classList.add('hidden');
    }, 280);
  });
}

const hero = document.querySelector('.hero-premium');

if (hero) {
  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
    hero.style.setProperty('--tilt-x', `${y * -1}deg`);
    hero.style.setProperty('--tilt-y', `${x}deg`);
  });

  hero.addEventListener('pointerleave', () => {
    hero.style.removeProperty('--tilt-x');
    hero.style.removeProperty('--tilt-y');
  });
}

const mobileSoundVideos = document.querySelectorAll('[data-mobile-sound-video]');
const mobileVideoQuery = window.matchMedia('(max-width: 920px)');

function syncMobileVideoSound() {
  mobileSoundVideos.forEach((video) => {
    if (!mobileVideoQuery.matches) return;

    video.defaultMuted = false;
    video.muted = false;
    video.volume = 1;
    video.controls = true;

    const playRequest = video.play();
    if (playRequest) {
      playRequest.catch(() => {
        video.controls = true;
      });
    }
  });
}

if (mobileSoundVideos.length) {
  syncMobileVideoSound();
  mobileVideoQuery.addEventListener('change', syncMobileVideoSound);
}

const revealItems = document.querySelectorAll('.reveal');

if (revealItems.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  revealItems.forEach((item) => revealObserver.observe(item));
}

const counters = document.querySelectorAll('[data-count]');

if (counters.length) {
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = Number(counter.dataset.count);
      const duration = 1100;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.round(target * eased).toLocaleString('fr-FR');

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
      countObserver.unobserve(counter);
    });
  }, { threshold: 0.7 });

  counters.forEach((counter) => countObserver.observe(counter));
}

const carousel = document.querySelector('[data-carousel]');
const slides = carousel ? Array.from(carousel.querySelectorAll('[data-carousel-slide]')) : [];
const prevButton = document.querySelector('[data-carousel-prev]');
const nextButton = document.querySelector('[data-carousel-next]');
let activeSlide = 0;
let carouselTimer;

function showSlide(index) {
  if (!slides.length) return;
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === activeSlide);
  });
}

function startCarousel() {
  if (slides.length < 2) return;
  carouselTimer = window.setInterval(() => {
    showSlide(activeSlide + 1);
  }, 5200);
}

function resetCarousel() {
  window.clearInterval(carouselTimer);
  startCarousel();
}

if (slides.length) {
  prevButton?.addEventListener('click', () => {
    showSlide(activeSlide - 1);
    resetCarousel();
  });

  nextButton?.addEventListener('click', () => {
    showSlide(activeSlide + 1);
    resetCarousel();
  });

  startCarousel();
}

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const button = item.querySelector('.faq-question');
  button?.addEventListener('click', () => {
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) otherItem.classList.remove('open');
    });
    item.classList.toggle('open');
  });
});

const readMoreButtons = document.querySelectorAll('[data-read-more]');

readMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const details = document.getElementById(button.getAttribute('aria-controls'));
    if (!details) return;

    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    button.textContent = isOpen ? 'Lire plus' : 'Voir moins';
    details.hidden = isOpen;
  });
});
