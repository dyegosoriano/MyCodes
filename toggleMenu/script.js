const toggleMenu = document.querySelector('.toggle-menu')
const detailsButton = document.querySelectorAll('.toggle-menu span')
const menu = document.querySelector('.menu')

toggleMenu.addEventListener('click', event => {
  event.preventDefault()

  detailsButton.forEach(span => {
    span.classList.toggle('active')
    if (!span.classList.contains('active')) {
      span.classList.add('deactivate')
    } else {
      span.classList.remove('deactivate')
    }
  })

  menu.classList.toggle('menu-activated')
  if (menu.classList.contains('menu-activated')) {
    menu.classList.remove('menu-disabled')
  } else {
    menu.classList.add('menu-disabled')
  }
})
