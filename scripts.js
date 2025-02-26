document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu");
    const navMobile = document.getElementById("navMobile");
    const overlay = document.getElementById("overlay");
    const menuLinks = navMobile.querySelectorAll("a");

    function toggleMenu() {
        if (navMobile.style.display === "block") {
            navMobile.style.display = "none";
            overlay.style.display = "none";
        } else {
            navMobile.style.display = "block";
            overlay.style.display = "block";
        }
    }

    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleMenu();
    });

    document.addEventListener("click", function (event) {
        if (
            navMobile.style.display === "block" &&
            !navMobile.contains(event.target) &&
            event.target !== menuIcon
        ) {
            navMobile.style.display = "none";
            overlay.style.display = "none";
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMobile.style.display = "none";
            overlay.style.display = "none";
        });
    });

    overlay.addEventListener("click", function () {
        navMobile.style.display = "none";
        overlay.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const slideBig = document.querySelector(".slide-big");
    const slideSmall = document.querySelectorAll(".slide-small");

    slideSmall.forEach(slide => {
        slide.addEventListener("click", function () {
            slideBig.src = this.src;
        });
    });
});