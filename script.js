// Toggle nav menu
function toggleMenu() {
  document.getElementById("navbar").classList.toggle("open");
}

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(link =>
  link.addEventListener('click', () => {
    document.getElementById("navbar").classList.remove("open");
  })
);

// Initialize Swiper
window.addEventListener('DOMContentLoaded', () => {
  new Swiper('.hero-swiper', {
    loop: true,
    effect: 'fade',
    speed: 800,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    }
  });

  // Scroll Spy
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.6 });

  sections.forEach(section => observer.observe(section));
});

// Animate service items
const serviceItems = document.querySelectorAll('.service-item');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    } else {
      entry.target.classList.remove('animate-in');
    }
  });
}, { threshold: 0.2 });

serviceItems.forEach((item, index) => {
  item.dataset.delay = index * 150;
  observer.observe(item);
});

// Scroll to top
const scrollBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Set current year
document.getElementById("year").textContent = new Date().getFullYear();
