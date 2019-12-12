window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (mq.matches) {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").classList.add("scroll-nav");
            document.getElementById("logo").src = "./Resources/Logo/Logo-Dark.png";
        } else {
            document.getElementById("navbar").classList.remove("scroll-nav");
            document.getElementById("logo").src = "./Resources/Logo/Logo-Light.png";
        }
    } else {
        console.log("heliu")
    }
}

function toggle() {
    var hamburger = document.getElementById("nav-toggle");
    var menu = document.getElementById("side-bar");
    var overlay = document.getElementById("menu-overlay");
    hamburger.classList.toggle("rotate");
    menu.classList.toggle("slide");
    overlay.classList.toggle("overlay-fadeIn");
}

const mq = window.matchMedia( "(min-width: 780px)" );
