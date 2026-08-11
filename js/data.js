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
    image: "images/main-image.jpg",
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
    image: "images/bakemac-tray-new.png",
    imageAlt: "Drooly Macaroni's homemade baked macaroni fresh from the oven.",
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
      "We are incredibly grateful for your kind words and positive feedback. Your support fuels our passion and commitment to delivering exceptional food. Thank you for being a valued part of our journey.",
    items: [
      {
        name: "Kim Racacho",
        label: "Happy Customer",
        image: "testimonial_imgs/t01.jpg",
        quote:
          "Best baked mac in town!! Nakakabitin ang isang tub sa sarap! Branch out na sana sa mas malapit samin. 🤫",
      },
      {
        name: "Clarisse Joyce Gener",
        label: "Satisfied Customer",
        image: "testimonial_imgs/t02.jpg",
        quote:
          "The best baked mac at lasagna!!! Di pa start event namin, ubos na agad!",
      },
      {
        name: "Anna Viela Alano Vidallon-Amparo",
        label: "Satisfied Customer",
        image: "testimonial_imgs/t06.jpg",
        quote:
          "Masarap po 'yung baked macaroni niyo parang 'yung sa Pancake House po. Same taste!",
      },
      {
        name: "Kyle Añonuevo San Diego",
        label: "Satisfied Customer",
        image: "testimonial_imgs/t07.jpg",
        quote:
          "Isa sa pinaka masarap na baked mac mac na natikman ko, hindi tinipid sa lasa, pasok na pasok sa presyo. Highly recommended para sa cravings nyo.",
      },
    ],
  },

  // ----- Navigation (cross-page links) -----
  nav: [
    { label: "Home", href: "index.html" },
    { label: "Our Products", href: "index.html#products" },
    { label: "Pricing", href: "pricing.html" },
    { label: "About Us", href: "index.html#about" },
    { label: "Contact", href: "index.html#contact" },
  ],
  orderNavLabel: "Order Now",
  orderNavHref: "https://m.me/droolymacaroni",
};

// Expose globally (no modules, so file:// works without a server).
window.SITE_DATA = SITE_DATA;
