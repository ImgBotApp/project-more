// IIFE function
(function() {
  'use strict';
  $('.section_projects-slick-firstrow').slick({
    dots: false,
    infinite: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    speed: 5000,
    slidesToShow: 2,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true
  });
  $('.section_projects-slick-secondrow').slick({
    dots: false,
    infinite: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    speed: 6000,
    slidesToShow: 2,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true
  });
})();
