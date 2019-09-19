const { deepEqual, ok} = require('assert')
const database = require('./database')

const   DEFAULT_ITEM_CADASTRAR = {
  nome:   'Flash',
  poder:  'Speed',
  id: 1
}
const DEFAULT_ITEM_ATUALIZAR = {
    nome: "Batman",
    poder:"Rico",
    id: 2
}
describe('Manipulação de Registro', () => {
    before(async () => {
      await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
      await database.cadastrar(DEFAULT_ITEM_ATUALIZAR)
    })
  before(async () => {
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
  })
  it( 'Pesquisar por registro usando Arquivos', async() => {
    const expected =  DEFAULT_ITEM_CADASTRAR
    const [resultado] = await database.listar(expected.id)

    deepEqual( resultado, expected)
  })
  it('Realizar cadastro', async () => {
    const expected =  DEFAULT_ITEM_CADASTRAR
    /* {
      ...DEFAULT_ITEM_CADASTRAR,
      id:2,
      nome: 'Batman'
    } */
    const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR)
    const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id)    

    deepEqual(actual, expected) 
  })
  it('Remover dados pelo id', async () => {
    const expected = true
    const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id)
    deepEqual(resultado, expected)
  })
  it('Atualizar dados pelo id', async() => {
    const expected = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome: 'Lanterna Verde',
      poder: 'Energia'
    }
    const novoDado = {
      nome: 'Lanterna Verde',
      poder: 'Energia'
    }
    await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoDado)
    const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id)
    deepEqual(resultado, expected)
  })

})