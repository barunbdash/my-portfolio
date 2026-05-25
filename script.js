// ================================
// 1. SMOOTH SCROLLING
// ================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth' })
    }
  })
})

// ================================
// 2. FADE IN SECTIONS ON SCROLL
// ================================
const sections = document.querySelectorAll('section:not(#hero)')

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}, { threshold: 0.08 })

sections.forEach(section => observer.observe(section))

// ================================
// 3. PROJECT CARDS GLOW ON HOVER
// ================================
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 0 25px rgba(0, 229, 255, 0.2)'
  })
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = 'none'
  })
})

// ================================
// 4. TYPING EFFECT ON HERO TITLE
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
        setTimeout(type, 55)
      }
    }
    type()
  }, 800)
}

// ================================
// 5. ACTIVE NAV HIGHLIGHT
// ================================
const navLinks = document.querySelectorAll('.nav-links a')
const allSections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', () => {
  let current = ''
  allSections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id')
    }
  })
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === '#' + current
      ? 'var(--accent)'
      : 'var(--muted)'
  })
})