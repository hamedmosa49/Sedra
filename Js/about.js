// =========================
// Mobile Navbar
// =========================

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {

    menuBtn.addEventListener("click", () => {

        menuBtn.classList.toggle("active");

        mobileNav.classList.toggle("open");

    });


    mobileNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            menuBtn.classList.remove("active");

            mobileNav.classList.remove("open");

        });

    });

}


// =========================
// Navbar Scroll
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(5,5,5,.95)";

    } else {

        navbar.style.background = "rgba(5,5,5,.75)";

    }

}); 