if (window.location.pathname === "/index.html" || window.location.pathname === "/" || window.location.pathname === "project-more/index.html" || window.location.pathname === "project-more/") {
  
  const siteNavbar = document.querySelector('.site-navbar');

  changeNavSt();

  window.addEventListener('scroll', changeNavSt);

  function changeNavSt() {
    if (window.scrollY > 50) {
      siteNavbar.classList.remove('active');
    } else {
      siteNavbar.classList.add('active');
    }
  }
}