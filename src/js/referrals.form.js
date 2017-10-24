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
        alertify.success("Thanks for contacting us!");
        $('form[name="form-referrals"]')[0].reset();
      }
    });
  },
  invalidHandler: function(event, validator) {
    var errors = validator.numberOfInvalids();
    alertify.logPosition("bottom right");
    alertify.error("Verify your information, you have " + errors + " errors.");
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
    }
  })
});