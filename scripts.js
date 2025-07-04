document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu");
    const navMobile = document.getElementById("navMobile");
    const overlay = document.getElementById("overlay");
    const menuLinks = navMobile.querySelectorAll("a");

    function toggleMenu() {
        if (navMobile.style.display === "block") {
            navMobile.style.display = "none";
            overlay.style.display = "none";
            menuIcon.classList.remove("menu-active");
        } else {
            navMobile.style.display = "block";
            overlay.style.display = "block";
            menuIcon.classList.add("menu-active");
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
            menuIcon.classList.remove("menu-active");
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            navMobile.style.display = "none";
            overlay.style.display = "none";
            menuIcon.classList.remove("menu-active");
        });
    });

    overlay.addEventListener("click", function () {
        navMobile.style.display = "none";
        overlay.style.display = "none";
        menuIcon.classList.remove("menu-active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    
    const containers = document.querySelectorAll(".slides");

    containers.forEach(container => {
        const slideBig = container.querySelector(".slide-big");
        const slideSmall = container.querySelectorAll(".slide-small");

        slideSmall.forEach(slide => {
            slide.addEventListener("click", function () {
                slideBig.src = this.src;
            });
        });
    });
});

function copyToClipboard(text, event) {
    event.preventDefault();
    navigator.clipboard.writeText(text).then(function() {
        alert('Texto copiado: ' + text);
    }, function(err) {
        console.error('Erro ao copiar: ', err);
    });
}