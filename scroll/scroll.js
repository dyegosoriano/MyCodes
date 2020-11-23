// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo
const menuItems = document.querySelectorAll('.menu a[href^="#"]')

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick (event) {
  event.preventDefault()
  event.stopPropagation()

  const topSpacing = 0 // Coloque aqui o valor em pixels para espaçamento do topo
  const to = getScrollTopByHref(event.target) - topSpacing

  smoothScrollTo(0, to)
}

function getScrollTopByHref (element) {
  const id = element.getAttribute('href')
  return document.querySelector(id).offsetTop
}

function easeInOutQuart (time, from, distance, duration) {
  if ((time /= duration / 2) < 1) {
    return (distance / 2) * time * time * time * time + from
  }

  return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo (endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset
  const startY = window.scrollY || window.pageYOffset

  const distanceX = endX - startX
  const distanceY = endY - startY

  const startTime = new Date().getTime()

  duration = typeof duration !== 'undefined' ? duration : 1000

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime

    const newX = easeInOutQuart(time, startX, distanceX, duration)
    const newY = easeInOutQuart(time, startY, distanceY, duration)

    if (time >= duration) {
      clearInterval(timer)
    }

    window.scroll(newX, newY)
  }, 1000 / 60) // 60 fps
}
