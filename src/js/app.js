(function () {
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
        successMessage = $('<i class="fa fa-check-circle"></i><span>Mensaje enviado exitosamente</span>'),
        errorMessage = $('<i class="fa fa-times-circle"></i><span>Ocurrió un error</span>'),
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
    "Por favor escribe un campo válido"
  );
  // --------- INPUT MASKS
  jQuery(function($){
    $('input[type="tel"]').mask("(9?9)\xa09999\xa09999", {placeholder:""});
    // $('input[name="budgetQuote"]').mask("$ 99?9,9?99,999.99", {placeholder:""});
 });
})();