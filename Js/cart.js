// =================================================
// SEDRA CART SYSTEM
// =================================================

document.addEventListener("DOMContentLoaded", () => {

    const cartItems =
        document.getElementById("cartItems");

    const emptyCart =
        document.getElementById("emptyCart");

    const cartSummary =
        document.getElementById("cartSummary");

    const cartTotal =
        document.getElementById("cartTotal");

    const summaryCount =
        document.getElementById("summaryCount");

    const clearCartBtn =
        document.getElementById("clearCartBtn");


    let cart =
        JSON.parse(
            localStorage.getItem("sedraCart")
        ) || [];


    // =================================================
    // SAVE
    // =================================================

    function saveCart() {

        localStorage.setItem(
            "sedraCart",
            JSON.stringify(cart)
        );

    }


    // =================================================
    // RENDER CART
    // =================================================

    function renderCart() {

        cartItems.innerHTML = "";

        if (cart.length === 0) {

            emptyCart.style.display = "block";

            cartSummary.style.display = "none";

            return;

        }


        emptyCart.style.display = "none";

        cartSummary.style.display = "block";


        let total = 0;

        let quantityTotal = 0;


        cart.forEach((item, index) => {

            const price =
                Number(item.price) || 0;

            const quantity =
                Number(item.quantity) || 0;


            total += price * quantity;

            quantityTotal += quantity;


            const itemElement =
                document.createElement("div");


            itemElement.className =
                "cart-item";


            itemElement.innerHTML = `

                <div class="cart-item-image">

                    <img
                        src="${item.image || 'Images/logo.png'}"
                        alt="${item.name}"
                    >

                </div>


                <div class="cart-item-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <div class="cart-item-price">

                        ${
                            price > 0
                            ? price + " جنيه"
                            : "السعر لم يحدد"
                        }

                    </div>


                    <div class="cart-quantity">

                        <button
                            class="quantity-minus"
                            data-index="${index}">
                            −
                        </button>


                        <span>
                            ${quantity}
                        </span>


                        <button
                            class="quantity-plus"
                            data-index="${index}">
                            +
                        </button>

                    </div>

                </div>


                <button
                    class="remove-item"
                    data-index="${index}">

                    ×

                </button>

            `;


            cartItems.appendChild(itemElement);

        });


        cartTotal.textContent =
            total.toLocaleString("ar-EG");


        summaryCount.textContent =
            quantityTotal;


        // =========================
        // PLUS
        // =========================

        document
            .querySelectorAll(".quantity-plus")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(
                                button.dataset.index
                            );

                        cart[index].quantity++;

                        saveCart();

                        renderCart();

                    }
                );

            });


        // =========================
        // MINUS
        // =========================

        document
            .querySelectorAll(".quantity-minus")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(
                                button.dataset.index
                            );

                        if (
                            cart[index].quantity > 1
                        ) {

                            cart[index].quantity--;

                        } else {

                            cart.splice(index, 1);

                        }


                        saveCart();

                        renderCart();

                    }
                );

            });


        // =========================
        // REMOVE
        // =========================

        document
            .querySelectorAll(".remove-item")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        const index =
                            Number(
                                button.dataset.index
                            );

                        cart.splice(index, 1);

                        saveCart();

                        renderCart();

                    }
                );

            });

    }


    // =================================================
    // CLEAR CART
    // =================================================

    if (clearCartBtn) {

        clearCartBtn.addEventListener(
            "click",
            () => {

                cart = [];

                saveCart();

                renderCart();

            }
        );

    }


    // =================================================
    // INITIALIZE
    // =================================================

    renderCart();

});
// =========================
// Mobile Navbar
// =========================

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {

    menuBtn.addEventListener("click", function () {

        mobileNav.classList.toggle("show");
        menuBtn.classList.toggle("open");

    });

}

