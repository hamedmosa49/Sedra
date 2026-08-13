document.addEventListener("DOMContentLoaded", () => {

    let deferredPrompt = null;

    // =========================
    // SERVICE WORKER
    // =========================

    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("./service-worker.js")
                .catch(error => {
                    console.error("SW Error:", error);
                });
        });
    }


    // =========================
    // INSTALL BANNER
    // =========================

    const banner = document.createElement("div");

    banner.id = "sedraInstallBanner";

    banner.innerHTML = `
        <div class="sedra-install-content">

            <div class="sedra-install-icon">
                سدرة
            </div>

            <div class="sedra-install-text">
                <strong>ثبّت تطبيق سدرة 📱</strong>

                <span>
                    أضف سدرة إلى شاشة هاتفك للوصول السريع
                </span>
            </div>

            <button id="sedraInstallBtn" type="button">
                تثبيت التطبيق
            </button>

            <button
                id="sedraInstallClose"
                type="button"
                aria-label="إغلاق">
                ×
            </button>

        </div>
    `;

    document.body.appendChild(banner);


    const installBtn =
        document.getElementById("sedraInstallBtn");

    const closeBtn =
        document.getElementById("sedraInstallClose");


    // =========================
    // SHOW BANNER AUTOMATICALLY
    // =========================

    setTimeout(() => {
        banner.classList.add("show");
    }, 500);


    // =========================
    // BROWSER INSTALL EVENT
    // =========================

    window.addEventListener(
        "beforeinstallprompt",
        (event) => {

            event.preventDefault();

            deferredPrompt = event;

        }
    );


    // =========================
    // INSTALL
    // =========================

    installBtn.addEventListener(
        "click",
        async () => {

            // المتصفح يسمح بالتثبيت
            if (deferredPrompt) {

                deferredPrompt.prompt();

                const result =
                    await deferredPrompt.userChoice;

                if (result.outcome === "accepted") {

                    banner.classList.remove("show");

                }

                deferredPrompt = null;

                return;
            }


            // =========================
            // FALLBACK
            // =========================

            alert(
                "لو لم تظهر نافذة التثبيت، افتح قائمة المتصفح ثم اختر «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية»."
            );

        }
    );


    // =========================
    // CLOSE
    // =========================

    closeBtn.addEventListener(
        "click",
        () => {

            banner.classList.remove("show");

        }
    );


    // =========================
    // APP INSTALLED
    // =========================

    window.addEventListener(
        "appinstalled",
        () => {

            banner.classList.remove("show");

            deferredPrompt = null;

        }
    );

});