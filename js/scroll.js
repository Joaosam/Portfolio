addEventListener('scroll', roll)
function roll() {
  activateMenu(home)
  activateMenu(profile)
  activateMenu(skills)
  activateMenu(projects)
}

const activateMenu = section => {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargeLine = sectionEndsAt <= targetLine
  const sectionLimit =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargeLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(
    `.navigation a[href*=${sectionId}]`
  )
  menuElement.classList.remove('active')
  if (sectionLimit) {
    menuElement.classList.add('active')
  }

  if (scrollY > 0) {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    document.getElementById('currentDate').innerHTML = currentYear
  }
}

export default activateMenu
