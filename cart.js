document.addEventListener("DOMContentLoaded", () => {
  const cartDiv = document.getElementById("cart-items");
  const totalDiv = document.getElementById("total");

  // Safety check so the script doesn't explode on other pages
  if (!cartDiv || !totalDiv) return;

  // Load cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  // Empty cart state
  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Your cart is empty.</p>";
    totalDiv.textContent = "Total: 0 €";
    return;
  }

  // Render cart items
  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;

    const price = product.discount
      ? Math.round(product.price * (1 - product.discount / 100))
      : product.price;

    total += price;

    cartDiv.insertAdjacentHTML(
      "beforeend",
      `
      <div class="product">
        <h3>${product.name}</h3>
        <p>Size: ${item.size}</p>
        <p>${price} €</p>
      </div>
      `
    );
  });

  totalDiv.textContent = "Total: " + total + " €";
});

// Clear entire cart
function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}

function completeOrder() {
  alert("This function is coming soon.");
}
