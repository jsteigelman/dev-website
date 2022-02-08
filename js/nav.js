const toggleNav = () => {
  const nav = document.querySelector('ul')
  const backgroundLayer = document.querySelector('.bgLayer')

  if (nav.style.display === 'none') {
    nav.style.display = 'flex'
    backgroundLayer.style.display = 'block'
  } else {
    nav.style.display = 'none'
    backgroundLayer.style.display = 'none'
  }
}
