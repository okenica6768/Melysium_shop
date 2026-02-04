document.addEventListener("DOMContentLoaded", () => {
  const cartDiv = document.getElementById("cart-items");
  const totalDiv = document.getElementById("total");

  if (!cartDiv || !totalDiv) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Your cart is empty.</p>";
    totalDiv.textContent = "Total: 0 €";
    return;
  }

  cart.forEach(id => {
    const product = products.find(p => p.id === id);
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
        <p>${price} €</p>
      </div>
      `
    );
  });

  totalDiv.textContent = "Total: " + total + " €";
});

function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}
