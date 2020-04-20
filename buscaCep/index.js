const inputCep = document.getElementById('inputCep')
const outputCep = document.getElementById('outputCep')

inputCep.addEventListener('keyup', handleKeyUp)

async function handleKeyUp () {
  const cep = inputCep.value

  outputCep.innerHTML = ''

  if (cep.length < 8) { return }

  if (cep.length > 8) {
    outputCep.innerHTML = 'Você inceriu um CEP inválido'
    return
  }

  const dadosCep = await buscarCep(cep)

  outputCep.innerHTML = ceratetHtml(dadosCep)

  console.log(dadosCep)
}

function ceratetHtml (cepObj) {
  const { logradouro, bairro, localidade, uf, cep } = cepObj

  const htmlRua = `<p><strong>Rua: </strong>${logradouro}</p>`
  const htmlBairro = `<p><strong>Bairro: </strong>${bairro}</p>`
  const htmlCidade = `<p><strong>Cidade: </strong>${localidade}</p>`
  const htmlUf = `<p><strong>UF: </strong>${uf}</p>`
  const htmlCep = `<p><strong>CEP: </strong>${cep}</p>`

  const html = `<div class='active'>${htmlRua + htmlBairro + htmlCidade + htmlUf + htmlCep}</div>`

  return html
}

function buscarCep (cep) {
  return fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(response => response)
}
