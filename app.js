const products = [
  // ===== ROCK =====
  {
    id: 1,
    name: "Rocková mikina Black Edition",
    price: 79,
    image: "img/hoodie1.jpg",
    hoverImage: "img/hoodie1.gif",
    genre: "rock",
    subType: "hoodie"
  },
  {
    id: 2,
    name: "Rockové tričko Vintage",
    price: 39,
    image: "img/tee1.jpg",
    hoverImage: null,
    genre: "rock",
    subType: "tshirt"
  },

  // ===== RAP =====
  {
    id: 3,
    name: "Rapová mikina Purple Drop",
    price: 79,
    image: "img/hoodie2.jpg",
    hoverImage: null,
    genre: "rap",
    subType: "hoodie"
  },
  {
    id: 4,
    name: "Rapová šiltovka",
    price: 29,
    image: "img/cap1.jpg",
    hoverImage: null,
    genre: "rap",
    subType: "cap"
  },

  // ===== POP =====
  {
    id: 5,
    name: "Pop tričko White Wave",
    price: 39,
    image: "img/tee2.jpg",
    hoverImage: null,
    genre: "pop",
    subType: "tshirt"
  },
  {
    id: 6,
    name: "Pop taška Limited",
    price: 25,
    image: "img/bag1.jpg",
    hoverImage: null,
    genre: "pop",
    subType: "bag"
  },

  // ===== METAL =====
  {
    id: 7,
    name: "Metalový longsleeve Dark",
    price: 49,
    image: "img/long1.jpg",
    hoverImage: null,
    genre: "metal",
    subType: "longsleeve"
  },
  {
    id: 8,
    name: "Metalová mikina Limited",
    price: 99,
    image: "img/hoodie3.jpg",
    hoverImage: null,
    genre: "metal",
    subType: "hoodie"
  }
];

const productContainer = document.getElementById("product-container");

function renderProducts(items) {
  productContainer.innerHTML = "";

  items.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img 
        src="${p.image}" 
        data-static="${p.image}" 
        data-gif="${p.hoverImage ? p.hoverImage : ""}"
      >
      <h3>${p.name}</h3>
      <p>${p.price}€</p>
    `;

    const img = card.querySelector("img");

    if (p.hoverImage) {
      img.addEventListener("mouseenter", () => {
        img.src = img.dataset.gif;
      });

      img.addEventListener("mouseleave", () => {
        img.src = img.dataset.static;
      });
    }

    productContainer.appendChild(card);
  });
}

renderProducts(products);
