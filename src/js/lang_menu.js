var langMenu = document.querySelector('.lang_menu_desktop');
var langMenuMobile = document.querySelector('.lang_mobile');

langMenu.addEventListener('click', function () { 
  langMenu.classList.toggle('active');
  document.querySelector('.cover-lang_menu-d').classList.toggle('coverOn');
});
langMenuMobile.addEventListener('click', function () { 
  langMenuMobile.classList.toggle('active');
  document.querySelector('.cover-lang_menu-m').classList.toggle('coverOn');
});