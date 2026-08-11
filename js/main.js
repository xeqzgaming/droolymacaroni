/* =====================================================================
   Drooly Macaroni — main.js
   Behavior + content binding. No build step, no frameworks.
   All business content comes from window.SITE_DATA (js/data.js).
   ===================================================================== */
(function () {
  "use strict";

  var D = window.SITE_DATA;
  if (!D) { console.error("SITE_DATA not found"); return; }

  /* ---------- Value resolver: map a bind key -> value ---------- */
  function resolve(key) {
    switch (key) {
      case "brandName":         return D.brand.name;
      case "brandSignature":    return D.brand.signature;
      case "footerBlurb":       return D.footer.blurb;
      case "heroEyebrow":       return D.hero.eyebrow;
      case "heroTitle":         return D.hero.title;
      case "heroSubtitle":      return D.hero.subtitle;
      case "heroPrimaryHref":   return D.hero.primaryCta.href;
      case "heroPrimaryLabel":  return D.hero.primaryCta.label;
      case "heroSecondaryHref": return D.hero.secondaryCta.href;
      case "heroSecondaryLabel":return D.hero.secondaryCta.label;
      case "heroImage":         return D.hero.image;
      case "productsTitle":     return D.products.sectionTitle;
      case "productsSubtitle":  return D.products.sectionSubtitle;
      case "pricingTitle":      return D.pricing.title;
      case "pricingSubtitle":   return D.pricing.subtitle;
      case "whyTitle":          return D.why.title;
      case "whySubtitle":       return D.why.subtitle;
      case "aboutTitle":        return D.about.title;
      case "aboutImage":        return D.about.image;
      case "resellerTitle":     return D.reseller.title;
      case "resellerSubtitle":  return D.reseller.subtitle;
      case "resellerBody":      return D.reseller.body;
      case "resellerPrimaryHref":   return D.reseller.primaryCta.href;
      case "resellerPrimaryLabel":  return D.reseller.primaryCta.label;
      case "resellerSecondaryHref": return D.reseller.secondaryCta.href;
      case "resellerSecondaryLabel":return D.reseller.secondaryCta.label;
      case "testimonialsTitle":   return D.testimonials.title;
      case "testimonialsIntro":   return D.testimonials.intro;
      case "contactTitle":      return D.contactSection.title;
      case "contactSubtitle":   return D.contactSection.subtitle;
      case "contactPrimaryHref":return D.contactSection.primaryCta.href;
      case "contactPrimaryLabel":return D.contactSection.primaryCta.label;
      case "phoneTel":          return D.contact.phoneTel;
      case "phoneDisplay":      return D.contact.phoneDisplay;
      case "facebookUrl":       return D.contact.facebookUrl;
      case "facebookLabel":     return D.contact.facebookLabel;
      case "orderNavHref":      return D.orderNavHref;
      case "orderNavLabel":     return D.orderNavLabel;
      case "canonical":         return D.contact.canonicalUrl;
      case "ogImage":           return D.hero.image;
      default:                  return "";
    }
  }

  var CONTAINERS = {
    navList: "nav", mobileNavList: "nav", footerNavList: "nav",
    productGrid: "products", pricingGrid: "pricing", whyGrid: "why",
    heroBadges: "badges", aboutParagraphs: "about", testimonialGrid: "testimonials"
  };

  /* ---------- Build container contents ---------- */
  // Highlight the nav link matching the current page (+ section on home)
  function markActive(ul) {
    if (!ul) return;
    var here = location.pathname.split("/").pop() || "index.html";
    var hash = (location.hash || "").replace(/^#/, "");
    // On a sub-page (e.g. pricing.html), if the URL has a hash, only the
    // nav item whose hash matches should be highlighted — not the bare file link.
    var wantHash = (here !== "index.html" && hash !== "");
    ul.querySelectorAll("a").forEach(function (a) {
      var parts = (a.getAttribute("href") || "").split("#");
      var file = parts[0] || "index.html";
      var section = parts[1] || "";
      var active = false;
      if (file === here) {
        if (here === "index.html") {
          if (section && section === hash) active = true;
          else if (!section && (hash === "" || hash === "home" || hash === "top")) active = true;
        } else if (wantHash) {
          active = (section !== "" && section === hash);
        } else {
          active = (section === "");
        }
      }
      if (active) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  function buildNav(ul, onClick) {
    D.nav.forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.label;
      if (onClick) a.addEventListener("click", onClick);
      li.appendChild(a);
      ul.appendChild(li);
    });
    markActive(ul);
  }

  function buildProducts(grid) {
    D.products.items.forEach(function (p) {
      var card = document.createElement("article");
      card.className = "product-card reveal";

      var media = document.createElement("div");
      media.className = "product-media";
      var img = document.createElement("img");
      img.src = p.image;
      img.alt = p.imageAlt || (p.name + " from Drooly Macaroni");
      img.loading = "lazy";
      media.appendChild(img);

      var tag = document.createElement("span");
      tag.className = "product-tag";
      tag.textContent = p.name;
      media.appendChild(tag);

      var body = document.createElement("div");
      body.className = "product-body";
      var h3 = document.createElement("h3");
      h3.textContent = p.name;
      var desc = document.createElement("p");
      desc.textContent = p.description;
      body.appendChild(h3);
      body.appendChild(desc);

      card.appendChild(media);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  function buildPricing(grid) {
    D.pricing.items.forEach(function (it) {
      var card = document.createElement("article");
      card.className = "product-card reveal";

      var media = document.createElement("div");
      media.className = "product-media";
      var img = document.createElement("img");
      img.src = it.image;
      img.alt = it.imageAlt || (it.product + " " + it.size + " from Drooly Macaroni");
      img.loading = "lazy";
      media.appendChild(img);

      var tag = document.createElement("span");
      tag.className = "product-tag";
      tag.textContent = it.product;
      media.appendChild(tag);

      var body = document.createElement("div");
      body.className = "product-body";

      var head = document.createElement("div");
      head.className = "product-head";
      var h3 = document.createElement("h3");
      h3.textContent = it.product + " — " + it.size;
      var price = document.createElement("span");
      price.className = "price";
      price.textContent = it.price;
      head.appendChild(h3);
      head.appendChild(price);

      var cta = document.createElement("a");
      cta.className = "btn btn-primary";
      cta.href = D.orderNavHref;
      cta.textContent = "Order";
      cta.target = "_blank";
      cta.rel = "noopener";
      body.appendChild(head);
      body.appendChild(cta);

      card.appendChild(media);
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  function buildWhy(grid) {
    var SVGS = {
      heart: '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M12 21s-7.5-4.9-10-9.2C.3 8.4 1.9 5 5.2 5c2 0 3.3 1.1 4 2.2.7-1.1 2-2.2 4-2.2 3.3 0 4.9 3.4 3.2 6.8C19.5 16.1 12 21 12 21z"/></svg>',
      flame: '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M12 2c1 3-1 4-2 6-1 2 1 3 2 3 1 0 2-1 2-2 2 1 3 3 3 5a5 5 0 1 1-10 0c0-3 2-5 3-7 1 2 3 1 2-5z"/></svg>',
      users: '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-8 2c-3 0-7 1.5-7 4.5V20h14v-2.5C15 14.5 11 13 8 13zm8 0c-.7 0-1.4.1-2 .2 1.4 1 2 2.4 2 4.3V20h7v-2.5c0-3-4-4.5-7-4.5z"/></svg>',
      star:  '<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7z"/></svg>'
    };
    D.why.items.forEach(function (it) {
      var li = document.createElement("li");
      li.className = "why-item reveal why-accent-" + it.icon;
      var head = document.createElement("div");
      head.className = "why-head";
      var ic = document.createElement("span");
      ic.className = "why-icon";
      ic.setAttribute("aria-hidden", "true");
      ic.innerHTML = SVGS[it.icon] || SVGS.star;
      var h3 = document.createElement("h3");
      h3.textContent = it.title;
      head.appendChild(ic);
      head.appendChild(h3);
      var p = document.createElement("p");
      p.textContent = it.text;
      li.appendChild(head);
      li.appendChild(p);
      grid.appendChild(li);
    });
  }

  function buildBadges(ul) {
    D.hero.badges.forEach(function (b) {
      var li = document.createElement("li");
      li.textContent = b;
      ul.appendChild(li);
    });
  }

  function buildAbout(div) {
    D.about.paragraphs.forEach(function (para) {
      var p = document.createElement("p");
      p.textContent = para;
      div.appendChild(p);
    });
  }

  function buildTestimonials(grid) {
    D.testimonials.items.forEach(function (it) {
      var li = document.createElement("li");
      li.className = "testimonial-card reveal";

      var img = document.createElement("img");
      img.className = "testimonial-photo";
      img.src = it.image;
      img.alt = "Review from " + it.name;
      img.loading = "lazy";
      img.decoding = "async";
      li.appendChild(img);

      grid.appendChild(li);
    });
  }

  /* ---------- Apply all data-bind attributes ---------- */
  function applyBindings() {
    var els = document.querySelectorAll("[data-bind]");
    els.forEach(function (el) {
      var key = el.dataset.bind;

      if (CONTAINERS[key]) {
        if (key === "navList") buildNav(el);
        else if (key === "mobileNavList") buildNav(el, closeMobileMenu);
        else if (key === "footerNavList") buildNav(el);
        else if (key === "productGrid") buildProducts(el);
        else if (key === "pricingGrid") buildPricing(el);
        else if (key === "whyGrid") buildWhy(el);
        else if (key === "heroBadges") buildBadges(el);
        else if (key === "aboutParagraphs") buildAbout(el);
        else if (key === "testimonialGrid") buildTestimonials(el);
        return;
      }

      if (el.tagName === "A" || el.tagName === "LINK") {
        var href = resolve(key);
        if (key === "phoneTel") href = "tel:" + resolve("phoneTel");
        el.href = href;
      } else if (el.tagName === "META") {
        el.setAttribute("content", resolve(key));
      } else if (el.tagName === "IMG") {
        el.src = resolve(key);
      } else {
        el.textContent = resolve(key);
      }

      if (el.dataset.text) el.textContent = resolve(el.dataset.text);
    });
  }

  /* ---------- Header: sticky on scroll ---------- */
  function initStickyHeader() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    var onScroll = function () {
      header.classList.toggle("scrolled", window.scrollY > 12);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile menu ---------- */
  var mobileMenu, navToggle;
  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.hidden = false;
    // force reflow then add open for transition
    void mobileMenu.offsetWidth;
    mobileMenu.classList.add("open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
  }
  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    window.setTimeout(function () { mobileMenu.hidden = true; }, 220);
  }
  function initMobileMenu() {
    mobileMenu = document.getElementById("mobile-menu");
    navToggle = document.getElementById("nav-toggle");
    if (!mobileMenu || !navToggle) return;
    navToggle.addEventListener("click", function () {
      if (mobileMenu.classList.contains("open")) closeMobileMenu();
      else openMobileMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileMenu.classList.contains("open")) closeMobileMenu();
    });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var targets = document.querySelectorAll(
      ".section-head, .hero-copy, .hero-media, .pricing section, .about-copy, .about-media, .resellers-copy, .contact-inner, .reveal"
    );
    targets.forEach(function (t) { t.classList.add("reveal"); });

    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---------- Smooth-scroll for in-page anchors + close menu ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length > 1) {
          var target = document.querySelector(id);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            if (mobileMenu && mobileMenu.classList.contains("open")) closeMobileMenu();
          }
        }
      });
    });
  }

  function refreshActiveNav() {
    document.querySelectorAll(".nav-list, .mobile-nav-list").forEach(markActive);
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  }

  /* ---------- Init ---------- */
  function init() {
    applyBindings();
    initStickyHeader();
    initMobileMenu();
    initReveal();
    initSmoothScroll();
    initYear();
    refreshActiveNav();
    window.addEventListener("hashchange", refreshActiveNav);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
