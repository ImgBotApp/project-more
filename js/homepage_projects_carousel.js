// IIFE function
(function() {
  'use strict';
  $('.section_projects-slick-firstrow').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    autoplay: false,
  });
  $('.section_projects-slick-secondrow').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    autoplay: false,
  });
})();

$(function () {
  $('.section_projects-carousel-next').on('click', function () {
    $('.section_projects-slick-firstrow').slick('slickNext');
  });
  $('.section_projects-carousel-prev').on('click', function () {
    $('.section_projects-slick-firstrow').slick('slickPrev');
  });
  $('.section_projects-carousel-next').on('click', function () {
    // 
    $('.section_projects-slick-secondrow').slick('slickNext')
  // }, 0);
  });
  $('.section_projects-carousel-prev').on('click', function () {
    // 
    $('.section_projects-slick-secondrow').slick('slickPrev')
  // }, 0);
  });
});