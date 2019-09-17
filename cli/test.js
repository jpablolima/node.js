const { deepEqual, ok} = require('assert')
const database = require('./database')

const   DEFAULT_ITEM_CADASTRAR = {
  nome:   'Flash',
  poder:  'Speed',
  id: 1
}
describe('Manipulação de Registro', () => {
  it( 'Pesquisar por registro usando Arquivos', async() => {
    const expected =  DEFAULT_ITEM_CADASTRAR
    const [resultado] = await database.listar(expected.id)
     deepEqual( resultado, expected)
  })
/*   it('Realizar cadastro', async () => {
    const expected = DEFAULT_ITEM_CADASTRAR
    ok(null, expected) 
  })*/
})