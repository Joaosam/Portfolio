const btnMobile = document.getElementById('btnMobile')

const toggleMenu = () => {
  const nav = document.querySelector('.navigation')
  const toggleNav = nav.classList.toggle('active')
  console.log(toggleNav)

  const classTagA = [
    '.goToHome',
    '.goToProfile',
    '.goToSkills',
    '.goToProjects'
  ]

  classTagA.forEach(currentValueClass => {
    const startCloseMenu = document.querySelector(`${currentValueClass}`)

    startCloseMenu.addEventListener('click', closeMenu)
  })

  function closeMenu() {
    document.getElementById('btn').checked = false
    nav.classList.remove('active')
  }
}

export default toggleMenu
btnMobile.addEventListener('click', toggleMenu)
