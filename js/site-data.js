/*
 * Drooly Macaroni — Central Content Configuration
 * -------------------------------------------------
 * All business content lives here so it is easy to update.
 * Edit the values below; the UI reads from SITE_DATA.
 *
 * RULES (per brief):
 *   - Only Bakedmac and Lasagna are products. No other dish exists in the
 *     lineup and must never appear here or anywhere on the site.
 *   - Do not invent prices, hours, delivery areas, addresses, email, etc.
 *   - Facebook link is the real one found on the existing site.
 */

const SITE_DATA = {
  // ----- Business basics -----
  brand: {
    name: "Drooly Macaroni",
    tagline: "The best-tasting baked mac & lasagna in Alfonso, Cavite.",
    signature: "Keep drooling!",
    location: "Alfonso, Cavite, Philippines",
  },

  // ----- Contact / ordering -----
  contact: {
    // Real phone number from the existing website.
    phoneDisplay: "0955-247-8702",
    phoneTel: "09552478702", // used in tel: links
    // Real Facebook Messenger link from the existing site.
    facebookUrl: "https://m.me/droolymacaroni",
    facebookLabel: "Message Us on Facebook",
    // Canonical home URL placeholder (set after you deploy).
    canonicalUrl: "https://droolymacaroni.com/",
  },

  // ----- Hero -----
  hero: {
    eyebrow: "Homemade • Family-made • Alfonso, Cavite",
    title: "The Best-Tasting Baked Mac & Lasagna in Alfonso.",
    subtitle:
      "Made with love, packed with cheesy goodness, and created to make every bite worth drooling over.",
    primaryCta: { label: "Order Now", href: "https://m.me/droolymacaroni" },
    secondaryCta: { label: "Explore Our Products", href: "#products" },
    image: "images/main-image-v2.jpg",
    imageAlt: "Drooly Macaroni baked macaroni and cheese in a foil tray, golden and bubbly.",
    badges: [
      "Family recipe",
      "Made with love",
      "Cheesy & comforting",
    ],
  },

  // ----- Products (ONLY Bakedmac and Lasagna) -----
  products: {
    sectionTitle: "Made to Make You Drool",
    sectionSubtitle:
      "Two signature dishes, made the way our family loves them — creamy, cheesy, and impossible to resist.",
    items: [
      {
        name: "Bakedmac",
        description: "Creamy, cheesy baked macaroni.",
        image: "images/bakemac-tray-new.png",
        imageAlt: "Drooly Macaroni baked mac — creamy cheesy pasta with golden top, baked in a foil tray.",
        cta: { label: "Order Bakedmac", href: "#contact" },
      },
      {
        name: "Lasagna",
        description: "Rich, comforting layered lasagna.",
        image: "images/lasagna-tray-new.png",
        imageAlt: "Drooly Macaroni lasagna — layered pasta with red sauce and melted cheese, in a foil tray.",
        cta: { label: "Order Lasagna", href: "#contact" },
      },
    ],
  },

  // ----- Pricing (per order size, with image filename suffix) -----
  pricing: {
    title: "Order & Pricing",
    subtitle: "Two signature dishes, two convenient sizes — choose what fits your table.",
    items: [
      {
        product: "Bakedmac",
        size: "Tub",
        image: "images/bakemac-tub-new.png",
        imageAlt: "Baked macaroni and cheese in a clear takeout tub, creamy golden on top with herb flecks.",
        price: "₱140",
      },
      {
        product: "Bakedmac",
        size: "Tray",
        image: "images/bakemac-tray-new.png",
        imageAlt: "Baked macaroni and cheese in a foil tray, golden bubbly cheese with herb garnish.",
        price: "₱800",
      },
      {
        product: "Lasagna",
        size: "Tub",
        image: "images/lasagna-tub-new.png",
        imageAlt: "Lasagna in a clear takeout tub with pasta layers, mushrooms and red pepper.",
        price: "₱160",
      },
      {
        product: "Lasagna",
        size: "Tray",
        image: "images/lasagna-tray-new.png",
        imageAlt: "Lasagna in a foil tray — layered pasta with red sauce and melted cheese.",
        price: "₱1200",
      },
    ],
  },

  // ----- Why Drooly? -----
  why: {
    title: "Why Drooly Macaroni?",
    subtitle: "Small family business, big comforting flavors.",
    items: [
      {
        icon: "heart",
        title: "Family-made",
        text: "Born in our home kitchen from a craving for warm, comforting baked mac & cheese.",
      },
      {
        icon: "flame",
        title: "Made with passion",
        text: "Every tray is whipped up with care — the same way Mom first made it.",
      },
      {
        icon: "users",
        title: "Perfect for gatherings",
        text: "The talk of our neighborhood and a hit at local events and family celebrations.",
      },
      {
        icon: "star",
        title: "Loved locally",
        text: "Word of mouth spread like wildfire across Alfonso, Cavite.",
      },
    ],
  },

  // ----- About Us -----
  about: {
    title: "From Our Family Kitchen to Yours.",
    image: "images/about-us.png",
    imageAlt: "Drooly Macaroni mascot — from original sketch to artistic interpretation by Kien Perea.",
    paragraphs: [
      "It all started with a simple craving for something warm and comforting. With a dash of inspiration and a sprinkle of creativity, my mom whipped up her signature baked macaroni and cheese — a dish that soon became the cornerstone of our family gatherings and the talk of our neighborhood.",
      "Word of mouth spread like wildfire as friends and neighbors couldn't resist the creamy, cheesy goodness that came out of our kitchen. Soon, requests for trays poured in, and before we knew it, we found ourselves unofficially catering local events and gatherings.",
      "Driven by the overwhelming response and a shared passion for sharing our food with others, my mom and I took a leap of faith and brought our beloved baked macaroni and cheese to the wider community.",
      "What started as a labor of love in our humble kitchen has blossomed into Drooly Macaroni — a testament to the power of family, passion, and the simple joy of sharing delicious food with others.",
    ],
  },

  // ----- Partners -----
  reseller: {
    title: "Want to be a partner?",
    subtitle: "We want you to be part of our progress as we build our little business!",
    body: "Partnering is open to both shop owners and individuals. For inquiries, message our Facebook page — we'd be delighted to give you our partner price on our droolicious product!",
    primaryCta: { label: "Become a Partner", href: "https://m.me/droolymacaroni" },
    secondaryCta: { label: "Message Us on Facebook", href: "https://m.me/droolymacaroni" },
  },

  // ----- Contact / Order -----
  contactSection: {
    title: "Ready to Make Your Next Meal Drool-Worthy?",
    subtitle: "Call or message us to order.",
    primaryCta: { label: "Order Now", href: "https://m.me/droolymacaroni" },
  },

  // ----- Footer -----
  footer: {
    blurb:
      "Premium comfort food, made with love in Alfonso, Cavite. Creamy baked mac & lasagna worth drooling over.",
  },

  // ----- Testimonials (sourced from the Drooly Macaroni testimonials page) -----
  testimonials: {
    title: "Loved by Our Customers",
    intro:
      "Real words from real customers across Alfonso and beyond. We are incredibly grateful for your kind feedback — it fuels our passion and keeps us drooling. Thank you for being a valued part of our journey.",
    items: [
      { name: "Lara Maria",            image: "images/testi/1.png" },
      { name: "Anna Viela Alano Vidallon-Amparo", image: "images/testi/2.png" },
      { name: "Aarol Jaelo",           image: "images/testi/3.png" },
      { name: "Customer 4",  image: "images/testi/4.png" },
      { name: "Customer 5",  image: "images/testi/5.png" },
      { name: "Customer 6",  image: "images/testi/6.png" },
      { name: "Customer 7",  image: "images/testi/7.png" },
      { name: "Customer 8",  image: "images/testi/8.png" },
      { name: "Customer 9",  image: "images/testi/9.png" },
      { name: "Customer 10", image: "images/testi/10.png" },
      { name: "Customer 11", image: "images/testi/11.png" },
      { name: "Customer 12", image: "images/testi/12.png" },
      { name: "Customer 13", image: "images/testi/13.png" },
      { name: "Customer 14", image: "images/testi/14.png" },
      { name: "Customer 15", image: "images/testi/15.png" },
      { name: "Customer 16", image: "images/testi/16.png" },
      { name: "Customer 17", image: "images/testi/17.png" },
      { name: "Customer 18", image: "images/testi/18.png" },
      { name: "Customer 19", image: "images/testi/19.png" },
      { name: "Kien Perea",             image: "images/testi/20.png" },
      { name: "Customer 21", image: "images/testi/21.png" },
      { name: "Customer 22", image: "images/testi/22.png" },
      { name: "Customer 23", image: "images/testi/23.png" },
      { name: "Customer 24", image: "images/testi/24.png" },
      { name: "Customer 25", image: "images/testi/25.png" },
      { name: "Customer 26", image: "images/testi/26.png" },
      { name: "Customer 27", image: "images/testi/27.png" },
      { name: "Customer 28", image: "images/testi/28.png" },
      { name: "Customer 29", image: "images/testi/29.png" },
      { name: "Customer 30", image: "images/testi/30.png" },
      { name: "Customer 31", image: "images/testi/31.png" },
      { name: "Customer 32", image: "images/testi/32.png" },
      { name: "Customer 33", image: "images/testi/33.png" },
      { name: "Customer 34", image: "images/testi/34.png" },
      { name: "Customer 35", image: "images/testi/35.png" },
      { name: "Customer 36", image: "images/testi/36.png" },
      { name: "Customer 37", image: "images/testi/37.png" },
      { name: "Customer 38", image: "images/testi/38.png" },
      { name: "Customer 39", image: "images/testi/39.png" },
      { name: "Customer 40", image: "images/testi/40.png" },
      { name: "Customer 41", image: "images/testi/41.png" },
      { name: "Customer 42", image: "images/testi/42.png" },
      { name: "Customer 43", image: "images/testi/43.png" },
      { name: "Arah Nicole Masungsong", image: "images/testi/44.png" }
    ],
  },

  // ----- Navigation (cross-page links) -----
  nav: [
    { label: "About Us", href: "index.html#about" },
    { label: "Our Products", href: "index.html#products" },
    { label: "Pricing", href: "pricing.html" },
    { label: "FAQ", href: "pricing.html#faq" },
    { label: "Testimonials", href: "testimonials.html" },
    { label: "Contact", href: "index.html#contact" },
  ],
  orderNavLabel: "Order Now",
  orderNavHref: "https://m.me/droolymacaroni",
};

// Expose globally (no modules, so file:// works without a server).
window.SITE_DATA = SITE_DATA;
