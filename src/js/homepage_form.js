$('.section_form-carousel').slick({
  dots: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
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
  $('.section-form-title').on('click', function () {
    $('.section_form-carousel').slick('slickNext');
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

// Validation form contact in home_desktop
var currentFile = window.location.pathname;
$('form[name="form-contact-more_desktop"]').validate({
  submitHandler: function(form) {
    var data = $('form[name="form-contact-more_desktop"]').serialize();
    $.ajax({
      url: 'http://integrations.blick.mx/more/contact/',
      method: 'POST',
      data: data
    }).done(function(data) {
      if (parseInt(data) === 1) {
        alertify.logPosition("bottom right");
        if (currentFile === '/' || currentFile === '/portfolio.html' || currentFile === '/services.html' || currentFile === '/careers.html' || currentFile === '/team.html' || currentFile === '/referrals.html' || currentFile === '/quote.html' || currentFile === '/contact.html'){
          alertify.success("Thanks for contacting us!");
        }else if (currentFile === '/index-es.html' || currentFile === '/portfolio-es.html' || currentFile === '/services-es.html' || currentFile === '/careers-es.html' || currentFile === '/team-es.html' || currentFile === '/referrals-es.html' || currentFile === '/quote-es.html' || currentFile === '/contact-es.html'){
          alertify.success("¡Gracias por contactarnos!");
        }
        $('form[name="form-contact-more_desktop"]')[0].reset();
      }
    });
  },
  invalidHandler: function(event, validator) {
    var errors = validator.numberOfInvalids();
    alertify.logPosition("bottom right");
    if (currentFile === '/' || currentFile === '/portfolio.html' || currentFile === '/services.html' || currentFile === '/careers.html' || currentFile === '/team.html' || currentFile === '/referrals.html' || currentFile === '/quote.html' || currentFile === '/contact.html'){
      alertify.error("Verify your information, you have " + errors + " errors.");
    }else if (currentFile === '/index-es.html' || currentFile === '/portfolio-es.html' || currentFile === '/services-es.html' || currentFile === '/careers-es.html' || currentFile === '/team-es.html' || currentFile === '/referrals-es.html' || currentFile === '/quote-es.html' || currentFile === '/contact-es.html'){
      alertify.error("Verifica tu infomación, tienes " + errors + " errores.");
    }
  },
  rules:('add', {
    name: {
      required: true,
      regex: /^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/
    },
    message: {
      required: true
    },
    email: {
      required: true,
      // Specify that email should be validated
      // by the built-in "email" rule
      email: true
    }
  })
});

// added function to capture TAB and ENTER to make the field change
// in the form of the homepage as it, is a slider.
// -----------------------------------------------------------------

var captureTabandEnter = function(event){
  if ( event.which === 13 || event.which === 9) {
   var form = $('form[name="form-contact-more_desktop"]').validate();
    event.preventDefault();
    if ( form.element(this) ) { $('.section_form-carousel').slick('slickNext'); }
    if (this.id === 'inputName'){ $('#nameText').text($(this).val()); }
    if (this.id === 'inputEmail'){$('#emailText').text($(this).val()); }
    if (this.id === 'inputMessage') { $('form[name="form-contact-more_desktop"]').submit(); }
  }
 }
 
 var elementsInput = $('form[name="form-contact-more_desktop"] input');
 elementsInput.on('keydown', captureTabandEnter);

// Validation form contact in home_mobil

$('form[name="form-contact-more_mobile"]').validate({
  submitHandler: function(form) {
    var data = $('form[name="form-contact-more_mobile"]').serialize();
    $.ajax({
      url: 'http://integrations.blick.mx/more/contact/',
      method: 'POST',
      data: data
    }).done(function(data) {
      if (parseInt(data) === 1) {
        alertify.logPosition("bottom right");
        if (currentFile === '/' || currentFile === '/portfolio.html' || currentFile === '/services.html' || currentFile === '/careers.html' || currentFile === '/team.html' || currentFile === '/referrals.html' || currentFile === '/quote.html' || currentFile === '/contact.html'){
          alertify.success("Thanks for contacting us!");
        }else if (currentFile === '/index-es.html' || currentFile === '/portfolio-es.html' || currentFile === '/services-es.html' || currentFile === '/careers-es.html' || currentFile === '/team-es.html' || currentFile === '/referrals-es.html' || currentFile === '/quote-es.html' || currentFile === '/contact-es.html'){
          alertify.success("¡Gracias por contactarnos!");
        }
        $('form[name="form-contact-more_mobile"]')[0].reset();
      }
    });
  },
  invalidHandler: function(event, validator) {
    var data = $('form[name="form-contact-more_mobile"]').serialize();
    var errors = validator.numberOfInvalids();
    alertify.logPosition("bottom right");
    if (currentFile === '/' || currentFile === '/portfolio.html' || currentFile === '/services.html' || currentFile === '/careers.html' || currentFile === '/team.html' || currentFile === '/referrals.html' || currentFile === '/quote.html' || currentFile === '/contact.html'){
      alertify.error("Verify your information, you have " + errors + " errors.");
    }else if (currentFile === '/index-es.html' || currentFile === '/portfolio-es.html' || currentFile === '/services-es.html' || currentFile === '/careers-es.html' || currentFile === '/team-es.html' || currentFile === '/referrals-es.html' || currentFile === '/quote-es.html' || currentFile === '/contact-es.html'){
      alertify.error("Verifica tu infomación, tienes " + errors + " errores.");
    }
  },
  // required fields
  rules:('add', {
    name: {
      required: true,
      regex: /^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/
    },
    message: {
      required: true
    },
    email: {
      required: true,
      // Specify that email should be validated
      // by the built-in "email" rule
      email: true
    }
  })
});

// Validate form contact in section contact

$('form[name="form-contact-more_contact"]').validate({
  
  submitHandler: function(form) {
    var data = $('form[name="form-contact-more_contact"]').serialize();
    $.ajax({
      url: 'http://integrations.blick.mx/more/contact/',
      method: 'POST',
      data: data
    }).done(function(data) {
      if (parseInt(data) === 1) {
        alertify.logPosition("bottom right");
        if (currentFile === '/' || currentFile === '/portfolio.html' || currentFile === '/services.html' || currentFile === '/careers.html' || currentFile === '/team.html' || currentFile === '/referrals.html' || currentFile === '/quote.html' || currentFile === '/contact.html'){
          alertify.success("Thanks for contacting us!");
        }else if (currentFile === '/index-es.html' || currentFile === '/portfolio-es.html' || currentFile === '/services-es.html' || currentFile === '/careers-es.html' || currentFile === '/team-es.html' || currentFile === '/referrals-es.html' || currentFile === '/quote-es.html' || currentFile === '/contact-es.html'){
          alertify.success("¡Gracias por contactarnos!");
        }
        $('form[name="form-contact-more_contact"]')[0].reset();
      }
    });
  },
  invalidHandler: function(event, validator) {
    var data = $('form[name="form-contact-more_contact"]').serialize();
    var errors = validator.numberOfInvalids();
    alertify.logPosition("bottom right");
    if (currentFile === '/' || currentFile === '/portfolio.html' || currentFile === '/services.html' || currentFile === '/careers.html' || currentFile === '/team.html' || currentFile === '/referrals.html' || currentFile === '/quote.html' || currentFile === '/contact.html'){
      alertify.error("Verify your information, you have " + errors + " errors.");
    }else if (currentFile === '/index-es.html' || currentFile === '/portfolio-es.html' || currentFile === '/services-es.html' || currentFile === '/careers-es.html' || currentFile === '/team-es.html' || currentFile === '/referrals-es.html' || currentFile === '/quote-es.html' || currentFile === '/contact-es.html'){
      alertify.error("Verifica tu infomación, tienes " + errors + " errores.");
    }
  },
  rules:('add', {
    name: {
      required: true,
      regex: /^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/
    },
    message: {
      required: true
    },
    email: {
      required: true,
      // Specify that email should be validated
      // by the built-in "email" rule
      email: true
    }
  })
});

