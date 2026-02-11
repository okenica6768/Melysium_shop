const products = [

  // ===== ROCK =====
  {
    id: 1,
    name: "Rocková mikina Black Edition",
    price: 79,
    image: "img/test.jpg",
    hoverImage: "testcat.GIF",
    genre: "rock",
    subType: "hoodie"
  },
  {
    id: 2,
    name: "Rockové tričko Vintage",
    price: 39,
    image: "img/tee1.jpg",
    hoverImage: "img/tee1.gif",
    genre: "rock",
    subType: "tshirt"
  },

  // ===== RAP =====
  {
    id: 3,
    name: "Rapová mikina Purple Drop",
    price: 79,
    image: "img/hoodie2.jpg",
    hoverImage: "img/hoodie2.gif",
    genre: "rap",
    subType: "hoodie"
  },
  {
    id: 4,
    name: "Rapová šiltovka",
    price: 29,
    image: "img/cap1.jpg",
    hoverImage: "img/cap1.gif",
    genre: "rap",
    subType: "cap"
  },

  // ===== POP =====
  {
    id: 5,
    name: "Pop tričko White Wave",
    price: 39,
    image: "img/tee2.jpg",
    hoverImage: "img/tee2.gif",
    genre: "pop",
    subType: "tshirt"
  },
  {
    id: 6,
    name: "Pop taška Limited",
    price: 25,
    image: "img/bag1.jpg",
    hoverImage: "img/bag1.gif",
    genre: "pop",
    subType: "bag"
  },

  // ===== METAL =====
  {
    id: 7,
    name: "Metalový longsleeve Dark",
    price: 49,
    image: "img/long1.jpg",
    hoverImage: "img/long1.gif",
    genre: "metal",
    subType: "longsleeve"
  },
  {
    id: 8,
    name: "Metalová mikina Limited",
    price: 99,
    image: "img/hoodie3.jpg",
    hoverImage: "img/hoodie3.gif",
    genre: "metal",
    subType: "hoodie"
  }

];

const productDiv = document.getElementById("products");
const genreFilter = document.getElementById("genreFilter");
const typeFilter = document.getElementById("typeFilter");

function renderProducts() {
  if (!productDiv) return;

  productDiv.innerHTML = "";

  const selectedGenre = genreFilter ? genreFilter.value : "all";
  const selectedType = typeFilter ? typeFilter.value : "all";

  const filtered = products.filter(p => {
    const genreMatch = selectedGenre === "all" || p.genre === selectedGenre;
    const typeMatch = selectedType === "all" || p.subType === selectedType;
    return genreMatch && typeMatch;
  });

  filtered.forEach(p => {
    productDiv.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>${p.price} €</p>

        <select id="size-${p.id}">
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M" selected>M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <button onclick="addToCart(${p.id})">Pridať do košíka</button>
      </div>
    `;
  });
}

if (genreFilter) {
  genreFilter.addEventListener("change", renderProducts);
}

if (typeFilter) {
  typeFilter.addEventListener("change", renderProducts);
}

function addToCart(productId) {
  const size = document.getElementById("size-" + productId).value;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    id: productId,
    size: size
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Pridané do košíka (" + size + ")");
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
onScroll();

// Spustí render pri načítaní
renderProducts();
