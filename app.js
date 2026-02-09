const products = [
  {
    id: 1,
    name: "Melysium Hoodie Black",
    price: 79,
    image: "img/hoodie1.jpg"
  },
  {
    id: 2,
    name: "Melysium Hoodie Purple",
    price: 79,
    image: "img/hoodie2.jpg"
  },

  /* ===== TEST PRODUCTS FOR SCROLL ===== */
  {
    id: 3,
    name: "Melysium Tee White",
    price: 39,
    image: "img/tee1.jpg"
  },
  {
    id: 4,
    name: "Melysium Tee Black",
    price: 39,
    image: "img/tee2.jpg"
  },
  {
    id: 5,
    name: "Melysium Cap",
    price: 29,
    image: "img/cap1.jpg"
  },
  {
    id: 6,
    name: "Melysium Tote Bag",
    price: 25,
    image: "img/bag1.jpg"
  },
  {
    id: 7,
    name: "Melysium Longsleeve",
    price: 49,
    image: "img/long1.jpg"
  },
  {
    id: 8,
    name: "Melysium Limited Hoodie",
    price: 99,
    image: "img/hoodie3.jpg"
  }
];

const productDiv = document.getElementById("products");

if (productDiv) {
  products.forEach(p => {
    const finalPrice = p.discount
      ? Math.round(p.price - (p.price * p.discount / 100))
      : p.price;

productDiv.innerHTML += `
  <div class="product">
    <img src="${p.image}">
    <h3>${p.name}</h3>
    <p>${finalPrice} €</p>

    <select id="size-${p.id}">
      <option value="XS">XS</option>
      <option value="S">S</option>
      <option value="M" selected>M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
    </select>

    <button onclick="addToCart(${p.id})">Add to cart</button>
  </div>
`;

  });
}

function addToCart(productId) {
  const size = document.getElementById("size-" + productId).value;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    id: productId,
    size: size
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart (" + size + ")");
}

// ===== HEADER LOGO RESIZE ON SCROLL =====
const header = document.querySelector("header");

function onScroll() {
  if (!header) return;

  if (window.scrollY === 0) {
    header.classList.add("top");
    header.classList.remove("scrolled");
  } else {
    header.classList.add("scrolled");
    header.classList.remove("top");
  }
}

window.addEventListener("scroll", onScroll);
onScroll(); // run once on load
