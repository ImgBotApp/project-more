// IIFE function
(function() {
  'use strict';
  $('.section_projects-slick-firstrow').slick({
    dots: false,
    infinite: true,
    // cssEase: 'linear',
    // autoplaySpeed: 0,
    // speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    // adaptiveHeight: true,
    arrows: false,
    autoplay: false,
  });
  $('.section_projects-slick-secondrow').slick({
    dots: false,
    infinite: true,
    // cssEase: 'linear',
    // autoplaySpeed: 0,
    // speed: 6000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    // adaptiveHeight: true,
    arrows: false,
    autoplay: false,
  });
})();
