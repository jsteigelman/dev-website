const toggleNav = () => {
  const nav = document.querySelector('ul')
  const backgroundLayer = document.querySelector('.bgLayer')
  const icon = document.querySelector('.hamburger-icon')

  if (nav.style.display === 'none') {
    nav.style.display = 'flex'
    backgroundLayer.style.display = 'block'
    icon.src = './../img/hamburger_closed.png'
  } else {
    nav.style.display = 'none'
    backgroundLayer.style.display = 'none'
    icon.src = './../img/hamburger_open.png'
  }
}

const closeMobileNav = () => {
    const backgroundLayer = document.querySelector('.bgLayer')
    if (backgroundLayer.style.display === 'block') {
        document.querySelector('ul').style.display = 'none'
        icon.src = './../img/hamburger_open.png'
    }
}
