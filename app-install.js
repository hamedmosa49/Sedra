document.addEventListener("DOMContentLoaded", () => {

    let deferredPrompt = null;

    const banner = document.createElement("div");

    banner.id = "sedraInstallBanner";

    banner.innerHTML = `
        <div class="sedra-install-box">

            <button
                class="sedra-install-close"
                id="sedraInstallClose"
                type="button">
                ×
            </button>

            <div class="sedra-install-icon">
                سدرة
            </div>

            <div class="sedra-install-info">

                <strong>
                    أضف سدرة إلى شاشتك 📱
                </strong>

                <span>
                    احفظ موقع سدرة على شاشة هاتفك
                    للوصول إليه بسرعة.
                </span>

            </div>

            <button
                class="sedra-install-btn"
                id="sedraInstallBtn"
                type="button">

                إضافة الآن

            </button>

        </div>
    `;

    document.body.appendChild(banner);


    const installBtn =
        document.getElementById("sedraInstallBtn");

    const closeBtn =
        document.getElementById("sedraInstallClose");


    // إظهار الرسالة
    setTimeout(() => {
        banner.classList.add("show");
    }, 700);


    // لو المتصفح بيدعم التثبيت
    window.addEventListener(
        "beforeinstallprompt",
        event => {

            event.preventDefault();

            deferredPrompt = event;

        }
    );


    installBtn.addEventListener(
        "click",
        async () => {

            // =========================
            // SUPPORTED INSTALL
            // =========================

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
            // ANDROID INSTRUCTIONS
            // =========================

            alert(
                "لإضافة سدرة إلى شاشة هاتفك:\n\n" +
                "1. اضغط على ⋮ أعلى المتصفح.\n" +
                "2. اختر «إضافة إلى الشاشة الرئيسية».\n" +
                "3. اضغط «إضافة»."
            );

        }
    );


    // إغلاق
    closeBtn.addEventListener(
        "click",
        () => {

            banner.classList.remove("show");

        }
    );


    // بعد التثبيت
    window.addEventListener(
        "appinstalled",
        () => {

            banner.classList.remove("show");

        }
    );

});