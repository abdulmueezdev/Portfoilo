// ===== DOM Elements =====
const sidebar = document.getElementById("sidebar")
const hamburger = document.getElementById("hamburger")
const navLinks = document.querySelectorAll(".nav-link")
const themeToggle = document.getElementById("themeToggle")
const activeIndicator = document.getElementById("activeIndicator")
const contactForm = document.getElementById("contactForm")
const sections = document.querySelectorAll("section")
const filterBtns = document.querySelectorAll(".filter-btn")
const portfolioCards = document.querySelectorAll(".portfolio-card")

// ===== Initialize =====
document.addEventListener("DOMContentLoaded", () => {
  initTheme()
  initHeroAnimations()
  initScrollAnimations()
  initIntersectionObserver()
  initEventListeners()
  initHoverAnimations()
})

// ===== Theme Management =====
function initTheme() {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode")
    updateThemeIcon()
  }
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode")
  const isDarkMode = document.body.classList.contains("dark-mode")
  localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  updateThemeIcon()
})

function updateThemeIcon() {
  const isDarkMode = document.body.classList.contains("dark-mode")
  themeToggle.textContent = isDarkMode ? "☀️" : "🌙"
}

// ===== Sidebar & Navigation =====
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  document.body.classList.toggle("show-sidebar")
})

// Close sidebar when nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()

    if (window.innerWidth <= 768) {
      hamburger.classList.remove("active")
      document.body.classList.remove("show-sidebar")
    }

    const targetId = link.getAttribute("data-section")
    const targetSection = document.getElementById(targetId)
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" })
    }
  })
})

// ===== Intersection Observer - Active Section Indicator =====
function initIntersectionObserver() {
  const observerOptions = {
    root: null,
    rootMargin: "-50% 0px -50% 0px",
    threshold: 0,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id
        updateActiveNav(sectionId)
        updateIndicatorPosition(sectionId)
      }
    })
  }, observerOptions)

  sections.forEach((section) => observer.observe(section))
}

function updateActiveNav(sectionId) {
  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("data-section") === sectionId) {
      link.classList.add("active")
    }
  })
}

function updateIndicatorPosition(sectionId) {
  const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`)
  if (activeLink && sidebar.classList.contains("show-sidebar")) {
    const linkRect = activeLink.getBoundingClientRect()
    const sidebarRect = sidebar.getBoundingClientRect()
    const indicatorTop = linkRect.top - sidebarRect.top

    activeIndicator.style.top = indicatorTop + "px"
    activeIndicator.style.height = linkRect.height + "px"
    activeIndicator.style.opacity = "1"
  }
}

// ===== Portfolio Filtering =====
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active button
    filterBtns.forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")

    const filterValue = btn.getAttribute("data-filter")

    // Filter cards with animation
    portfolioCards.forEach((card) => {
      const category = card.getAttribute("data-category")
      if (filterValue === "all" || category === filterValue) {
        card.style.display = "block"
        setTimeout(() => {
          card.style.opacity = "1"
          card.style.transform = "scale(1)"
        }, 10)
      } else {
        card.style.opacity = "0"
        card.style.transform = "scale(0.9)"
        setTimeout(() => {
          card.style.display = "none"
        }, 300)
      }
    })
  })
})

// ===== Contact Form =====
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value

  // Simulate form submission (replace with actual API call)
  console.log("[v0] Form submitted:", { name, email, message })

  // Show success message
  const btn = contactForm.querySelector("button")
  const originalText = btn.textContent
  btn.textContent = "Message Sent! ✓"
  btn.style.backgroundColor = "#4caf50" // Assuming accent-green is a specific color

  setTimeout(() => {
    contactForm.reset()
    btn.textContent = originalText
    btn.style.backgroundColor = ""
  }, 3000)
})

// ===== Event Listeners Initialization =====
function initEventListeners() {
  // Add smooth hover animations to cards
  const cards = document.querySelectorAll(".stat-card, .service-card, .contact-card, .portfolio-card")
  cards.forEach((card) => {
    card.style.transition = "all 0.3s ease"
  })

  // On desktop, sidebar is always visible; on mobile it's controlled by hamburger
  window.addEventListener("scroll", () => {
    const heroSection = document.getElementById("home")
    const heroRect = heroSection.getBoundingClientRect()

    // Only show sidebar on mobile after scrolling past hero
    if (window.innerWidth <= 768 && heroRect.bottom < 0) {
      if (!document.body.classList.contains("show-sidebar")) {
        document.body.classList.add("show-sidebar")
      }
    }
  })
}

// ===== Utility: Smooth Scroll Polyfill (for older browsers) =====
if (!("scrollBehavior" in document.documentElement.style)) {
  // Fallback for browsers without smooth scroll support
  window.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && e.target.getAttribute("href").startsWith("#")) {
      e.preventDefault()
      const target = document.querySelector(e.target.getAttribute("href"))
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
  })
}

// ===== GSAP Animations =====
const gsap = window.gsap // Declare gsap variable
const ScrollTrigger = window.ScrollTrigger // Declare ScrollTrigger variable
gsap.registerPlugin(ScrollTrigger)

// ===== New hero animations with GSAP - letter-by-letter text and image reveal =====
function initHeroAnimations() {
  const heroTitle = document.querySelector(".hero-title")
  const heroSubtitle = document.querySelector(".hero-subtitle")
  const heroTagline = document.querySelector(".hero-tagline")
  const heroDescription = document.querySelector(".hero-description")
  const heroImage = document.querySelector(".hero-image")
  const btn = document.querySelector(".btn-primary")

  // Timeline for hero animations
  const heroTimeline = gsap.timeline()

  // Animate title letter by letter
  const titleChars = heroTitle.textContent.split("")
  heroTitle.textContent = ""
  titleChars.forEach((char) => {
    const span = document.createElement("span")
    span.textContent = char === " " ? "\u00A0" : char
    heroTitle.appendChild(span)
  })

  heroTimeline.from(".hero-title span", {
    duration: 0.05,
    opacity: 0,
    y: 20,
    stagger: 0.05,
    ease: "back.out",
  })

  // Animate subtitle
  heroTimeline.from(
    ".hero-subtitle",
    {
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: "power3.out",
    },
    "-=0.3",
  )

  // Animate tagline and description
  heroTimeline.from(
    [".hero-tagline", ".hero-description"],
    {
      duration: 0.6,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: "power2.out",
    },
    "-=0.5",
  )

  // Animate hero image
  heroTimeline.from(
    ".hero-image",
    {
      duration: 0.8,
      opacity: 0,
      x: 50,
      ease: "power3.out",
    },
    "-=0.6",
  )

  // Animate button
  heroTimeline.from(
    ".btn-primary",
    {
      duration: 0.6,
      opacity: 0,
      y: 20,
      ease: "power2.out",
    },
    "-=0.5",
  )
}

// ===== Scroll-based animations - fade in and slide up for sections =====
function initScrollAnimations() {
  // Animate section titles
  gsap.utils.toArray(".section-title").forEach((title) => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
        end: "top 50%",
        scrub: false,
      },
      duration: 0.8,
      opacity: 0,
      x: -50,
      ease: "power3.out",
    })
  })

  // Animate stat cards
  gsap.utils.toArray(".stat-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
      duration: 0.6,
      opacity: 0,
      y: 30,
      delay: i * 0.1,
      ease: "power2.out",
    })
  })

  // Animate service cards
  gsap.utils.toArray(".service-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
      duration: 0.6,
      opacity: 0,
      y: 30,
      delay: i * 0.1,
      ease: "power2.out",
    })
  })

  // Animate portfolio cards
  gsap.utils.toArray(".portfolio-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
      duration: 0.6,
      opacity: 0,
      y: 30,
      delay: i * 0.1,
      ease: "power2.out",
    })
  })

  // Animate certification items
  gsap.utils.toArray(".cert-item").forEach((cert, i) => {
    gsap.from(cert, {
      scrollTrigger: {
        trigger: cert,
        start: "top 85%",
      },
      duration: 0.6,
      opacity: 0,
      y: 30,
      delay: i * 0.1,
      ease: "power2.out",
    })
  })

  // Animate contact cards
  gsap.utils.toArray(".contact-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
      duration: 0.6,
      opacity: 0,
      y: 30,
      delay: i * 0.1,
      ease: "power2.out",
    })
  })
}

// ===== Enhanced hover animations using GSAP for bouncy/elastic effects =====
function initHoverAnimations() {
  // Portfolio cards with bouncy lift effect
  document.querySelectorAll(".portfolio-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.6,
        y: -15,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
        ease: "elastic.out(1, 0.5)",
      })
    })

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.6,
        y: 0,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        ease: "elastic.out(1, 0.5)",
      })
    })
  })

  // Certification items with bouncy lift
  document.querySelectorAll(".cert-item").forEach((cert) => {
    cert.addEventListener("mouseenter", () => {
      gsap.to(cert, {
        duration: 0.6,
        y: -10,
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)",
        ease: "elastic.out(1, 0.5)",
      })
    })

    cert.addEventListener("mouseleave", () => {
      gsap.to(cert, {
        duration: 0.6,
        y: 0,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        ease: "elastic.out(1, 0.5)",
      })
    })
  })

  // Service cards with lift
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.6,
        y: -12,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
        ease: "elastic.out(1, 0.5)",
      })
    })

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.6,
        y: 0,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        ease: "elastic.out(1, 0.5)",
      })
    })
  })

  // Button pulse effect
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        duration: 0.5,
        scale: 1.08,
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
        ease: "elastic.out(1, 0.4)",
      })

      // Subtle jiggle animation
      gsap.to(btn, {
        duration: 0.1,
        x: 2,
        repeat: 2,
        yoyo: true,
        ease: "sine.inOut",
      })
    })

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        duration: 0.5,
        scale: 1,
        boxShadow: "none",
        x: 0,
        ease: "elastic.out(1, 0.4)",
      })
    })
  })

  // Stat cards with subtle bounce
  document.querySelectorAll(".stat-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        duration: 0.6,
        y: -8,
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
        ease: "elastic.out(1, 0.5)",
      })
    })

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        duration: 0.6,
        y: 0,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
        ease: "elastic.out(1, 0.5)",
      })
    })
  })
}
