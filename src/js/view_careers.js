(function() {
  'use strict';
  $('.careers-view__carousel-wrapper').slick({
    dots: true,
    dotsClass: 'careers-view__carousel-dots',
    speed: 500,
    draggable: true,
    focusOnSelect: false,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<div class="careers-view__carousel-arrow careers-view__prevArrow"><img src="img/icons/np-right-arrow.png" alt="next arrow"></div>',
    nextArrow: '<div class="careers-view__carousel-arrow careers-view__nextArrow"><img src="img/icons/np-right-arrow.png" alt="next arrow"></div>'
  });
})();

