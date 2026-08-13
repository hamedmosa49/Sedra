// ==========================================
// SEDRA APP INSTALL
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    let deferredPrompt = null;


    // ==========================================
    // REGISTER SERVICE WORKER
    // ==========================================

    if ("serviceWorker" in navigator) {

        window.addEventListener("load", () => {

            navigator.serviceWorker
                .register("./service-worker.js")
                .then(() => {

                    console.log(
                        "Sedra Service Worker registered successfully."
                    );

                })
                .catch(error => {

                    console.error(
                        "Service Worker registration failed:",
                        error
                    );

                });

        });

    }


    // ==========================================
    // INSTALL BANNER
    // ==========================================

    const banner = document.createElement("div");

    banner.id = "sedraInstallBanner";

    banner.innerHTML = `

        <div class="sedra-install-content">

            <div class="sedra-install-icon">
                سدرة
            </div>

            <div class="sedra-install-text">

                <strong>
                    ثبّت تطبيق سدرة 📱
                </strong>

                <span>
                    خلي سدرة على شاشة موبايلك
                    ووصل لمنتجاتنا بسهولة.
                </span>

            </div>

            <button id="sedraInstallBtn">
                تثبيت
            </button>

            <button
                id="sedraInstallClose"
                aria-label="إغلاق"
            >
                ×
            </button>

        </div>

    `;


    document.body.appendChild(banner);


    // ==========================================
    // INSTALL BUTTON
    // ==========================================

    const installButton =
        document.getElementById("sedraInstallBtn");


    const closeButton =
        document.getElementById("sedraInstallClose");


    // ==========================================
    // INSTALL EVENT
    // ==========================================

    window.addEventListener(
        "beforeinstallprompt",
        event => {

            event.preventDefault();

            deferredPrompt = event;

            banner.classList.add("show");

        }
    );


    // ==========================================
    // INSTALL
    // ==========================================

    installButton.addEventListener(
        "click",
        async () => {

            if (!deferredPrompt) {
                return;
            }


            deferredPrompt.prompt();


            const result =
                await deferredPrompt.userChoice;


            if (result.outcome === "accepted") {

                console.log(
                    "Sedra app installed."
                );

            }


            deferredPrompt = null;

            banner.classList.remove("show");

        }
    );


    // ==========================================
    // CLOSE
    // ==========================================

    closeButton.addEventListener(
        "click",
        () => {

            banner.classList.remove("show");

            localStorage.setItem(
                "sedraInstallClosed",
                "true"
            );

        }
    );


    // ==========================================
    // APP INSTALLED
    // ==========================================

    window.addEventListener(
        "appinstalled",
        () => {

            banner.classList.remove("show");

            deferredPrompt = null;

            localStorage.setItem(
                "sedraInstalled",
                "true"
            );

        }
    );

});