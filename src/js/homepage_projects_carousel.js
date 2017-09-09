// IIFE function
(function() {
  'use strict';
  $('.section_projects-slick-firstrow').slick({
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    arrows: false,
    focusOnSelect: true,
    autoplay: true
  });
  $('.section_projects-slick-secondrow').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    centerMode: false,
    variableWidth: true,
    adaptiveHeight: true,
    arrows: false,
    focusOnSelect: true,
    autoplay: true
  });
})();
