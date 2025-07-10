// Product Data
const products = [
  {
    id: 1,
    name: "Supreme Box Logo Hoodie",
    brand: "Supreme",
    price: 299,
    originalPrice: 399,
    image: "bilder/IMG_0371.HEIC",
    isNew: true,
    isSale: true,
  },
  {
    id: 2,
    name: "BAPE Shark Full Zip Hoodie",
    brand: "A Bathing Ape",
    price: 459,
    image: "bilder/IMG_0372.HEIC",
    isNew: true,
  },
  {
    id: 3,
    name: "Off-White Diagonal Tee",
    brand: "Off-White",
    price: 189,
    image: "bilder/IMG_0376.HEIC",
  },
  {
    id: 4,
    name: "Stone Island Cargo Pants",
    brand: "Stone Island",
    price: 329,
    image: "bilder/IMG_0385.HEIC",
  },
  {
    id: 5,
    name: "Palace Tri-Ferg Tee",
    brand: "Palace",
    price: 89,
    originalPrice: 119,
    image: "bilder/IMG_0387.HEIC",
    isSale: true,
  },
  {
    id: 6,
    name: "Fear of God Essentials Hoodie",
    brand: "Fear of God",
    price: 199,
    image: "bilder/IMG_0403.HEIC",
    isNew: true,
  },
  {
    id: 7,
    name: "Stussy 8 Ball Fleece",
    brand: "Stussy",
    price: 149,
    image: "bilder/IMG_0404.HEIC",
  },
  {
    id: 8,
    name: "Kith Williams III Hoodie",
    brand: "Kith",
    price: 179,
    image: "bilder/IMG_0559.heic",
  },
  {
    id: 9,
    name: "Travis Scott x Nike Air Jordan 1",
    brand: "Nike",
    price: 899,
    originalPrice: 1199,
    image: "bilder/IMG_1446.HEIC",
    isNew: true,
    isSale: true,
  },
  {
    id: 10,
    name: "Yeezy Boost 350 V2",
    brand: "Adidas",
    price: 220,
    image: "bilder/IMG_4957.PNG",
    isNew: true,
  },
  {
    id: 11,
    name: "Chrome Hearts Cross Hoodie",
    brand: "Chrome Hearts",
    price: 789,
    image: "bilder/IMG_5622.HEIC",
  },
  {
    id: 12,
    name: "Rhude Logo Tee",
    brand: "Rhude",
    price: 145,
    image: "bilder/IMG_5623.HEIC",
  },
  {
    id: 13,
    name: "Balenciaga Triple S Sneakers",
    brand: "Balenciaga",
    price: 995,
    originalPrice: 1295,
    image: "bilder/IMG_5633.HEIC",
    isSale: true,
  },
  {
    id: 14,
    name: "Vetements Oversized Hoodie",
    brand: "Vetements",
    price: 525,
    image: "bilder/IMG_5635.HEIC",
    isNew: true,
  },
  {
    id: 15,
    name: "Anti Social Social Club Hoodie",
    brand: "ASSC",
    price: 165,
    image: "bilder/IMG_6920.heic",
  },
  {
    id: 16,
    name: "Amiri Distressed Jeans",
    brand: "Amiri",
    price: 1150,
    image: "bilder/IMG_6923.heic",
  },
  {
    id: 17,
    name: "Dior B23 High-Top Sneakers",
    brand: "Dior",
    price: 1290,
    image: "bilder/IMG_7587.HEIC",
  },
  {
    id: 18,
    name: "Essentials Fear of God Sweatpants",
    brand: "Fear of God",
    price: 140,
    originalPrice: 180,
    image: "bilder/IMG_7588.HEIC",
    isSale: true,
  },
  {
    id: 19,
    name: "Mastermind Japan Skull Hoodie",
    brand: "Mastermind",
    price: 890,
    image: "bilder/IMG_8240.heic",
  },
  {
    id: 20,
    name: "Gallery Dept. Carpenter Jeans",
    brand: "Gallery Dept.",
    price: 595,
    image: "bilder/IMG_8277.HEIC",
  },
  {
    id: 21,
    name: "Golden Goose Superstar Sneakers",
    brand: "Golden Goose",
    price: 465,
    image: "bilder/IMG_8490.HEIC",
    isNew: true,
  },
  {
    id: 22,
    name: "Comme des Garçons Play Tee",
    brand: "CDG",
    price: 95,
    image: "bilder/IMG_8499 8.jpg",
  },
  {
    id: 23,
    name: "Maison Margiela Tabi Boots",
    brand: "Maison Margiela",
    price: 1495,
    image: "bilder/IMG_8499 9.jpg",
  },
  {
    id: 24,
    name: "Rick Owens DRKSHDW Sneakers",
    brand: "Rick Owens",
    price: 790,
    originalPrice: 950,
    image: "bilder/IMG_9292.PNG",
    isSale: true,
  },
  {
    id: 25,
    name: "Jacquemus Le Chiquito Bag",
    brand: "Jacquemus",
    price: 695,
    image: "bilder/IMG_9481.HEIC",
    isNew: true,
  },
]

// Shopping Cart
const cart = []

// DOM Elements
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const searchBtn = document.getElementById("searchBtn")
const searchBar = document.getElementById("searchBar")
const searchClose = document.getElementById("searchClose")
const cartBtn = document.getElementById("cartBtn")
const cartModal = document.getElementById("cartModal")
const cartClose = document.getElementById("cartClose")
const cartCount = document.getElementById("cartCount")
const productsGrid = document.getElementById("productsGrid")
const newsletterForm = document.getElementById("newsletterForm")
const continueShopping = document.getElementById("continueShopping")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadProducts()
  updateCartCount()
  setupEventListeners()
})

// Event Listeners
function setupEventListeners() {
  // Mobile Menu
  mobileMenuBtn.addEventListener("click", toggleMobileMenu)

  // Search
  searchBtn.addEventListener("click", toggleSearch)
  searchClose.addEventListener("click", toggleSearch)

  // Cart
  cartBtn.addEventListener("click", toggleCart)
  cartClose.addEventListener("click", toggleCart)
  continueShopping.addEventListener("click", toggleCart)

  // Newsletter
  newsletterForm.addEventListener("submit", handleNewsletterSubmit)

  // Close modals on outside click
  cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) {
      toggleCart()
    }
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  mobileMenu.classList.toggle("active")

  // Animate hamburger menu
  const spans = mobileMenuBtn.querySelectorAll("span")
  if (mobileMenu.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
    spans[1].style.opacity = "0"
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
  } else {
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
}

// Search Toggle
function toggleSearch() {
  searchBar.classList.toggle("active")
  if (searchBar.classList.contains("active")) {
    document.getElementById("searchInput").focus()
  }
}

// Cart Toggle
function toggleCart() {
  cartModal.classList.toggle("active")
  if (cartModal.classList.contains("active")) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = ""
  }
}

// Load Products
function loadProducts() {
  productsGrid.innerHTML = ""

  products.forEach((product) => {
    const productCard = createProductCard(product)
    productsGrid.appendChild(productCard)
  })
}

// Create Product Card
function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"

  card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-badges">
                ${product.isNew ? '<span class="badge badge-new">Neu</span>' : ""}
                ${product.isSale ? '<span class="badge badge-sale">Sale</span>' : ""}
            </div>
            <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>
            <button class="quick-add-btn" onclick="addToCart(${product.id})">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Schnell hinzufügen
            </button>
        </div>
        <div class="product-info">
            <div class="product-brand">${product.brand}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">
                <span class="price-current">€${product.price}</span>
                ${product.originalPrice ? `<span class="price-original">€${product.originalPrice}</span>` : ""}
            </div>
        </div>
    `

  return card
}

// Add to Cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  if (product) {
    const existingItem = cart.find((item) => item.id === productId)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }
    updateCartCount()
    showNotification(`${product.name} wurde zum Warenkorb hinzugefügt!`)
  }
}

// Toggle Wishlist
function toggleWishlist(productId) {
  const product = products.find((p) => p.id === productId)
  if (product) {
    showNotification(`${product.name} wurde zur Wunschliste hinzugefügt!`)
  }
}

// Update Cart Count
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCount.textContent = totalItems
}

// Show Notification
function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #1f2937;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-size: 14px;
        font-weight: 500;
    `
  notification.textContent = message

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Newsletter Submit
function handleNewsletterSubmit(e) {
  e.preventDefault()
  const email = e.target.querySelector('input[type="email"]').value
  showNotification(`Danke für deine Anmeldung, ${email}!`)
  e.target.reset()
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(".store-card, .product-card")
  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Lazy loading for images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src || img.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img)
  })
}

// Smooth scroll polyfill for older browsers
if (!("scrollBehavior" in document.documentElement.style)) {
  const smoothScrollPolyfill = () => {
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          const targetPosition = target.offsetTop - 70
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      })
    })
  }
  smoothScrollPolyfill()
}

// Performance optimization: Debounce scroll events
let ticking = false

function updateScrollPosition() {
  const scrolled = window.pageYOffset
  const header = document.querySelector(".header")

  if (scrolled > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.98)"
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
    header.style.boxShadow = "none"
  }

  ticking = false
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(updateScrollPosition)
    ticking = true
  }
}

window.addEventListener("scroll", requestTick)

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  // ESC key closes modals
  if (e.key === "Escape") {
    if (cartModal.classList.contains("active")) {
      toggleCart()
    }
    if (searchBar.classList.contains("active")) {
      toggleSearch()
    }
    if (mobileMenu.classList.contains("active")) {
      toggleMobileMenu()
    }
  }

  // Enter key on search
  if (e.key === "Enter" && document.activeElement === document.getElementById("searchInput")) {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase()
    if (searchTerm) {
      searchProducts(searchTerm)
    }
  }
})

// Search functionality
function searchProducts(searchTerm) {
  const filteredProducts = products.filter(
    (product) => product.name.toLowerCase().includes(searchTerm) || product.brand.toLowerCase().includes(searchTerm),
  )

  productsGrid.innerHTML = ""

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 48px 0;">
                <p style="color: #6b7280; font-size: 18px;">Keine Produkte gefunden für "${searchTerm}"</p>
                <button class="btn btn-primary" onclick="loadProducts()" style="margin-top: 16px;">Alle Produkte anzeigen</button>
            </div>
        `
  } else {
    filteredProducts.forEach((product) => {
      const productCard = createProductCard(product)
      productsGrid.appendChild(productCard)
    })
  }

  // Scroll to products section
  document.getElementById("products").scrollIntoView({ behavior: "smooth" })
}

// Touch/swipe support for mobile
let touchStartX = 0
let touchEndX = 0

document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX
})

document.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
})

function handleSwipe() {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0 && mobileMenu.classList.contains("active")) {
      // Swipe left to close mobile menu
      toggleMobileMenu()
    }
  }
}

// Preload critical images
function preloadImages() {
  const criticalImages = [
    "bilder/IMG_8499 10.jpg", // Hero image
    "bilder/IMG_7583.HEIC", // New York Store
    "bilder/IMG_8270.HEIC", // Los Angeles Store
    "bilder/IMG_5621.HEIC", // London Store
    "bilder/IMG_0682.HEIC", // Tokyo Store
    "bilder/IMG_0371.HEIC", // First product
    "bilder/IMG_0372.HEIC", // Second product
    "bilder/IMG_0376.HEIC", // Third product
    "bilder/IMG_0385.HEIC", // Fourth product
  ]

  criticalImages.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

// Initialize preloading
preloadImages()

// Service Worker registration for PWA capabilities (optional)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("ServiceWorker registration successful")
      })
      .catch((err) => {
        console.log("ServiceWorker registration failed")
      })
  })
}

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData) {
  // Placeholder for analytics tracking
  console.log("Event tracked:", eventName, eventData)
}

// Track product interactions
function trackProductView(productId) {
  trackEvent("product_view", { product_id: productId })
}

function trackAddToCart(productId) {
  trackEvent("add_to_cart", { product_id: productId })
}

// Error handling
window.addEventListener("error", (e) => {
  console.error("JavaScript error:", e.error)
  // Could send error to logging service
})

// Performance monitoring
window.addEventListener("load", () => {
  setTimeout(() => {
    const perfData = performance.getEntriesByType("navigation")[0]
    console.log("Page load time:", perfData.loadEventEnd - perfData.loadEventStart, "ms")
  }, 0)
})
