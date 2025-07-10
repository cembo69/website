// Matter.js Setup und Website-Funktionalität
import { Engine, Render, World, Bodies, Body, Mouse, MouseConstraint } from "matter-js"

class MinimalShop {
  constructor() {
    this.init()
    this.setupMatterJS()
    this.setupScrollEffects()
    this.setupNavigation()
  }

  init() {
    // DOM-Elemente cachen
    this.header = document.getElementById("header")
    this.navToggle = document.getElementById("nav-toggle")
    this.navMenu = document.getElementById("nav-menu")
    this.canvas = document.getElementById("matter-canvas")

    // Scroll-Position tracken
    this.lastScrollY = window.scrollY
    this.ticking = false
  }

  setupMatterJS() {
    // Engine erstellen
    this.engine = Engine.create()
    this.world = this.engine.world

    // Gravity reduzieren für schwebende Effekte
    this.engine.world.gravity.y = 0.3

    // Renderer erstellen
    this.render = Render.create({
      canvas: this.canvas,
      engine: this.engine,
      options: {
        width: window.innerWidth,
        height: 200,
        wireframes: false,
        background: "transparent",
        showAngleIndicator: false,
        showVelocity: false,
        showDebug: false,
      },
    })

    // Unsichtbare Wände erstellen
    const walls = [
      Bodies.rectangle(window.innerWidth / 2, -10, window.innerWidth, 20, {
        isStatic: true,
        render: { visible: false },
      }),
      Bodies.rectangle(window.innerWidth / 2, 210, window.innerWidth, 20, {
        isStatic: true,
        render: { visible: false },
      }),
      Bodies.rectangle(-10, 100, 20, 200, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(window.innerWidth + 10, 100, 20, 200, { isStatic: true, render: { visible: false } }),
    ]

    // Schwebende Produktkarten erstellen
    this.createFloatingElements()

    // Wände zur Welt hinzufügen
    World.add(this.world, walls)

    // Mouse-Interaktion
    const mouse = Mouse.create(this.render.canvas)
    const mouseConstraint = MouseConstraint.create(this.engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    })

    World.add(this.world, mouseConstraint)

    // Renderer starten
    Render.run(this.render)

    // Engine starten
    const runner = Matter.Runner.create()
    Matter.Runner.run(runner, this.engine)

    // Resize-Handler
    window.addEventListener("resize", () => this.handleResize())
  }

  createFloatingElements() {
    const colors = ["#007AFF", "#34C759", "#FF9500", "#FF3B30", "#AF52DE"]
    const shapes = []

    // Verschiedene schwebende Elemente erstellen
    for (let i = 0; i < 8; i++) {
      const x = Math.random() * (window.innerWidth - 100) + 50
      const y = Math.random() * 150 + 25
      const size = Math.random() * 20 + 15
      const color = colors[Math.floor(Math.random() * colors.length)]

      let shape

      if (Math.random() > 0.5) {
        // Kreise
        shape = Bodies.circle(x, y, size, {
          render: {
            fillStyle: color,
            strokeStyle: "transparent",
            lineWidth: 0,
          },
          frictionAir: 0.01,
          restitution: 0.8,
        })
      } else {
        // Rechtecke
        shape = Bodies.rectangle(x, y, size * 1.5, size * 1.5, {
          render: {
            fillStyle: color,
            strokeStyle: "transparent",
            lineWidth: 0,
          },
          frictionAir: 0.01,
          restitution: 0.8,
        })
      }

      shapes.push(shape)

      // Sanfte Bewegung hinzufügen
      setInterval(
        () => {
          const force = {
            x: (Math.random() - 0.5) * 0.001,
            y: (Math.random() - 0.5) * 0.001,
          }
          Body.applyForce(shape, shape.position, force)
        },
        2000 + Math.random() * 3000,
      )
    }

    World.add(this.world, shapes)
    this.floatingShapes = shapes
  }

  handleResize() {
    // Canvas-Größe anpassen
    this.render.canvas.width = window.innerWidth
    this.render.options.width = window.innerWidth

    // Wände neu positionieren
    const walls = this.world.bodies.filter((body) => body.isStatic)
    walls.forEach((wall) => {
      World.remove(this.world, wall)
    })

    const newWalls = [
      Bodies.rectangle(window.innerWidth / 2, -10, window.innerWidth, 20, {
        isStatic: true,
        render: { visible: false },
      }),
      Bodies.rectangle(window.innerWidth / 2, 210, window.innerWidth, 20, {
        isStatic: true,
        render: { visible: false },
      }),
      Bodies.rectangle(-10, 100, 20, 200, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(window.innerWidth + 10, 100, 20, 200, { isStatic: true, render: { visible: false } }),
    ]

    World.add(this.world, newWalls)
  }

  setupScrollEffects() {
    // Scroll-Event mit Throttling
    window.addEventListener("scroll", () => {
      if (!this.ticking) {
        requestAnimationFrame(() => {
          this.updateOnScroll()
          this.ticking = false
        })
        this.ticking = true
      }
    })

    // Intersection Observer für Animationen
    this.setupIntersectionObserver()
  }

  updateOnScroll() {
    const currentScrollY = window.scrollY

    // Header-Effekte
    if (currentScrollY > 100) {
      this.header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
      this.header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
    } else {
      this.header.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
      this.header.style.boxShadow = "none"
    }

    // Matter.js Elemente durch Scroll beeinflussen
    if (this.floatingShapes && Math.abs(currentScrollY - this.lastScrollY) > 5) {
      const scrollDelta = currentScrollY - this.lastScrollY

      this.floatingShapes.forEach((shape, index) => {
        const force = {
          x: (Math.random() - 0.5) * 0.002,
          y: scrollDelta * 0.0001 * (index % 2 === 0 ? 1 : -1),
        }
        Body.applyForce(shape, shape.position, force)
      })
    }

    this.lastScrollY = currentScrollY
  }

  setupIntersectionObserver() {
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

    // Elemente beobachten
    const animatedElements = document.querySelectorAll(".product-card, .hero-content, .about-text")
    animatedElements.forEach((el) => observer.observe(el))
  }

  setupNavigation() {
    // Mobile Navigation Toggle
    this.navToggle.addEventListener("click", () => {
      this.navMenu.classList.toggle("active")
      this.navToggle.classList.toggle("active")
    })

    // Navigation Links
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href")

        if (href.startsWith("#")) {
          e.preventDefault()
          const target = document.querySelector(href)

          if (target) {
            const offsetTop = target.offsetTop - 80
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            })
          }

          // Mobile Menu schließen
          this.navMenu.classList.remove("active")
          this.navToggle.classList.remove("active")
        }
      })
    })

    // Außerhalb des Menüs klicken schließt es
    document.addEventListener("click", (e) => {
      if (!this.navToggle.contains(e.target) && !this.navMenu.contains(e.target)) {
        this.navMenu.classList.remove("active")
        this.navToggle.classList.remove("active")
      }
    })

    // ESC-Taste schließt Mobile Menu
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.navMenu.classList.remove("active")
        this.navToggle.classList.remove("active")
      }
    })
  }

  // Produktkarten-Interaktionen
  setupProductInteractions() {
    const productCards = document.querySelectorAll(".product-card")

    productCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        // Sanfte Hover-Effekte
        card.style.transform = "translateY(-8px) scale(1.02)"
      })

      card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)"
      })
    })

    // Button-Interaktionen
    const buttons = document.querySelectorAll(".btn")
    buttons.forEach((button) => {
      button.addEventListener("click", (e) => {
        // Ripple-Effekt
        const ripple = document.createElement("span")
        const rect = button.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height)
        const x = e.clientX - rect.left - size / 2
        const y = e.clientY - rect.top - size / 2

        ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: ripple 0.6s linear;
                    pointer-events: none;
                `

        button.style.position = "relative"
        button.style.overflow = "hidden"
        button.appendChild(ripple)

        setTimeout(() => {
          ripple.remove()
        }, 600)
      })
    })
  }

  // Performance-Optimierungen
  optimizePerformance() {
    // Lazy Loading für Bilder
    const images = document.querySelectorAll('img[loading="lazy"]')

    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src || img.src
            img.classList.remove("lazy")
            imageObserver.unobserve(img)
          }
        })
      })

      images.forEach((img) => imageObserver.observe(img))
    }

    // Preload kritische Ressourcen
    const criticalImages = ["/placeholder.svg?height=400&width=400"]
    criticalImages.forEach((src) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = src
      document.head.appendChild(link)
    })
  }
}

// CSS für Ripple-Animation hinzufügen
const rippleStyle = document.createElement("style")
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(rippleStyle)

// App initialisieren wenn DOM geladen ist
document.addEventListener("DOMContentLoaded", () => {
  const app = new MinimalShop()
  app.setupProductInteractions()
  app.optimizePerformance()

  // Service Worker registrieren (falls verfügbar)
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Service Worker nicht verfügbar, ignorieren
    })
  }
})

// Error Handling
window.addEventListener("error", (e) => {
  console.error("JavaScript Error:", e.error)
})

window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled Promise Rejection:", e.reason)
})

// Performance Monitoring
if ("performance" in window) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType("navigation")[0]
      console.log("Page Load Time:", perfData.loadEventEnd - perfData.loadEventStart, "ms")
    }, 0)
  })
}
