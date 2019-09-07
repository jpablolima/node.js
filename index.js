/*
    1 obter um usuário
    2 obter numero de telefone pelo ID
    3 obter endereço pelo id
*/
// modulo interno do node.js
const util = require('util')
const obterEnderecoAsync  = util.promisify(obterEndereco)

function obterUsuario () {
    // Quando ocorrer problema -> reject(erro)
    // Sucesso -> Resolve
    return new Promise(function resolverPromise(resolve, reject){
        setTimeout(function () {
             return resolve ({
                id: 1,
                nome: 'Gandalf',
                dataNascimento: new Date()
         })
      }, 1000) // tempo em milisegundo
    })
}

function obterTelefone( idUsuario ) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(()  => {
           return resolve({
               telefone: '61999998',
               ddd:61
           })
       }, 2000); // tempo em milissegundo 
    })

}

function obterEndereco (idUsuario, callback) {
   setTimeout(() => {
       return callback(null,  {
          rua: 'Valfenda',
          numero: 10
       })
   }, 2000);
}
// Adcionar a palavra async, automaticamente ele retonará um Promise
main()
async function main() {
    try {
        console.time('medida-promise') //tempo de execução da função
        const usuario = await obterUsuario()
        /* const telefone = await obterTelefone(usuario.id)
        const endereco = await obterEnderecoAsync(usuario.id) */
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEnderecoAsync(usuario.id)
        ])
        const endereco = resultado[1]
        const telefone = resultado[0]
            console.log(`
                Nome: ${usuario.nome},
                Telefone: (${telefone.ddd}) ${telefone.telefone}
                Endereco: ${endereco.rua}, ${endereco.numero}
            `)
            console.timeEnd('medida-promise') //fi do tempo de execução da função
    } catch (error) {
        console.log('Erro', error)
    }
}



// Para manipular o Sucesso usa função .then
// Para manipular erros  usa função .catch
/* const usuarioPromise = obterUsuario()
usuarioPromise */
  /*   .then(function (usuario) {
        return obterTelefone(usuario.id)
            .then(function resolverTelefone(result) {
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone: result
                }
            })
    })
    .then(function (resultado) {
        const endereco = obterEnderecoAsync(resultado.usuario.id)
        return endereco.then(function resolveEndereco(result) {
            return{
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: result    
            }
        })
    })
    .then(function (resultado) {
        console.log(`
            Nome: ${resultado.usuario.nome}
            Endereco: ${resultado.endereco.rua}, ${resultado.endereco.numero}
            Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}
        `)
    })
    .catch(function(erro) {
        console.error('erro', error)
    }) */








/* function resolverUsuario(erro, usuario) {
    console.log('usuario', usuario)
}
 *//* 
obterUsuario(function resolverUsuario(error, usuario) {
    if(error) {
        console.error('Error em Usuário', error)
        return;
    } *//* 
obterTelefone(usuario.id,  function resolveTelefone(error1, telefone) {
        if(error1) {
            console.error1('Error em Telefone', error)
            return;
        }
obterEndereco(usuario.id, function resolveEndereco(erro2, endereco) {
         if(erro2) {
             console.error('Erro em Telefone!', error)
             return;
         } */
         
        /*  console.log(`
         Nome:${usuario.nome},
         Endereco:${endereco.rua}, ${endereco.numero},
         Telefone:(${telefone.ddd})${telefone.telefone}
         `)
     })
  })
})
 */


//const usuário = obterUsuario()
//const telefone = obterTelefone(usuário.id)

//console.log('usuario', usuario)
//console.log('telefone', telefone)