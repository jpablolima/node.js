const { readFile} = require('fs') //modulo para realizar leitura do arquivo 
const { promisify } = require('util')
const readFileAsync = promisify(readFile)

class Database {
    constructor() {
      this.NOME_ARQUIVO = 'registro.json'
    }
  async obterDadosArquivo() {
      const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
      return JSON.parse(arquivo.toString())
  }
  escreverArquivo() {
       
  }
  async listar(id) {
    const dados = await this.obterDadosArquivo()
    const dadospFiltrados = dados.filter(item => (id ? (item.id === id) : true))
    return dadospFiltrados
  }
}
module.exports = new Database()