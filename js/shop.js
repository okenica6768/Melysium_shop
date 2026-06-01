const productGrid = document.getElementById("products");
const genreFilter = document.getElementById("genreFilter");
const typeFilter = document.getElementById("typeFilter");

function renderProducts() {
  if (!productGrid) return;

  const selectedGenre = genreFilter ? genreFilter.value : "all";
  const selectedType = typeFilter ? typeFilter.value : "all";

  const filtered = PRODUCTS.filter((product) => {
    const genreMatch = selectedGenre === "all" || product.genre === selectedGenre;
    const typeMatch = selectedType === "all" || product.subType === selectedType;
    return genreMatch && typeMatch;
  });

  const fragment = document.createDocumentFragment();

  filtered.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const sizes = getProductSizes(product);
    const sizeOptions = sizes
      .map((s) => {
        const label = typeof s.label === "object" ? s.label[currentLang] : s.label;
        const selected = s.value === "M" || s.value === "OS" ? " selected" : "";
        return `<option value="${s.value}"${selected}>${label}</option>`;
      })
      .join("");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name[currentLang]}" width="280" height="260" loading="lazy">
      <h3>${product.name[currentLang]}</h3>
      <p class="product-card__price">${product.price} €</p>
      <label class="visually-hidden" for="size-${product.id}">${t("size")}</label>
      <select id="size-${product.id}" aria-label="${t("size")}">${sizeOptions}</select>
      <button type="button" data-product-id="${product.id}">${t("addToCart")}</button>
    `;

    card.querySelector("button").addEventListener("click", () => addToCart(product.id));
    fragment.appendChild(card);
  });

  productGrid.replaceChildren(fragment);
}

function addToCart(productId) {
  const sizeSelect = document.getElementById("size-" + productId);
  if (!sizeSelect) return;

  const size = sizeSelect.value;
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const existing = cart.find((item) => item.id === productId && item.size === size);

  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ id: productId, size, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  showToast(`${t("addedToCart")} (${size})`);
}

if (productGrid) {
  if (genreFilter) genreFilter.addEventListener("change", renderProducts);
  if (typeFilter) typeFilter.addEventListener("change", renderProducts);
  document.addEventListener("languagechange", renderProducts);
  renderProducts();
}
