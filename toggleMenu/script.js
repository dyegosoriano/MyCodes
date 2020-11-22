const detailsButton = document.querySelectorAll('.toggle-menu span')
const toggleMenu = document.querySelector('.toggle-menu')
const menu = document.querySelector('.menu')

toggleMenu.addEventListener('click', event => {
  event.preventDefault()
  event.stopPropagation()

  detailsButton.forEach(span => {
    const spanClass = span.classList
    spanClass.toggle('active')
    const activeSpan = spanClass.contains('active')

    !activeSpan
      ? spanClass.add('deactivate')
      : spanClass.remove('deactivate')
  })

  const menuClass = menu.classList
  menuClass.toggle('menu-activated')
  const activeMenu = menuClass.contains('menu-activated')

  activeMenu
    ? menuClass.remove('menu-disabled')
    : menuClass.add('menu-disabled')
})
