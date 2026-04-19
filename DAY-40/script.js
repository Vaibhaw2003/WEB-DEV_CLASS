let cartCount = 0;

const cartButtons = document.querySelectorAll(".cart");
const cartDisplay = document.getElementById("cart-count");

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartDisplay.textContent = cartCount;
        alert("Item added to cart!");
    });
});