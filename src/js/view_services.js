$("a.services_view-option-link").click(function() {
  var targetDiv = $(this).attr('href');
  $('html, body').animate({
      scrollTop: $(targetDiv).offset().top - 65
  }, 800);
});