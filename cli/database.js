const { readFile, writeFile } = require('fs') //modulo para realizar leitura do arquivo 
const { promisify } = require('util')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)
class Database {
  constructor(){ this.NOME_ARQUIVO = 'registro.json' }
  
  async obterDadosArquivo() {
      const arquivo = await readFileAsync(this.NOME_ARQUIVO, 'utf8')
      return JSON.parse(arquivo.toString())
  }
  async escreverArquivo(dados) {
      await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados))
      return true 
    }
  async cadastrar(nome) {
    const dados = await this.obterDadosArquivo()
    const id = nome.id <= 2 ? nome.id : Date.now()
    
    const nomeComId = {
      id, 
      ...nome
    }
    const dadosFinal = [
      ...dados, 
      nomeComId
    ]
    const resultado = await this.escreverArquivo(dadosFinal)
    return resultado
  }
  async listar(id) { 
    const dados = await this.obterDadosArquivo()
    const dadospFiltrados = dados.filter(item => (id ? (item.id === id) : true))
    return dadospFiltrados
  }
}
module.exports = new Database()