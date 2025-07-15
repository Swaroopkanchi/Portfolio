// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade in hero on load
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  hero.style.opacity = 0;
  hero.style.transition = 'opacity 1.5s ease-in-out';
  setTimeout(() => {
    hero.style.opacity = 1;
  }, 100);
});

// (Optional) Mobile nav toggle
// If you want to add a hamburger menu later
/*
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
*/