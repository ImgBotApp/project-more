$('form[name="form-careers-1"]').validate({
  openingCareers: 'requied',
  submitHandler: function(form) {
    var data = $('form[name="form-careers-1"]').serialize();
    $.ajax({
      url: 'http://integrations.blick.mx/more/contact/careers1/',
      method: 'POST',
      data: data
    }).done(function(data) {
      if (parseInt(data) === 1) {
        alertify.logPosition("bottom right");
        alertify.success("Thanks for contacting us!");
        $('form[name="form-careers-1"]')[0].reset();
      }
    });
  },
  invalidHandler: function(event, validator) {
    var errors = validator.numberOfInvalids();
    alertify.logPosition("bottom right");
    alertify.error("Verify your information, you have " + errors + " errors.");
  },
  rules:('add', {
    nameCareers: {
      required: true,
      regex: /^([a-zA-Z]+[,.]?[ ]?|[a-zA-Z]+['-]?)+$/
    },
    openingCareers: {
      required: true
    },
    emailCareers: {
      required: true,
      // Specify that email should be validated
      // by the built-in "email" rule
      email: true
    },
    phoneCareers: {
      required: true
    }
  })
});

$('form[name="form-careers-2"]').validate({
  // required fields
  whyMoreCareers: 'required',
  submitHandler: function(form) {
    var data = $('form[name="form-careers-2"]').serialize();
    $.ajax({
      url: 'http://integrations.blick.mx/more/contact/careers2/',
      method: 'POST',
      data: data
    }).done(function(data) {
      if (parseInt(data) === 1) {
        alertify.logPosition("bottom right");
        alertify.success("Thanks for contacting us!");
        $('form[name="form-careers-1"]')[0].reset();
      }
    });
  },
  invalidHandler: function(event, validator) {
    var errors = validator.numberOfInvalids();
    alertify.logPosition("bottom right");
    alertify.error("Verify your information, you have " + errors + " errors.");
  }
});

