    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      speed: 800,
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      breakpoints: {
        768: {
          slidesPerView: 1.2,
        },
        1024: {
          slidesPerView: 1.5,
        },
      },
    });