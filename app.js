// ===== JAZYK =====
let currentLang = localStorage.getItem("lang") || "sk";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  renderProducts();
}

// ===== PRODUKTY =====
const products = [

  {
    id: 1,
    name: {
      sk: "Rocková mikina Black Edition",
      en: "Rock Hoodie Black Edition"
    },
    price: 79,
    image: "img/hoodie1.jpg",
    hoverImage: "img/testcat.gif",
    genre: "rock",
    subType: "hoodie"
  },
  {
    id: 2,
    name: {
      sk: "Rockové tričko Vintage",
      en: "Rock T-Shirt Vintage"
    },
    price: 39,
    image: "img/test.jpg",
    hoverImage: "img/testcat.gif",
    genre: "rock",
    subType: "tshirt"
  },
  {
    id: 3,
    name: {
      sk: "Rapová mikina Purple Drop",
      en: "Rap Hoodie Purple Drop"
    },
    price: 79,
    image: "img/hoodie2.jpg",
    hoverImage: "img/testcat.gif",
    genre: "rap",
    subType: "hoodie"
  },
  {
    id: 4,
    name: {
      sk: "Rapová šiltovka",
      en: "Rap Cap"
    },
    price: 29,
    image: "img/cap1.jpg",
    hoverImage: "img/testcat.gif",
    genre: "rap",
    subType: "cap"
  },
  {
    id: 5,
    name: {
      sk: "Pop tričko White Wave",
      en: "Pop T-Shirt White Wave"
    },
    price: 39,
    image: "img/tee2.jpg",
    hoverImage: "img/testcat.gif",
    genre: "pop",
    subType: "tshirt"
  },
  {
    id: 6,
    name: {
      sk: "Pop taška Limited",
      en: "Pop Bag Limited"
    },
    price: 25,
    image: "img/bag1.jpg",
    hoverImage: "img/testcat.gif",
    genre: "pop",
    subType: "bag"
  },
  {
    id: 7,
    name: {
      sk: "Metalový longsleeve Dark",
      en: "Metal Longsleeve Dark"
    },
    price: 49,
    image: "img/long1.jpg",
    hoverImage: "img/testcat.gif",
    genre: "metal",
    subType: "longsleeve"
  },
  {
    id: 8,
    name: {
      sk: "Metalová mikina Limited",
      en: "Metal Hoodie Limited"
    },
    price: 99,
    image: "img/hoodie3.jpg",
    hoverImage: "img/testcat.gif",
    genre: "metal",
    subType: "hoodie"
  }
];

// ===== ELEMENTY =====
const productDiv = document.getElementById("products");
const genreFilter = document.getElementById("genreFilter");
const typeFilter = document.getElementById("typeFilter");

// ===== RENDER =====
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
        <img 
          src="${p.image}"
          data-static="${p.image}"
          data-gif="${p.hoverImage}"
          onmouseover="this.src=this.dataset.gif"
          onmouseout="this.src=this.dataset.static"
        >
        <h3>${p.name[currentLang]}</h3>
        <p>${p.price} €</p>

        <select id="size-${p.id}">
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M" selected>M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <button onclick="addToCart(${p.id})">
          ${currentLang === "sk" ? "Pridať do košíka" : "Add to cart"}
        </button>
      </div>
    `;
  });
}

// ===== FILTER EVENTS =====
if (genreFilter) genreFilter.addEventListener("change", renderProducts);
if (typeFilter) typeFilter.addEventListener("change", renderProducts);

// ===== CART =====
function addToCart(productId) {
  const size = document.getElementById("size-" + productId).value;
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ id: productId, size: size });
  localStorage.setItem("cart", JSON.stringify(cart));

  alert(
    currentLang === "sk"
      ? "Pridané do košíka (" + size + ")"
      : "Added to cart (" + size + ")"
  );
}

// ===== HEADER SCROLL =====
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

// INITIAL RENDER
renderProducts();
