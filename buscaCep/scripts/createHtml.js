export default function createHtml (cepObj) {
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
