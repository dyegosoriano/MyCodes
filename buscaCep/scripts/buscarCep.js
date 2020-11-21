export default async function buscarCep (cep) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(response => response)

    return response
  } catch (error) {
    console.log(`error.message >>> ${error.message} <<<`)
  }
}
