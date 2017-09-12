
function showTab(service) {

  var i, tabcontent, tablinks;
  tablinks = document.getElementsByClassName("section_services-tablink");
  tabcontent = document.getElementsByClassName("section_services-tabcontent-wrapper");

  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" open-tab", "");
  }

  document.getElementById(service).style.display = "flex";
  // e.currentTarget.classList.add('open-class');
}

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultTab").click();