document.addEventListener('DOMContentLoaded', function () {
  
    // Initialize Swiper for portfolio details image slider
    const swiper = new Swiper('.portfolio-details-slider', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true // Whether animations should happen only once
    });
  
    // Scroll Top functionality
    const scrollTopButton = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        scrollTopButton.classList.add('active');
      } else {
        scrollTopButton.classList.remove('active');
      }
    });
  
    scrollTopButton.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Preloader hide once page is fully loaded
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
      preloader.style.display = 'none';
    });
  
  });
  