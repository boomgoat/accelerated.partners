window.onscroll = function() {scrollFunction()};
document.getElementById("logo").src = "./Resources/Logo/Logo-Light.png";

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").classList.add("scroll-nav");
    document.getElementById("logo").src = "./Resources/Logo/Logo-Dark.png";
  } else {
    document.getElementById("navbar").classList.remove("scroll-nav");
    document.getElementById("logo").src = "./Resources/Logo/Logo-Light.png";
  }
}
