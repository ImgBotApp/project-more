
function showTab($this, service) {
  $this.classList.add('section_services-tablink');
  var i, tabcontent, tablinks;  tablinks = document.getElementsByClassName("section_services-tablink");
  tabcontent = document.getElementsByClassName("section_services-tabcontent-wrapper");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('open-tab');
  }

  document.getElementById(service).style.display = "flex";
  $this.classList.add('open-tab');
}