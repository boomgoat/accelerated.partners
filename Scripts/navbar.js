window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (mq.matches) {
        var overlay = document.getElementById("menu-overlay");
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").classList.add("scroll-nav");
            document.getElementById("side-bar").classList.remove("side-block");
            document.getElementById("logo").src = "./Resources/Logo/Logo-Dark.png";
            overlay.classList.remove("hide-overlay");
        } else {
            document.getElementById("navbar").classList.remove("scroll-nav");
            document.getElementById("side-bar").classList.add("side-block");
            document.getElementById("logo").src = "./Resources/Logo/Logo-Light.png";
            overlay.classList.add("hide-overlay");
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
