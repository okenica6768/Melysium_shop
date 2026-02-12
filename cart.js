document.addEventListener("DOMContentLoaded", () => {
  const cartDiv = document.getElementById("cart-items");
  const totalDiv = document.getElementById("total");

  if (!cartDiv || !totalDiv) return;

  const lang = localStorage.getItem("lang") || "sk";
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;

  // Empty cart
  if (cart.length === 0) {
    cartDiv.innerHTML =
      "<p>" +
      (lang === "sk" ? "Košík je prázdny." : "Your cart is empty.") +
      "</p>";

    totalDiv.textContent =
      (lang === "sk" ? "Spolu: " : "Total: ") + "0 €";
    return;
  }

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
        <h3>${product.name[lang]}</h3>
        <p>${lang === "sk" ? "Veľkosť" : "Size"}: ${item.size}</p>
        <p>${price} €</p>
      </div>
      `
    );
  });

  totalDiv.textContent =
    (lang === "sk" ? "Spolu: " : "Total: ") + total + " €";
});

// Clear cart
function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}

function completeOrder() {
  const lang = localStorage.getItem("lang") || "sk";

  alert(
    lang === "sk"
      ? "Táto funkcia bude čoskoro dostupná."
      : "This function is coming soon."
  );
}
