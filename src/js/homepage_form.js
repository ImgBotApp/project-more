$('.section_form-carousel').slick({
  dots: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 800,
  infinite: false,
  draggable: false,
  variableWidth: false,
  focusOnSelect: false,
});

$(function () {
  $('.section_form-carousel-next').on('click', function () {
    $('.section_form-carousel').slick('slickNext');
  });
  $('.section_form-carousel-prev').on('click', function () {
    $('.section_form-carousel').slick('slickPrev');
  });
});

$('.section_form-carousel-next').eq(0).on("click", function() {
  var inputName = $('#inputName').val();
  $('#nameText').text(inputName);
});

$('.section_form-carousel-next').eq(1).on("click", function() {
  var inputEmail = $('#inputEmail').val();
  $('#emailText').text(inputEmail);
});


$('#nameInputMobile').change(function () {
  $('label[for="nameInputMobile"]').text($('#nameInputMobile').val());
  $('#nameInputMobile').val(' ');
});
$('#emailInputMobile').change(function () {
  $('label[for="emailInputMobile"]').text($('#emailInputMobile').val());
  $('#emailInputMobile').val(' ');
});
$('#messageInputMobile').change(function () {
  $('label[for="messageInputMobile"]').text($('#messageInputMobile').val());
  $('#messageInputMobile').val(' ');
});