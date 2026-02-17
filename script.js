let cart = [];
let cartCount = 0;

// Add product to cart
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    cartCount++;

    document.getElementById('cart-count').textContent = cartCount;

    alert(productName + " added to cart!");
}

// Smooth scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}

// Optional: View cart details when clicking Cart link
document.getElementById("cart-link").addEventListener("click", function(e) {
    e.preventDefault();

    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let message = "Your Cart:\n\n";
    let total = 0;

    cart.forEach(function(item, index) {
        message += (index + 1) + ". " + item.name + " - $" + item.price + "\n";
        total += item.price;
    });

    message += "\nTotal: $" + total.toFixed(2);

    alert(message);
});
