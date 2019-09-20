const Commander = require ('commander')
const Database = require('./database')
const Cadastrados = require('./cadastrados')

async function main () {
  Commander 
          .version('v1')
          .option('-n --nome [value]', 'Nome')
          .option('-p, --poder [value]', 'Poder')
          .option('-id, --id [value]', 'ID do cadastrado')

          .option('-c, --cadastrar', 'Cadastrar')
          .option('-l, --listar', 'Listar')
          .option('-r, --remover', 'Remover pelo ID')
          .option('-a, --atualizar [value]', 'Atualizar Registro pelo ID')

          .parse(process.argv) 

  const cadastrados = new Cadastrados(Commander)        
  
  try {
      if(Commander.cadastrar) {
          delete cadastrados.id
          const resultado = await Database.cadastrar(cadastrados)
          if (!resultado) {
            console.error('Não foi Cadastrado!')
        return;
      }
      console.log('Cadastro Realizado com Sucesso !')    
    }
      if(Commander.listar) {
        const resultado = await Database.listar()
        console.log(resultado)
        return;
      }
      if(Commander.remover) {
        const resultado = await Database.remover(cadastrados.id)
        if(!resultado) {
          console.error('Não foi possivel Remover!')
          return;
        }
        console.log('Removido com sucesso!')
      }
      if (Commander.atualizar) {
        const idParaAtualizar = parseInt(Commander.atualizar)
        const dado = JSON.stringify(cadastrados)
        const cadastradosAtualizar = JSON.parse(dado)
        const resultado = await Database.atualizar(idParaAtualizar, cadastradosAtualizar)
        if(!resultado) {
          console.error('Não foi possivel Atualizar Registro!')
          return
        }
        console.log('Atualização realizada com sucesso!')
      }

  }
  catch (error) {
    console.log('erro', error) 

  }
 }


main()