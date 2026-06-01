# Melysium Shop

Static e-commerce site for Melysium — music-inspired apparel and accessories (training company project).

## Run locally

Open `index.html` or `shop.html` in a browser, or serve the folder with any static file server.

## Structure

```
├── index.html          # Redirects to shop
├── shop.html           # Product catalog
├── cart.html           # Shopping cart
├── onas.html           # About page
├── kontakt.html        # Contact page
├── css/
│   └── style.css       # Global styles
├── js/
│   ├── products.js     # Product catalog data
│   ├── i18n.js         # Slovak / English translations
│   ├── layout.js       # Header scroll, toast, language buttons
│   ├── shop.js         # Shop filters and add-to-cart
│   └── cart.js         # Cart rendering and actions
└── assets/
    ├── img/            # Product SVG illustrations
    └── fonts/          # Place KUNSTLER.TTF here for brand logo font
```

## Optional font

Copy `KUNSTLER.TTF` into `assets/fonts/` to enable the Kunstler Script logo typeface. Without it, the site falls back to Brush Script MT / cursive.

## Language

Uses `localStorage` key `lang` (`sk` | `en`). Legacy `language` key is migrated automatically.
