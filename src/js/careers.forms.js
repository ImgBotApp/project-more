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

$.extend( $.validator.messages, {
  required: "This field is required.",
  remote: "Please fix this field.",
  email: "Please enter a valid email address.",
  url: "Please enter a valid URL.",
  date: "Please enter a valid date.",
  dateISO: "Please enter a valid date (ISO).",
  number: "Please enter a valid number.",
  digits: "Please enter only digits.",
  equalTo: "Please enter the same value again.",
  maxlength: $.validator.format( "Please enter no more than {0} characters." ),
  minlength: $.validator.format( "Please enter at least {0} characters." ),
  rangelength: $.validator.format( "Please enter a value between {0} and {1} characters long." ),
  range: $.validator.format( "Please enter a value between {0} and {1}." ),
  max: $.validator.format( "Please enter a value less than or equal to {0}." ),
  min: $.validator.format( "Please enter a value greater than or equal to {0}." ),
  step: $.validator.format( "Please enter a multiple of {0}." )
});
