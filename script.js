// ================================
// 1. SMOOTH SCROLLING
// ================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth' })
      // Close mobile nav after clicking
      document.querySelector('.nav-links').classList.remove('open')
    }
  })
})

// ================================
// 2. MOBILE NAV TOGGLE
// ================================
const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelector('.nav-links')
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open')
  })
}

// ================================
// 3. FADE IN SECTIONS ON SCROLL
// ================================
const sections = document.querySelectorAll('section:not(#hero)')
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, { threshold: 0.07 })
sections.forEach(section => observer.observe(section))

// ================================
// 4. PROJECT CARDS GLOW ON HOVER
// ================================
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 30px rgba(0, 229, 255, 0.15)'
  })
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none'
  })
})

// ================================
// 5. TYPING EFFECT ON HERO TITLE
// ================================
const heroTitle = document.querySelector('.hero-title')
if (heroTitle) {
  const originalText = heroTitle.textContent
  heroTitle.textContent = ''
  let i = 0
  setTimeout(() => {
    function type() {
      if (i < originalText.length) {
        heroTitle.textContent += originalText.charAt(i)
        i++
        setTimeout(type, 40)
      }
    }
    type()
  }, 900)
}

// ================================
// 6. ACTIVE NAV HIGHLIGHT
// ================================
const allNavLinks = document.querySelectorAll('.nav-links a')
const allSections = document.querySelectorAll('section[id]')
window.addEventListener('scroll', () => {
  let current = ''
  allSections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 130) {
      current = section.getAttribute('id')
    }
  })
  allNavLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current
      ? 'var(--accent)'
      : 'var(--muted)'
  })
}, { passive: true })

// ================================
// 7. LANGUAGE BAR ANIMATION
// ================================
const langFills = document.querySelectorAll('.lang-fill')
const langObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target
      const targetWidth = fill.style.width
      fill.style.width = '0%'
      requestAnimationFrame(() => {
        setTimeout(() => { fill.style.width = targetWidth }, 50)
      })
      langObserver.unobserve(fill)
    }
  })
}, { threshold: 0.5 })
langFills.forEach(fill => langObserver.observe(fill))
