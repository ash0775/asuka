jQuery(function ($) {
  $('.menu').on('click', function () {
    $('.menu__line').toggleClass('active');
    $('.gnav').fadeToggle();
  });
});


const swiper = new Swiper(".swiper", {
  speed: 600,
  loop: true,
  centeredSlides: true,
  slidesPerView: 1.2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2, // 768px以上
      spaceBetween: 40, // 768px以上
    },
    1024: {
      slidesPerView: 2.3, // 1024px以上
      spaceBetween: 60, // 1024px以上
    },
  }
});