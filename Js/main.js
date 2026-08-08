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


    // Close menu after clicking a link

    mobileNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            menuBtn.classList.remove("active");

            mobileNav.classList.remove("open");

        });

    });

}



// =========================
// Navbar Scroll Effect
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



// =========================
// Reveal Animation
// =========================

const revealElements =
    document.querySelectorAll(
        ".feature-card, .featured, .stat, .cta"
    );


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});
