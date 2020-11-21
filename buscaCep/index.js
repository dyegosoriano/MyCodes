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

async function buscarCep (cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(response => response)

    return response
  } catch (error) {
    console.log(`error.message >>> ${error.message} <<<`)
  }
}

function createHtml (cepObj) {
  const { logradouro, bairro, localidade, uf, cep } = cepObj

  const htmlRua = `<p><strong>Rua: </strong>${logradouro}</p>`
  const htmlBairro = `<p><strong>Bairro: </strong>${bairro}</p>`
  const htmlCidade = `<p><strong>Cidade: </strong>${localidade}</p>`
  const htmlUf = `<p><strong>UF: </strong>${uf}</p>`
  const htmlCep = `<p><strong>CEP: </strong>${cep}</p>`

  const html = `<div class='active'>${
    htmlRua + htmlBairro + htmlCidade + htmlUf + htmlCep
  }</div>`

  return html
}
