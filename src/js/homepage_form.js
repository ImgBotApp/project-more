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

// $('.section_form-carousel-next').eq(0).on("click", function() {
//   var inputName = $('#inputName').val();
//   $('#nameText').text(inputName);
// });

// $('.section_form-carousel-next').eq(1).on("click", function() {
//   var inputEmail = $('#inputEmail').val();
//   $('#emailText').text(inputEmail);
// });


// $('#nameInputMobile').change(function () {
//   $('label[for="nameInputMobile"]').text($('#nameInputMobile').val());
// });
// $('#emailInputMobile').change(function () {
//   $('label[for="emailInputMobile"]').text($('#emailInputMobile').val());
// });
// $('#messageInputMobile').change(function () {
//   $('label[for="messageInputMobile"]').text($('#messageInputMobile').val());
// });

// Validation form contact in home_desktop

$('form[name="form-contact-more_desktop"]').validate({
  // required fields
  name: 'required',
  message: 'required',
  email: {
    required: true,
    // Specify that email should be validated
    // by the built-in "email" rule
    email: true
  },
  messages: {
    name: "Por favor introduce tu nombre.",
    message: "Por favor introduce tu mensaje.",
    email: "Por favor introduce un correo valido."
  },
  submitHandler: function(form) {
    var data = $('form[name="form-contact-more_desktop"]').serialize();
    console.log(data);
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
    alertify.error("Verifica tu información tienes " + errors + " errores.");
  }
});

// Validation form contact in home_mobil

$('form[name="form-contact-more_mobile"]').validate({
  // required fields
  name: 'required',
  message: 'required',
  email: {
    required: true,
    // Specify that email should be validated
    // by the built-in "email" rule
    email: true
  },
  messages: {
    name: "Por favor introduce tu nombre.",
    message: "Por favor introduce tu mensaje.",
    email: "Por favor introduce un correo valido."
  },
  submitHandler: function(form) {
    var data = $('form[name="form-contact-more_mobile"]').serialize();
    console.log(data);
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
    console.log(data);
    var errors = validator.numberOfInvalids();
    alertify.logPosition("bottom right");
    alertify.error("Verifica tu información tienes " + errors + " errores.");
  }
});

// Validate form contact in section contact

$('form[name="form-contact-more_contact"]').validate({
  // required fields
  name: 'required',
  message: 'required',
  email: {
    required: true,
    // Specify that email should be validated
    // by the built-in "email" rule
    email: true
  },
  messages: {
    name: "Por favor introduce tu nombre.",
    message: "Por favor introduce tu mensaje.",
    email: "Por favor introduce un correo valido."
  },
  submitHandler: function(form) {
    var data = $('form[name="form-contact-more_contact"]').serialize();
    console.log(data);
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
    console.log(data);
    var errors = validator.numberOfInvalids();
    alertify.logPosition("bottom right");
    alertify.error("Verifica tu información tienes " + errors + " errores.");
  }
});