function getCart() {
  const raw = JSON.parse(localStorage.getItem("cart") || "[]");
  return raw.map((item) => ({
    id: item.id,
    size: item.size,
    qty: item.qty || 1
  }));
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
  const cartContainer = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  if (!cartContainer || !totalEl) return;

  const cart = getCart();
  cartContainer.replaceChildren();

  if (cart.length === 0) {
    const empty = document.createElement("p");
    empty.className = "cart-empty";
    empty.textContent = t("cartEmpty");
    cartContainer.appendChild(empty);
    totalEl.textContent = `${t("total")}: 0 €`;
    return;
  }

  let total = 0;
  const fragment = document.createDocumentFragment();

  cart.forEach((item) => {
    const product = getProductById(item.id);
    if (!product) return;

    const lineTotal = product.price * item.qty;
    total += lineTotal;

    const row = document.createElement("article");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item__info">
        <h3>${product.name[currentLang]}</h3>
        <p>${t("size")}: ${item.size}${item.qty > 1 ? ` · ×${item.qty}` : ""}</p>
      </div>
      <p class="cart-item__price">${lineTotal} €</p>
      <button type="button" class="cart-item__remove" data-id="${item.id}" data-size="${item.size}" aria-label="Remove">×</button>
    `;

    row.querySelector(".cart-item__remove").addEventListener("click", () => {
      removeFromCart(item.id, item.size);
    });

    fragment.appendChild(row);
  });

  cartContainer.appendChild(fragment);
  totalEl.textContent = `${t("total")}: ${total} €`;
}

function removeFromCart(productId, size) {
  const cart = getCart().filter((item) => !(item.id === productId && item.size === size));
  saveCart(cart);
  renderCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  renderCart();
}

function completeOrder() {
  const cart = getCart();
  if (cart.length === 0) {
    showToast(t("cartEmpty"));
    return;
  }
  alert(t("orderInfo"));
}

const cartPage = document.getElementById("cart-items");
if (cartPage) {
  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("languagechange", renderCart);
}
