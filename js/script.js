$(function(){
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

 $(function() {
    // validate
    $("#contact").validate({
        // Set the validation rules
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            },
            message: "required",
        },
        // Specify the validation error messages
        messages: {
            name: "Please enter your name",
            email: "Please enter a valid email address",
            message: "Please enter a message",
        },
        // submit handler
        submitHandler: function(form) {
          //form.submit();
           $(".message").show();
           $(".message").fadeOut(4500);
        }
    });
  });