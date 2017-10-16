$('form[name="form-referrals"]').validate({
  // required fields
  nameReferrals: 'required',
  phoneReferrals: 'required',
  messageReferrals: 'required',
  mailReferrals: {
    required: true,
    // Specify that email should be validated
    // by the built-in "email" rule
    email: true
  },
  messages: {
    emailCareers: "Por favor introduce un correo válido."
  },
  submitHandler: function(form) {
    var data = $('form[name="form-referrals"]').serialize();
    $.ajax({
      url: 'http://integrations.blick.mx/more/contact/referrals/',
      method: 'POST',
      data: data
    }).done(function(data) {
      if (parseInt(data) === 1) {
        alertify.logPosition("bottom right");
        alertify.success("Correo enviado, gracias por contactarte con nosotros.");
        $('form[name="form-careers-1"]')[0].reset();
      }
    });
  },
  invalidHandler: function(event, validator) {
    var errors = validator.numberOfInvalids();
    alertify.logPosition("bottom right");
    alertify.error("Verifica tu información, tienes " + errors + " errores.");
  }
});