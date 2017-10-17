$('form[name="form-quote"]').validate({
  
  submitHandler: function(form) {
    var data = $('form[name="form-quote"]').serialize();
    $.ajax({
      url: 'http://integrations.blick.mx/more/contact/quote/',
      method: 'POST',
      data: data
    }).done(function(data) {
      if (parseInt(data) === 1) {
        alertify.logPosition("bottom right");
        alertify.success("Correo enviado, gracias por contactarte con nosotros.");
        $('form[name="form-quote"]')[0].reset();
      }
    });
  },
  invalidHandler: function(event, validator) {
    var errors = validator.numberOfInvalids();
    alertify.logPosition("bottom right");
    alertify.error("Verifica tu información, tienes " + errors + " errores.");
  },

  rules:('add', {
    nameQuote: {
      required: true,
      regex: /^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/
    },
    phoneQuote: {
      required: true
    },
    projectTypeQuote: {
      required: true
    },
    linkedinCareers: {
      required: true
    },
    projectNameQuote: {
      required: true
    },
    budgetQuote: {
      required: true
    },
    detailsQuote: {
      required: true
    },
    emailQuote: {
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
      email: "Por favor introduce un correo valido."
    }
  })
});