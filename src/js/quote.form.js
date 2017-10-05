$('form[name="form-quote"]').validate({
  // required fields
  nameQuote: 'required',
  phoneQuote: 'required',
  projectTypeQuote: 'required',
  linkedinCareers: 'required',
  projectNameQuote: 'required',
  budgetQuote: 'required',
  detailsQuote: 'required',
  emailQuote: {
    required: true,
    // Specify that email should be validated
    // by the built-in "email" rule
    email: true
  },
  messages: {
    emailQuote: "Por favor introduce un correo valido."
  },
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
    alertify.error("Verifica tu información tienes " + errors + " errores.");
  }
});