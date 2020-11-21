import createHtml from './createHtml.js'
import buscarCep from './buscarCep.js'

const inputCep = document.getElementById('inputCep')

inputCep.addEventListener('keyup', handleKeyUp)

async function handleKeyUp () {
  const outputCep = document.getElementById('outputCep')
  const cep = inputCep.value

  if (cep.length < 8) return

  if (cep.length > 8) {
    outputCep.innerHTML = 'Você inseriu um CEP inválido'
    return
  }

  const dadosCep = await buscarCep(cep)

  outputCep.innerHTML = createHtml(dadosCep)
}
