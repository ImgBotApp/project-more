(function () {
  var mobile = window.matchMedia('(max-width: 876px)'); // Change

  function detectTouch(e) {
    if (!$(e.target).is('.site-navbar__menu-trigger') && !$(e.target).is('.site-navbar__menu-container') && !$(e.target).closest('.site-navbar__menu-container').length && $('.site-navbar__menu-container').hasClass('site-navbar__menu-container--show-menu')) {
      e.preventDefault();
      $('.site-navbar__menu-container').removeClass('site-navbar__menu-container--show-menu');
      $('body').removeClass('noscroll');
    }
  }

  function detectClick() {
    if ($('.site-navbar__menu-container').hasClass('site-navbar__menu-container--show-menu')) {
      $('.site-navbar__menu-container').removeClass('site-navbar__menu-container--show-menu');
      $('body').removeClass('noscroll');
    } else {
      $('.site-navbar__menu-container').addClass('site-navbar__menu-container--show-menu');
      $('body').addClass('noscroll');
    }
  }

  if (mobile.matches) {
    $('body')[0].addEventListener('touchstart', detectTouch, {passive: false});
    $('.site-navbar__menu-trigger').click(detectClick);
  } else {
    $('body')[0].removeEventListener('touchstart', detectTouch, {passive: false});
    $('.site-navbar__menu-trigger').off('click');
    $('body').removeClass('noscroll');
  }

  $(window).resize(function () {
    $('body')[0].removeEventListener('touchmove', detectTouch, {passive: false});
    $('.site-navbar__menu-trigger').off('click');
    $('body').removeClass('noscroll');
    $('.site-navbar__menu-container').removeClass('show-menu');

    if (mobile.matches) {
      $('body')[0].addEventListener('touchmove', detectTouch, {passive: false});
      $('.site-navbar__menu-trigger').click(detectClick);
    }
  });
})();