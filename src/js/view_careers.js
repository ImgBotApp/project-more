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
  
  $('#nameCareers').change(function () {
    $('label[for="nameCareers"]').text($('#nameCareers').val());
    $('#nameCareers').val(' ');
  });
  $('#emailCareers').change(function () {
    $('label[for="emailCareers"]').text($('#emailCareers').val());
    $('#emailCareers').val(' ');
  });
  $('#phoneCareers').change(function () {
    $('label[for="phoneCareers"]').text($('#phoneCareers').val());
    $('#phoneCareers').val(' ');
  });
  $('#linkedinCareers').change(function () {
    $('label[for="linkedinCareers"]').text($('#linkedinCareers').val());
    $('#linkedinCareers').val(' ');
  });
  $('#portfolioCareers').change(function () {
    $('label[for="portfolioCareers"]').text($('#portfolioCareers').val());
    $('#portfolioCareers').val(' ');
  });
  $('#githubCareers').change(function () {
    $('label[for="githubCareers"]').text($('#githubCareers').val());
    $('#githubCareers').val(' ');
  });
  $('#urlCareers').change(function () {
    $('label[for="urlCareers"]').text($('#urlCareers').val());
    $('#urlCareers').val(' ');
  });
  $('#whyMoreCareers').change(function () {
    $('label[for="whyMoreCareers"]').text($('#whyMoreCareers').val());
    $('#whyMoreCareers').val(' ');
  });

})();

