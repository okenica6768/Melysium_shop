const PRODUCTS = [
  {
    id: 1,
    name: { sk: "Rocková mikina Black Edition", en: "Rock Hoodie Black Edition" },
    price: 79,
    image: "assets/img/hoodie-rock.svg",
    genre: "rock",
    subType: "hoodie"
  },
  {
    id: 2,
    name: { sk: "Rockové tričko Vintage", en: "Rock T-Shirt Vintage" },
    price: 39,
    image: "assets/img/tee-rock.svg",
    genre: "rock",
    subType: "tshirt"
  },
  {
    id: 3,
    name: { sk: "Rapová mikina Purple Drop", en: "Rap Hoodie Purple Drop" },
    price: 79,
    image: "assets/img/hoodie-rap.svg",
    genre: "rap",
    subType: "hoodie"
  },
  {
    id: 4,
    name: { sk: "Rapová šiltovka", en: "Rap Cap" },
    price: 29,
    image: "assets/img/cap-rap.svg",
    genre: "rap",
    subType: "cap"
  },
  {
    id: 5,
    name: { sk: "Pop tričko White Wave", en: "Pop T-Shirt White Wave" },
    price: 39,
    image: "assets/img/tee-pop.svg",
    genre: "pop",
    subType: "tshirt"
  },
  {
    id: 6,
    name: { sk: "Pop taška Limited", en: "Pop Bag Limited" },
    price: 25,
    image: "assets/img/bag-pop.svg",
    genre: "pop",
    subType: "bag"
  },
  {
    id: 7,
    name: { sk: "Metalový longsleeve Dark", en: "Metal Longsleeve Dark" },
    price: 49,
    image: "assets/img/longsleeve-metal.svg",
    genre: "metal",
    subType: "longsleeve"
  },
  {
    id: 8,
    name: { sk: "Metalová mikina Limited", en: "Metal Hoodie Limited" },
    price: 99,
    image: "assets/img/hoodie-metal.svg",
    genre: "metal",
    subType: "hoodie"
  }
];

const APPAREL_SIZES = ["XS", "S", "M", "L", "XL"];

function getProductSizes(product) {
  if (product.subType === "cap" || product.subType === "bag") {
    return [{ value: "OS", label: { sk: "Univerzálna", en: "One size" } }];
  }
  return APPAREL_SIZES.map((size) => ({ value: size, label: { sk: size, en: size } }));
}

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id);
}
