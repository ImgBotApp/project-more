

// function to check if a field is invalid and can be modified again.

$(document).on('touchstart click mouseover', 'label.error', function(e) {
  $('#' + e.target.htmlFor).css('visibility', 'visible');
});