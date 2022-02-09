const openAboutDrawer = () => {
  document.querySelector('.aboutDrawer').style.display = 'block'
  document.querySelector('.hamburger-icon').src = './../img/hamburger_open.png'
}

const closeAboutDrawer = () => {
  document.querySelector('.aboutDrawer').style.display = 'none'
}
