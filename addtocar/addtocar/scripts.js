// scripts.js
const cart = {};

function addToCart(productName, productPrice) {
    if (cart[productName]) {
        cart[productName].quantity += 1;
        cart[productName].totalPrice += productPrice;
    } else {
        cart[productName] = {
            quantity: 1,
            totalPrice: productPrice
        };
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = ''; // Clear the cart display

    for (let product in cart) {
        const listItem = document.createElement('li');
        listItem.textContent = `${product} - Quantity: ${cart[product].quantity} - Total Price: $${cart[product].totalPrice.toFixed(2)}`;
        cartList.appendChild(listItem);
    }
}
