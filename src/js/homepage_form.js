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
        alertify.success("Correo enviado, gracias por contactarte con nosotros.");
        $('form[name="form-contact-more_desktop"]')[0].reset();
      }
    });
  },
  invalidHandler: function(event, validator) {
    var errors = validator.numberOfInvalids();
    alertify.logPosition("bottom right");
    alertify.error("Verifica tu información, tienes " + errors + " errores.");
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
    },
    messages: {
      name: {
        required: "Por favor introduce tu nombre ",
        regex: "Por favor introduce un nombre válido"
      },
      message: "Por favor introduce tu mensaje.",
      email: "Por favor introduce un correo valido."
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
        alertify.success("Correo enviado, gracias por contactarte con nosotros.");
        $('form[name="form-contact-more_mobile"]')[0].reset();
      }
    });
  },
  invalidHandler: function(event, validator) {
    var data = $('form[name="form-contact-more_mobile"]').serialize();
    var errors = validator.numberOfInvalids();
    alertify.logPosition("bottom right");
    alertify.error("Verifica tu información tienes " + errors + " errores.");
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
    },
    messages: {
      name: {
        required: "Por favor introduce tu nombre ",
        regex: "Por favor introduce un nombre válido"
      },
      message: "Por favor introduce tu mensaje.",
      email: "Por favor introduce un correo valido."
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
        alertify.success("Correo enviado, gracias por contactarte con nosotros.");
        $('form[name="form-contact-more_contact"]')[0].reset();
      }
    });
  },
  invalidHandler: function(event, validator) {
    var data = $('form[name="form-contact-more_contact"]').serialize();
    var errors = validator.numberOfInvalids();
    alertify.logPosition("bottom right");
    alertify.error("Verifica tu información tienes " + errors + " errores.");
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
    },
    messages: {
      name: {
        required: "Por favor introduce tu nombre ",
        regex: "Por favor introduce un nombre válido"
      },
      message: "Por favor introduce tu mensaje.",
      email: "Por favor introduce un correo valido."
    }
  })
});
