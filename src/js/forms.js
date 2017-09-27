(function () {

  "use strict"


  if (window.location.pathname === "/" ||
      window.location.pathname === "/index.html" ||
      window.location.pathname === "/project-more/index.html" ||
      window.location.pathname === "/careers.html" ||
      window.location.pathname === "/project-more/careers.html" ||
      window.location.pathname === "/referrals.html" ||
      window.location.pathname === "/project-more/referrals.html") {

        var inputs = $( "input" ).not( "#form-contact-more_desktop input" );
        var labelChange;
        
        labelChange = function(idElement) {
          $('#' + idElement).change(function () {
            $('label[for="' + idElement + '"]').text($('#' + idElement).val());
            $('#' + idElement).css('visibility', 'hidden');
          });
        }

        inputs.map(function(index, elem) {
          labelChange(elem.id);
        });
      }
})();