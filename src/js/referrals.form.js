$('form[name="form-referrals"]').validate({
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
  },
  rules:('add', {
    nameReferrals: {
      required: true,
      regex: /^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/
    },
    messageReferrals: {
      required: true
    },
    mailReferrals: {
      required: true,
      // Specify that email should be validated
      // by the built-in "email" rule
      email: true
    },
    phoneReferrals: {
      required: true
    },
    messages: {
      mailReferrals: "Por favor introduce un correo valido."
    }
  })
});