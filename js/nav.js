const toggleNav = () => {
  const nav = document.querySelector('ul')

  if (nav.style.display === 'none') {
    nav.style.display = 'flex'
  } else {
    nav.style.display = 'none'
  }
}
