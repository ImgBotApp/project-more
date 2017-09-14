
function showTab($this, service) {
  $this.classList.add('section_services-tablink');
  console.log('this', $this);
  var i, tabcontent, tablinks;  tablinks = document.getElementsByClassName("section_services-tablink");
  tabcontent = document.getElementsByClassName("section_services-tabcontent-wrapper");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('open-tab');
  }

  document.getElementById(service).style.display = "flex";
  $this.classList.add('open-class');
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultTab").click();