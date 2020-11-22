// Script que adiciona efeito da "Maquina de Escrever"

const titulo = document.querySelector('h1')

function typeWriter (element) {
  const textArray = element.innerHTML.split('')

  element.innerHTML = ''

  textArray.forEach((letter, index) => {
    setTimeout(() => (element.innerHTML += letter), 75 * index)
  })
}

// Caso estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
// function typeWriter (element) {
//   const textArray = element.innerHTML.split('')
//   const textLength = textArray.length

//   element.innerHTML = ''

//   for (let i = 0; i < textLength; i++) {
//     setTimeout(() => element.innerHTML += textArray[i], 75 * i)
//   }
// }

typeWriter(titulo)
