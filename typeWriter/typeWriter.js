// Script que adiciona edeito da "Maquina de Escrever"

const titulo = document.querySelector('h1')

function typeWriter (element) {
  const textoArray = element.innerHTML.split('')

  element.innerHTML = ''

  textoArray.forEach((letra, i) => {
    setTimeout(() => element.innerHTML += letra, 75 * i)
  })
}

// Caso estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
// function typeWriter(element) {
//   const textoArray = element.innerHTML.split('');
//   element.innerHTML = '';
//   for(let i = 0; i < textoArray.length; i++) {
//     setTimeout(() => element.innerHTML += textoArray[i], 75 * i);
//   }
// }

typeWriter(titulo)
