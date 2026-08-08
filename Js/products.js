// =================================================
// SEDRA PRODUCTS - CART SYSTEM
// =================================================

document.addEventListener("DOMContentLoaded", () => {

    const products = document.querySelectorAll(".product-card");
    const cartBtn = document.getElementById("cartBtn");
    const cartCount = document.getElementById("cartCount");

    let cart = JSON.parse(localStorage.getItem("sedraCart")) || [];


    // =================================================
    // UPDATE CART COUNT
    // =================================================

    function updateCartCount() {

        const totalQuantity = cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

        if (cartCount) {
            cartCount.textContent = totalQuantity;
        }
    }


    // =================================================
    // SAVE CART
    // =================================================

    function saveCart() {

        localStorage.setItem(
            "sedraCart",
            JSON.stringify(cart)
        );

        updateCartCount();
    }


    // =================================================
    // ADD PRODUCT TO CART
    // =================================================

    products.forEach(product => {

        const addButton =
            product.querySelector(".add-cart");

        if (!addButton) return;


        addButton.addEventListener("click", () => {

            const productName =
                product.dataset.product;

            const productPrice =
                product.dataset.price || "";

            // الحصول على صورة المنتج
            const productImage =
                product.querySelector(".product-image img");


            const imagePath =
                productImage
                    ? productImage.getAttribute("src")
                    : "";


            // البحث عن المنتج داخل السلة

            const existingProduct =
                cart.find(
                    item => item.name === productName
                );


            if (existingProduct) {

                existingProduct.quantity++;

            } else {

                cart.push({

                    name: productName,

                    price: productPrice,

                    image: imagePath,

                    quantity: 1

                });

            }


            saveCart();


            // =================================================
            // BUTTON EFFECT
            // =================================================

            const originalText =
                addButton.innerHTML;

            addButton.innerHTML =
                "تمت الإضافة ✓";

            addButton.classList.add("added");


            setTimeout(() => {

                addButton.innerHTML =
                    originalText;

                addButton.classList.remove("added");

            }, 900);

        });

    });


    // =================================================
    // OPEN CART
    // =================================================

    if (cartBtn) {

        cartBtn.addEventListener("click", () => {

            window.location.href = "cart.html";

        });

    }


    // =================================================
    // INITIAL COUNT
    // =================================================

    updateCartCount();

});


// =================================================
// MOBILE NAVBAR
// =================================================

const menuBtn =
    document.getElementById("menuBtn");

const mobileNav =
    document.getElementById("mobileNav");


if (menuBtn && mobileNav) {

    menuBtn.addEventListener("click", function () {

        mobileNav.classList.toggle("show");

        menuBtn.classList.toggle("open");

    });

}