(function () {
  var currentFile = window.location.pathname;
  var fixField;
  if (currentFile === '/' || currentFile === '/index.html'  || currentFile === '/portfolio.html' || currentFile === '/services.html' || currentFile === '/careers.html' || currentFile === '/team.html' || currentFile === '/referrals.html' || currentFile === '/quote.html' || currentFile === '/contact.html'){
   fixField = "Please fix this field.";
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
  }
  else if (currentFile === '/index-es.html' || currentFile === '/portfolio-es.html' || currentFile === '/services-es.html' || currentFile === '/careers-es.html' || currentFile === '/team-es.html' || currentFile === '/referrals-es.html' || currentFile === '/quote-es.html' || currentFile === '/contact-es.html'){
    fixField = "Por favor, corrige este campo";
    $.extend( $.validator.messages, { 
      required: "Este campo es obligatorio.",
      remote: "Por favor, rellena este campo.",
      email: "Por favor, escribe una dirección de correo válida.",
      url: "Por favor, escribe una URL válida.",
      date: "Por favor, escribe una fecha válida.",
      dateISO: "Por favor, escribe una fecha (ISO) válida.",
      number: "Por favor, escribe un número válido.",
      digits: "Por favor, escribe sólo dígitos.",
      creditcard: "Por favor, escribe un número de tarjeta válido.",
      equalTo: "Por favor, escribe el mismo valor de nuevo.",
      extension: "Por favor, escribe un valor con una extensión aceptada.",
      maxlength: $.validator.format( "Por favor, no escribas más de {0} caracteres." ),
      minlength: $.validator.format( "Por favor, no escribas menos de {0} caracteres." ),
      rangelength: $.validator.format( "Por favor, escribe un valor entre {0} y {1} caracteres." ),
      range: $.validator.format( "Por favor, escribe un valor entre {0} y {1}." ),
      max: $.validator.format( "Por favor, escribe un valor menor o igual a {0}." ),
      min: $.validator.format( "Por favor, escribe un valor mayor o igual a {0}." ),
      nifES: "Por favor, escribe un NIF válido.",
      nieES: "Por favor, escribe un NIE válido.",
      cifES: "Por favor, escribe un CIF válido."
    });
  };
  $.validator.setDefaults({
    invalidHandler: function (event, validator) {
      var form = $(this);
      form.find('.form-message')
      .removeClass(form.hasClass('success') ? 'success' : 'error')
      .html('');
    },
    submitHandler: function (form) {
      var $form = $(form).serialize(),
        fields = $(form).find('select, input, textarea, button').not('[disabled]'),
        formMessage = $(form).find('.form-message'),
        successMessage = $('<i class="fa fa-check-circle"></i><span>Message sent!</span>'),
        errorMessage = $('<i class="fa fa-times-circle"></i><span>an error occurred</span>'),
        setMessage = function (success) {
          var message = success ? successMessage : errorMessage;
          fields.removeAttr('disabled');
          formMessage.removeClass(success ? 'error' : 'success');
          formMessage.addClass(success ? 'success' : 'error');
          formMessage.html(message);
        };

      fields.attr('disabled', 'disabled');
      formMessage.html('');
      if (!$(form).find('.button-wrapper .loader').length) {
        $(form).find('.button-wrapper').addClass('disabled');
      }
      $.ajax({
        url: $(form).attr('action'),
        method: 'POST',
        data: $form
      })
      .done(function (data) {
        setMessage(parseInt(data) === 1);
        form.reset();
      })
      .fail(function () {
        setMessage(false);
      })
      .always(function () {
        fields.removeAttr('disabled');
        $(form).find('.button-wrapper').removeClass('disabled');
      });
    }
  });
  $.validator.addMethod(
    "regex",
    function(value, element, regexp) 
    {
      if (regexp.constructor != RegExp)
          regexp = new RegExp(regexp);
      else if (regexp.global)
          regexp.lastIndex = 0;
      return this.optional(element) || regexp.test(value);
    },
    fixField
  );
  


   
  // --------- INPUT MASKS
  jQuery(function($){
    $('input[type="tel"]').mask("(9?9)\xa09999\xa09999", {placeholder:""});
    // $('input[name="budgetQuote"]').mask("$ 99?9,9?99,999.99", {placeholder:""});
 });
})();