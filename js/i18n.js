const I18N = {
  sk: {
    slogan: "Hudba je náš raj.",
    navShop: "Obchod",
    navCart: "Košík",
    navAbout: "O nás",
    navContact: "Kontakt",
    genreAll: "Všetky žánre",
    typeAll: "Všetky typy",
    typeHoodie: "Mikiny",
    typeTshirt: "Tričká",
    typeLong: "Longsleeve",
    typeCap: "Šiltovky",
    typeBag: "Tašky",
    addToCart: "Pridať do košíka",
    addedToCart: "Pridané do košíka",
    cartTitle: "Tvoj košík",
    cartEmpty: "Košík je prázdny.",
    total: "Spolu",
    size: "Veľkosť",
    clearCart: "Vyčistiť košík",
    completeOrder: "Dokončiť objednávku",
    orderInfo:
      "Online platba zatiaľ nie je dostupná. Pre dokončenie objednávky nás kontaktujte na melysium_oanba@gmail.com.",
    aboutTitle: "O nás",
    aboutP1:
      "Melysium vzniklo z lásky k hudbe. Veríme, že hudba nie je len zvuk – je to emócia, identita a spôsob, ako vyjadriť kto sme.",
    aboutP2:
      "Naše oblečenie, šperky a doplnky sú inšpirované hudobnými albumami, atmosférou koncertov a momentmi, ktoré si človek pamätá celý život. Každý produkt je poctou nálade, ktorú hudba dokáže vytvoriť.",
    aboutP3:
      "Nechceme byť len ďalším e-shopom. Naším cieľom je vytvoriť značku, ktorá spája ľudí s rovnakým cítením. Značku, ktorá nositeľovi umožní vyjadriť svoj vnútorný svet navonok.",
    visionTitle: "Naša vízia",
    aboutP4:
      "Budovať komunitu ľudí, pre ktorých je hudba útočiskom. Prinášať limitované kolekcie inšpirované ikonickými albumami a vytvárať dizajn, ktorý má príbeh.",
    aboutP5: "Hudba je náš raj. A Melysium je jeho odrazom.",
    contactTitle: "Kontakt",
    companyLabel: "Názov firmy:",
    addressLabel: "Adresa:",
    regLabel: "Registračné číslo cvičnej firmy:",
    phoneLabel: "Mobil:",
    hoursTitle: "Otváracie hodiny",
    hoursWeekdays: "Pondelok – Piatok: 9:00 – 17:00",
    hoursSaturday: "Sobota: 10:00 – 14:00",
    hoursSunday: "Nedeľa: zatvorené",
    locationTitle: "Kde nás nájdete",
    footerText:
      "Táto spoločnosť je cvičná firma založená pri Obchodnej akadémii Nevädzová v Bratislave. Firma nie je platiteľom DPH. Ceny uvedené na webovej stránke neobsahujú DPH.",
    footerAbout: "O nás",
    footerContact: "Kontakt"
  },
  en: {
    slogan: "Music is our paradise.",
    navShop: "Shop",
    navCart: "Cart",
    navAbout: "About us",
    navContact: "Contact",
    genreAll: "All genres",
    typeAll: "All types",
    typeHoodie: "Hoodies",
    typeTshirt: "T-shirts",
    typeLong: "Longsleeve",
    typeCap: "Caps",
    typeBag: "Bags",
    addToCart: "Add to cart",
    addedToCart: "Added to cart",
    cartTitle: "Your cart",
    cartEmpty: "Your cart is empty.",
    total: "Total",
    size: "Size",
    clearCart: "Clear cart",
    completeOrder: "Complete order",
    orderInfo:
      "Online checkout is not available yet. To complete your order, contact us at melysium_oanba@gmail.com.",
    aboutTitle: "About us",
    aboutP1:
      "Melysium was created from a love for music. We believe music is not just sound – it is emotion, identity and a way to express who we are.",
    aboutP2:
      "Our clothing, jewelry and accessories are inspired by music albums, concert atmospheres and unforgettable moments. Every product is a tribute to the mood that music creates.",
    aboutP3:
      "We don't want to be just another online store. Our goal is to create a brand that connects people who feel the same way. A brand that allows the wearer to express their inner world outwardly.",
    visionTitle: "Our vision",
    aboutP4:
      "To build a community of people for whom music is a refuge. To bring limited collections inspired by iconic albums and create designs with a story.",
    aboutP5: "Music is our paradise. And Melysium is its reflection.",
    contactTitle: "Contact",
    companyLabel: "Company name:",
    addressLabel: "Address:",
    regLabel: "Training company registration number:",
    phoneLabel: "Phone:",
    hoursTitle: "Opening hours",
    hoursWeekdays: "Monday – Friday: 9:00 – 17:00",
    hoursSaturday: "Saturday: 10:00 – 14:00",
    hoursSunday: "Sunday: Closed",
    locationTitle: "Where to find us",
    footerText:
      "This company is a training company established at Business Academy Nevädzová in Bratislava. The company is not a VAT payer. Prices listed on the website do not include VAT.",
    footerAbout: "About us",
    footerContact: "Contact"
  }
};

const legacyLang = localStorage.getItem("language");
if (legacyLang && !localStorage.getItem("lang")) {
  localStorage.setItem("lang", legacyLang);
  localStorage.removeItem("language");
}

let currentLang = localStorage.getItem("lang") || "sk";

function t(key) {
  return I18N[currentLang][key] || I18N.sk[key] || key;
}

function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  applyTranslations();
  updateLangButtons();
  document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = t(key);
    if (value) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const value = t(key);
    if (value) el.setAttribute("placeholder", value);
  });
}

function updateLangButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === currentLang;
    btn.classList.toggle("lang-btn--active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function initLanguage() {
  const saved = localStorage.getItem("lang");
  if (saved && I18N[saved]) currentLang = saved;
  document.documentElement.lang = currentLang;
  applyTranslations();
  updateLangButtons();
}

document.addEventListener("DOMContentLoaded", initLanguage);
