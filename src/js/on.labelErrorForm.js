

// function to check if a field is invalid and can be modified again.

$(document).on('touchstart click mouseover', 'label.error', function(e) {
  $('#' + e.target.htmlFor).removeClass('turn-off');
  $('#' + e.target.htmlFor).addClass('turn-on');
});