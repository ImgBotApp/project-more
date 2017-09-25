$('#nameReferrals').change(function () {
  $('label[for="nameReferrals"]').text($('#nameReferrals').val());
  $('#nameReferrals').val(' ');
});
$('#mailReferrals').change(function () {
  $('label[for="mailReferrals"]').text($('#mailReferrals').val());
  $('#mailReferrals').val(' ');
});
$('#phoneReferrals').change(function () {
  $('label[for="phoneReferrals"]').text($('#phoneReferrals').val());
  $('#phoneReferrals').val(' ');
});
$('#messageReferrals').change(function () {
  $('label[for="messageReferrals"]').text($('#messageReferrals').val());
  $('#messageReferrals').val(' ');
});