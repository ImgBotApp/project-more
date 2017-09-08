var siteNavbar = document.querySelector('.site-navbar');

function changeNavSt() {
  if (window.scrollY > 20) {
    siteNavbar.classList.remove('active');
  } else {
    siteNavbar.classList.add('active');
  }
}
if (window.location.pathname === "/index.html" || window.location.pathname === "/" || window.location.pathname === "project-more/index.html" || window.location.pathname === "project-more/") {
  window.addEventListener('scroll', changeNavSt);
  changeNavSt();
}

