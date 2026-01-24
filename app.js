const products = [
  {
    id: 1,
    name: "Shadow Hoodie",
    price: 59,
    discount: 20,
    img: "https://via.placeholder.com/400x500?text=Melysium"
  },
  {
    id: 2,
    name: "Void T-Shirt",
    price: 35,
    discount: 0,
    img: "https://via.placeholder.com/400x500?text=Melysium"
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
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${finalPrice} €</p>
        <button onclick="addToCart(${p.id})">Add to cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}
