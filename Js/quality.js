// =================================================
// SEDRA QUALITY PAGE
// =================================================

document.addEventListener("DOMContentLoaded", () => {

    // =================================================
    // SCROLL REVEAL
    // =================================================

    const revealElements = document.querySelectorAll(
        ".quality-card, .quality-item, .quality-section, .quality-hero-content"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

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


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    // =================================================
    // MOBILE NAVBAR
    // =================================================

    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");


    if (menuBtn && mobileNav) {

        menuBtn.addEventListener("click", () => {

            mobileNav.classList.toggle("show");
            menuBtn.classList.toggle("open");

        });


        // قفل القائمة بعد الضغط على أي لينك

        const mobileLinks =
            mobileNav.querySelectorAll("a");


        mobileLinks.forEach((link) => {

            link.addEventListener("click", () => {

                mobileNav.classList.remove("show");
                menuBtn.classList.remove("open");

            });

        });

    }


    // =================================================
    // BACK TO TOP
    // =================================================

    const topBtn = document.getElementById("top-btn");


    if (topBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 350) {

                topBtn.classList.add("show");

            } else {

                topBtn.classList.remove("show");

            }

        });


        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

});