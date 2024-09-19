window.onscroll = function() {
  scrollFunction();
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar").style.backgroundColor = "#000000";
  } else {
    document.querySelector(".navbar").style.backgroundColor = "transparent";
  }
}