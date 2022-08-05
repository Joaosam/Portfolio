const initScrollReveal = () => {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000
  })
  sr.reveal('.smallDelay', { reset: true, delay: 200 })
  sr.reveal('.mediumDelay', { reset: true, delay: 300 })
  sr.reveal('.interval', { reset: true, interval: 400 })
}

export default initScrollReveal
