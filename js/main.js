const swiper = new Swiper('.channel-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});
const secondSwiper = new Swiper('.channel-food-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-food-next',
    prevEl: '.channel-button-food-prev',
  },
});
const bigSwiper = new Swiper('.channel-big-slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-big-next',
    prevEl: '.channel-button-big-prev',
  },
});