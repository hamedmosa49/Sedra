// =================================================
// SEDRA - CONTACT PAGE
// =================================================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("problemForm");

    // رقم واتساب سدرة
    // اكتب الرقم بصيغة دولية بدون +
    const sedraWhatsApp = "201010472727";

    if (form) {

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("problemName").value.trim();
    const phone = document.getElementById("problemPhone").value.trim();
    const problem = document.getElementById("problemMessage").value.trim();

    if (name === "" || phone === "" || problem === "") {

        alert("من فضلك اكتب الاسم ورقم الهاتف والمشكلة");

        return;
    }

    const message =
        `🚨 بلاغ عن مشكلة - سدرة\n\n` +
        `👤 الاسم: ${name}\n` +
        `📞 الهاتف: ${phone}\n\n` +
        `📝 المشكلة:\n${problem}`;

    const whatsappURL =
        `https://wa.me/${sedraWhatsApp}?text=${encodeURIComponent(message)}`;

    window.location.href = whatsappURL;

});

    }


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

    }


    // =================================================
    // CLOSE MOBILE NAV WHEN CLICKING A LINK
    // =================================================

    if (mobileNav) {

        const navLinks = mobileNav.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileNav.classList.remove("show");
                menuBtn?.classList.remove("open");

            });

        });

    }

});