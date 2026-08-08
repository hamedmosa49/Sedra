// =================================================
// SEDRA CHECKOUT
// =================================================

document.addEventListener("DOMContentLoaded", function () {

    // =================================================
    // WHATSAPP NUMBER
    // =================================================

    const WHATSAPP_NUMBER = "201280331359";


    // =================================================
    // ELEMENTS
    // =================================================

    const form = document.getElementById("checkoutForm");

    const fullName = document.getElementById("fullName");
    const phone = document.getElementById("phone");
    const governorate = document.getElementById("governorate");
    const center = document.getElementById("center");
    const address = document.getElementById("address");

    const orderItems = document.getElementById("orderItems");
    const orderTotal = document.getElementById("orderTotal");


    // =================================================
    // LOAD CART
    // =================================================

    let cart = JSON.parse(
        localStorage.getItem("sedraCart")
    ) || [];


    // =================================================
    // CENTERS
    // =================================================

    const centers = {

        "القاهرة": [
            "مدينة القاهرة",
            "المعادي",
            "حلوان",
            "مدينة نصر",
            "مصر الجديدة",
            "عين شمس",
            "المطرية",
            "المرج",
            "شبرا",
            "الزيتون",
            "النزهة",
            "البساتين",
            "الخليفة",
            "السيدة زينب",
            "مصر القديمة"
        ],

        "الجيزة": [
            "الجيزة",
            "الهرم",
            "6 أكتوبر",
            "الشيخ زايد",
            "العياط",
            "البدرشين",
            "الصف",
            "أطفيح",
            "الحوامدية",
            "أوسيم",
            "كرداسة",
            "منشأة القناطر",
            "أبو النمرس",
            "الواحات البحرية"
        ],

        "الإسكندرية": [
            "الإسكندرية",
            "برج العرب",
            "برج العرب الجديدة",
            "العامرية",
            "العجمي",
            "المنتزه",
            "الرمل",
            "سيدي جابر",
            "محرم بك"
        ],

        "القليوبية": [
            "بنها",
            "شبرا الخيمة",
            "القناطر الخيرية",
            "الخانكة",
            "الخصوص",
            "قليوب",
            "طوخ",
            "شبين القناطر",
            "كفر شكر",
            "العبور"
        ],

        "الشرقية": [
            "الزقازيق",
            "أبو كبير",
            "أبو حماد",
            "أولاد صقر",
            "بلبيس",
            "ديرب نجم",
            "فاقوس",
            "كفر صقر",
            "منيا القمح",
            "مشتول السوق",
            "ههيا",
            "الحسينية",
            "الإبراهيمية",
            "القرين",
            "صان الحجر"
        ],

        "الدقهلية": [
            "المنصورة",
            "ميت غمر",
            "بلقاس",
            "دكرنس",
            "السنبلاوين",
            "شربين",
            "طلخا",
            "أجا",
            "منية النصر",
            "المطرية",
            "الجمالية",
            "نبروه",
            "بني عبيد",
            "تمي الأمديد",
            "المنزلة"
        ],

        "الغربية": [
            "طنطا",
            "المحلة الكبرى",
            "كفر الزيات",
            "زفتى",
            "السنطة",
            "سمنود",
            "قطور",
            "بسيون"
        ],

        "المنوفية": [
            "شبين الكوم",
            "منوف",
            "السادات",
            "أشمون",
            "الباجور",
            "بركة السبع",
            "تلا",
            "الشهداء",
            "قويسنا"
        ],

        "البحيرة": [
            "دمنهور",
            "كفر الدوار",
            "رشيد",
            "إدكو",
            "أبو المطامير",
            "أبو حمص",
            "الدلنجات",
            "المحمودية",
            "حوش عيسى",
            "شبراخيت",
            "إيتاي البارود",
            "وادي النطرون",
            "كوم حمادة",
            "النوبارية الجديدة",
            "بدر"
        ],

        "كفر الشيخ": [
            "كفر الشيخ",
            "دسوق",
            "فوه",
            "مطوبس",
            "بلطيم",
            "الحامول",
            "بيلا",
            "قلين",
            "سيدي سالم",
            "الرياض",
            "البرلس"
        ],

        "دمياط": [
            "دمياط",
            "دمياط الجديدة",
            "فارسكور",
            "الزرقا",
            "كفر سعد",
            "كفر البطيخ",
            "رأس البر"
        ],

        "بورسعيد": [
            "بورسعيد",
            "بورفؤاد",
            "الزهور",
            "الضواحي",
            "العرب",
            "المناخ",
            "الشرق"
        ],

        "الإسماعيلية": [
            "الإسماعيلية",
            "فايد",
            "القنطرة شرق",
            "القنطرة غرب",
            "التل الكبير",
            "أبو صوير",
            "القصاصين الجديدة"
        ],

        "السويس": [
            "السويس",
            "الأربعين",
            "عتاقة",
            "الجناين",
            "فيصل"
        ],

        "شمال سيناء": [
            "العريش",
            "بئر العبد",
            "الشيخ زويد",
            "رفح",
            "الحسنة",
            "نخل"
        ],

        "جنوب سيناء": [
            "الطور",
            "شرم الشيخ",
            "دهب",
            "نويبع",
            "طابا",
            "سانت كاترين",
            "رأس سدر",
            "أبو رديس",
            "أبو زنيمة"
        ],

        "الفيوم": [
            "الفيوم",
            "سنورس",
            "طامية",
            "إطسا",
            "إبشواي",
            "يوسف الصديق"
        ],

        "بني سويف": [
            "بني سويف",
            "الواسطى",
            "ناصر",
            "إهناسيا",
            "ببا",
            "الفشن",
            "سمسطا"
        ],

        "المنيا": [
            "المنيا",
            "ملوي",
            "مغاغة",
            "بني مزار",
            "أبو قرقاص",
            "سمالوط",
            "مطاي",
            "العدوة",
            "دير مواس"
        ],

        "أسيوط": [
            "أسيوط",
            "ديروط",
            "منفلوط",
            "القوصية",
            "أبنوب",
            "الفتح",
            "أبو تيج",
            "الغنايم",
            "ساحل سليم",
            "البداري",
            "صدفا"
        ],

        "سوهاج": [
            "سوهاج",
            "أخميم",
            "طهطا",
            "جرجا",
            "البلينا",
            "المراغة",
            "المنشأة",
            "جهينة",
            "دار السلام",
            "ساقلته",
            "العسيرات"
        ],

        "قنا": [
            "قنا",
            "نجع حمادي",
            "دشنا",
            "قفط",
            "قوص",
            "نقادة",
            "أبو تشت",
            "الوقف",
            "فرشوط"
        ],

        "الأقصر": [
            "الأقصر",
            "إسنا",
            "أرمنت",
            "الطود",
            "البياضية",
            "القرنة"
        ],

        "أسوان": [
            "أسوان",
            "دراو",
            "كوم أمبو",
            "نصر النوبة",
            "إدفو",
            "أبو سمبل"
        ],

        "الوادي الجديد": [
            "الخارجة",
            "الداخلة",
            "الفرافرة",
            "باريس",
            "بلاط"
        ],

        "مطروح": [
            "مرسى مطروح",
            "الحمام",
            "العلمين",
            "الضبعة",
            "سيدي براني",
            "النجيلة",
            "السلوم",
            "سيوة",
            "برانيس"
        ]

    };


    // =================================================
    // CHANGE GOVERNORATE
    // =================================================

    governorate.addEventListener("change", function () {

        const selectedGovernorate =
            governorate.value;

        center.innerHTML = "";

        if (!selectedGovernorate) {

            center.disabled = true;

            center.innerHTML = `
                <option value="">
                    اختر المحافظة أولًا
                </option>
            `;

            return;
        }


        center.disabled = false;


        center.innerHTML = `
            <option value="">
                اختر المركز
            </option>
        `;


        const governorateCenters =
            centers[selectedGovernorate] || [];


        governorateCenters.forEach(function (centerName) {

            const option =
                document.createElement("option");

            option.value = centerName;

            option.textContent = centerName;

            center.appendChild(option);

        });

    });


    // =================================================
    // RENDER CART
    // =================================================

    function renderCart() {

        orderItems.innerHTML = "";

        if (cart.length === 0) {

            orderItems.innerHTML = `
                <p style="
                    color:#85827b;
                    font-size:12px;
                    text-align:center;
                    padding:10px 0;
                ">
                    السلة فارغة
                </p>
            `;

            orderTotal.textContent = "0";

            return;
        }


        let total = 0;


        cart.forEach(function (item) {

            const quantity =
                Number(item.quantity) || 0;

            const price =
                Number(item.price) || 0;

            const itemTotal =
                quantity * price;

            total += itemTotal;


            const row =
                document.createElement("div");

            row.className = "summary-item";


            row.innerHTML = `
                <span>
                    ${item.name} × ${quantity}
                </span>

                <strong>
                    ${
                        item.price
                        ? itemTotal + " جنيه"
                        : "السعر غير محدد"
                    }
                </strong>
            `;


            orderItems.appendChild(row);

        });


        orderTotal.textContent =
            total > 0
                ? total + " جنيه"
                : "السعر غير محدد";

    }


    // =================================================
    // CREATE WHATSAPP MESSAGE
    // =================================================

    function createWhatsAppMessage() {

        let message =
`🛍️ *طلب جديد - سدرة*

👤 *بيانات العميل*
الاسم: ${fullName.value.trim()}
رقم الهاتف: ${phone.value.trim()}

📍 *بيانات العنوان*
المحافظة: ${governorate.value}
المركز: ${center.value}
العنوان بالتفصيل: ${address.value.trim()}

🛒 *تفاصيل الطلب*
`;


        let total = 0;


        cart.forEach(function (item) {

            const quantity =
                Number(item.quantity) || 0;

            const price =
                Number(item.price) || 0;

            const itemTotal =
                quantity * price;


            total += itemTotal;


            message +=
`\n• ${item.name} × ${quantity}`;


            if (item.price) {

                message +=
` — ${itemTotal} جنيه`;

            }

        });


        message +=
`\n\n💰 *الإجمالي:* `;


        if (total > 0) {

            message +=
`${total} جنيه`;

        } else {

            message +=
`السعر غير محدد`;

        }


        message +=
`\n\nشكراً لاختياركم سدرة ❤️`;


        return message;

    }


    // =================================================
    // SUBMIT ORDER
    // =================================================

    form.addEventListener("submit", function (event) {

        event.preventDefault();


        // التأكد من وجود منتجات

        if (cart.length === 0) {

            alert("السلة فارغة، اختر منتجًا أولًا.");

            window.location.href =
                "products.html";

            return;

        }


        // التأكد من اختيار المركز

        if (!center.value) {

            alert("من فضلك اختر المركز.");

            center.focus();

            return;

        }


        // إنشاء الرسالة

        const message =
            createWhatsAppMessage();


        // تحويل الرسالة إلى URL

        const whatsappURL =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(message);


        // فتح واتساب

        window.location.href =
            whatsappURL;

    });


    // =================================================
    // INITIALIZE
    // =================================================

    renderCart();

});