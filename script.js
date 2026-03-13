// Get the button
let topButton = document.getElementById("topBtn");

// Show button when scrolling down 200px
window.onscroll = function() {
  if (document.documentElement.scrollTop > 200) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

// Smooth scroll to top
topButton.onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};