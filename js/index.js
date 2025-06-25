// В файле index.js
document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.services__swiper', {  // Исправлен селектор
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      612: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
      468: {
        slidesPerView: 2,
        spaceBetween: 5,
      }
    }
  });

  document.querySelectorAll('.header__link').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});