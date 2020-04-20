// Script responsavel pela revelação de conteudos a medida que for scrolando a página

// 1 - Importar esse script para a página
// 2 - Importar estilos CSS que estão em no arquivo scrollAnimate.css
// 3 - Adicionar atributos [data-anime="top", data-anime="right", data-anime="left"] aos conteudos que você quer animar
//     Examplo: <div id="relogio" data-anime="top"></div>

const debounce = function (func, wait, immediate) {
  let timeout
  return function (...args) {
    const contex = this
    const later = function () {
      timeout = null
      if (!immediate) func.apply(contex, args)
    }

    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(contex, args)
  }
}

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function animeScroll () {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
  target.forEach(function (element) {
    if ((windowTop) > element.offsetTop) {
      element.classList.add(animationClass)
    } else {
      element.classList.remove(animationClass)
    }
  })
}

animeScroll()

if (target.length) {
  window.addEventListener('scroll', debounce(function () {
    animeScroll()
  }, 200))
}
