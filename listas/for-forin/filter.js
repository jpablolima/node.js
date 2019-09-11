const { obterPessoas }  = require( './service') 
// Filtrar de  informações
/*
  Exemplo:
  const item = {
    nome: 'Pablo'
    idade: 28,
  }
  const  { nome, idade } = item
  console.log(nome, idade)
*/

async function main() {
  try{
      const {
        results
      } = await obterPessoas(`a`)
      // Retornar Booleano
      //false > remove da lista
      //true > mantem
      //não encontroou = -1
      //encontrou = posição no Array
      const familiaLars = results.filter((item, index, lista) => {
        console.log(`index: ${index}`, lista.length)
        return item.name.toLowerCase().indexOf(`lars`) !== -1
        
      })
      const names = familiaLars.map((pessoa) => pessoa.name)
      console.log(names)
} catch (error) {
  console.error('erro', error)
}
}
main()